import { Router } from 'express'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const router = Router()
const prisma = new PrismaClient()

// OTP Storage (in production, use Redis)
const otpStore = new Map<string, { otp: string; expiresAt: number }>()

// Send OTP
router.post('/send-otp', async (req, res) => {
    try {
        const schema = z.object({
            phone: z.string().length(10),
        })

        const { phone } = schema.parse(req.body)

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString()

        // Store OTP with 10-minute expiry
        otpStore.set(phone, {
            otp,
            expiresAt: Date.now() + 10 * 60 * 1000,
        })

        // TODO: Send OTP via Twilio/MSG91
        console.log(`OTP for ${phone}: ${otp}`)

        res.json({ success: true, message: 'OTP sent successfully' })
    } catch (error) {
        res.status(400).json({ error: 'Invalid request' })
    }
})

// Verify OTP & Register
router.post('/verify-otp', async (req, res) => {
    try {
        const schema = z.object({
            phone: z.string().length(10),
            otp: z.string().length(6),
            registrationData: z.object({
                fullName: z.string(),
                dateOfBirth: z.object({
                    day: z.string(),
                    month: z.string(),
                    year: z.string(),
                }),
                gender: z.string(),
                address: z.object({
                    houseNo: z.string().optional(),
                    street: z.string().optional(),
                    city: z.string(),
                    state: z.string(),
                    pinCode: z.string(),
                }),
                email: z.string().email().optional(),
                status: z.string(),
                cancerType: z.string().optional(),
                stage: z.string().optional(),
                annualIncome: z.string(),
                hasPMJAY: z.string(),
                pmjayCardNumber: z.string().optional(),
                hasInsurance: z.string(),
                insuranceProvider: z.string().optional(),
                emergencyContact: z.object({
                    name: z.string(),
                    relationship: z.string(),
                    phone: z.string(),
                }),
                consents: z.object({
                    dataCollection: z.boolean(),
                    dataSharing: z.boolean(),
                    caseManager: z.boolean(),
                    communication: z.boolean(),
                }),
            }),
        })

        const { phone, otp, registrationData } = schema.parse(req.body)

        // Verify OTP
        const storedOTP = otpStore.get(phone)
        if (!storedOTP || storedOTP.otp !== otp || storedOTP.expiresAt < Date.now()) {
            return res.status(400).json({ error: 'Invalid or expired OTP' })
        }

        // Clear OTP
        otpStore.delete(phone)

        // Generate Case ID
        const caseId = `ICARE-PT-${Math.floor(100000 + Math.random() * 900000)}`

        // Create user and profile
        const dob = new Date(
            parseInt(registrationData.dateOfBirth.year),
            parseInt(registrationData.dateOfBirth.month) - 1,
            parseInt(registrationData.dateOfBirth.day)
        )

        const user = await prisma.user.create({
            data: {
                caseId,
                phone,
                email: registrationData.email,
                fullName: registrationData.fullName,
                dateOfBirth: dob,
                gender: registrationData.gender,
                address: registrationData.address,
                role: 'patient',
                profile: {
                    create: {
                        status: registrationData.status,
                        cancerType: registrationData.cancerType,
                        stage: registrationData.stage,
                        annualIncome: registrationData.annualIncome,
                        hasPMJAY: registrationData.hasPMJAY === 'yes',
                        pmjayCardNumber: registrationData.pmjayCardNumber,
                        hasInsurance: registrationData.hasInsurance === 'yes',
                        insuranceProvider: registrationData.insuranceProvider,
                        emergencyContact: registrationData.emergencyContact,
                        consents: registrationData.consents,
                    },
                },
            },
            include: {
                profile: true,
            },
        })

        // Generate JWT
        const token = jwt.sign(
            { userId: user.id, caseId: user.caseId },
            process.env.JWT_SECRET!,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        )

        res.json({
            success: true,
            token,
            user: {
                id: user.id,
                caseId: user.caseId,
                fullName: user.fullName,
                phone: user.phone,
                email: user.email,
            },
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: 'Registration failed' })
    }
})

// Login
router.post('/login', async (req, res) => {
    try {
        const schema = z.object({
            phone: z.string().length(10),
            otp: z.string().length(6),
        })

        const { phone, otp } = schema.parse(req.body)

        // Verify OTP
        const storedOTP = otpStore.get(phone)
        if (!storedOTP || storedOTP.otp !== otp || storedOTP.expiresAt < Date.now()) {
            return res.status(400).json({ error: 'Invalid or expired OTP' })
        }

        otpStore.delete(phone)

        // Find user
        const user = await prisma.user.findUnique({
            where: { phone },
            include: { profile: true },
        })

        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        // Generate JWT
        const token = jwt.sign(
            { userId: user.id, caseId: user.caseId },
            process.env.JWT_SECRET!,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        )

        res.json({
            success: true,
            token,
            user: {
                id: user.id,
                caseId: user.caseId,
                fullName: user.fullName,
                phone: user.phone,
                email: user.email,
            },
        })
    } catch (error) {
        res.status(400).json({ error: 'Login failed' })
    }
})

export default router
