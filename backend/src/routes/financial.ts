import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { authMiddleware } from '../middleware/auth'
import { z } from 'zod'

const router = Router()
const prisma = new PrismaClient()

// Submit cost estimate
router.post('/cost-estimate', authMiddleware, async (req, res) => {
    try {
        const userId = (req as any).userId
        const schema = z.object({
            hospitalName: z.string(),
            estimateAmount: z.number(),
            itemizedBreakdown: z.any(),
            validUntil: z.string(),
        })

        const data = schema.parse(req.body)

        const estimate = await prisma.treatmentCost.create({
            data: {
                userId,
                ...data,
                validUntil: new Date(data.validUntil),
            },
        })

        // Create activity
        await prisma.activity.create({
            data: {
                userId,
                type: 'financial',
                title: 'Cost Estimate Received',
                description: `Hospital submitted treatment cost estimate of ₹${data.estimateAmount}`,
            },
        })

        res.json(estimate)
    } catch (error) {
        res.status(400).json({ error: 'Failed to submit cost estimate' })
    }
})

// Check eligibility across all funding sources
router.post('/check-eligibility', authMiddleware, async (req, res) => {
    try {
        const userId = (req as any).userId

        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: { profile: true },
        })

        if (!user || !user.profile) {
            return res.status(404).json({ error: 'User profile not found' })
        }

        const eligibility = {
            pmjay: {
                eligible: user.profile.hasPMJAY,
                maxAmount: 500000,
                probability: user.profile.hasPMJAY ? 0.95 : 0,
            },
            ngo: {
                eligible: true,
                maxAmount: 300000,
                probability: user.profile.annualIncome === 'below-2l' ? 0.85 : 0.6,
            },
            nbfc: {
                eligible: true,
                maxAmount: 500000,
                probability: 0.75,
            },
            csr: {
                eligible: true,
                maxAmount: 300000,
                probability: 0.5,
            },
            crowdfunding: {
                eligible: true,
                maxAmount: 200000,
                probability: 0.7,
            },
            insurance: {
                eligible: user.profile.hasInsurance,
                maxAmount: user.profile.hasInsurance ? 300000 : 0,
                probability: user.profile.hasInsurance ? 0.8 : 0,
            },
        }

        res.json(eligibility)
    } catch (error) {
        res.status(500).json({ error: 'Failed to check eligibility' })
    }
})

// Apply for funding
router.post('/apply', authMiddleware, async (req, res) => {
    try {
        const userId = (req as any).userId
        const schema = z.object({
            source: z.enum(['pmjay', 'ngo', 'nbfc', 'csr', 'crowdfunding', 'insurance']),
            amount: z.number(),
            applicationData: z.any(),
        })

        const data = schema.parse(req.body)

        const application = await prisma.fundingApplication.create({
            data: {
                userId,
                ...data,
            },
        })

        // Create activity
        await prisma.activity.create({
            data: {
                userId,
                type: 'financial',
                title: `${data.source.toUpperCase()} Application Submitted`,
                description: `Applied for ₹${data.amount} funding`,
            },
        })

        res.json(application)
    } catch (error) {
        res.status(400).json({ error: 'Failed to submit application' })
    }
})

// Get all applications
router.get('/applications', authMiddleware, async (req, res) => {
    try {
        const userId = (req as any).userId

        const applications = await prisma.fundingApplication.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        })

        res.json(applications)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch applications' })
    }
})

// Get NGO partners
router.get('/ngo-partners', async (req, res) => {
    try {
        const partners = await prisma.nGOPartner.findMany({
            where: { status: 'active' },
        })

        res.json(partners)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch NGO partners' })
    }
})

export default router
