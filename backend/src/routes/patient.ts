import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { authMiddleware } from '../middleware/auth'

const router = Router()
const prisma = new PrismaClient()

// Get patient dashboard data
router.get('/dashboard', authMiddleware, async (req, res) => {
    try {
        const userId = (req as any).userId

        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                profile: {
                    include: {
                        caseManager: true,
                    },
                },
                documents: {
                    take: 3,
                    orderBy: { uploadedAt: 'desc' },
                },
                appointments: {
                    where: { status: 'upcoming' },
                    take: 3,
                    orderBy: { date: 'asc' },
                },
                applications: {
                    orderBy: { createdAt: 'desc' },
                },
                activities: {
                    take: 10,
                    orderBy: { createdAt: 'desc' },
                },
            },
        })

        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        // Calculate financial summary
        const fundingSecured = user.applications
            .filter(app => app.status === 'approved')
            .reduce((sum, app) => sum + (app.approvedAmount || 0), 0)

        const pendingApplications = user.applications
            .filter(app => app.status === 'pending')
            .reduce((sum, app) => sum + app.amount, 0)

        res.json({
            user: {
                id: user.id,
                caseId: user.caseId,
                fullName: user.fullName,
                phone: user.phone,
                email: user.email,
            },
            profile: user.profile,
            caseManager: user.profile?.caseManager,
            documents: user.documents,
            appointments: user.appointments,
            financialSummary: {
                fundingSecured,
                pendingApplications,
                applications: user.applications,
            },
            activities: user.activities,
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to fetch dashboard data' })
    }
})

// Get patient profile
router.get('/profile', authMiddleware, async (req, res) => {
    try {
        const userId = (req as any).userId

        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                profile: {
                    include: {
                        caseManager: true,
                    },
                },
            },
        })

        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        res.json(user)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch profile' })
    }
})

// Update patient profile
router.put('/profile', authMiddleware, async (req, res) => {
    try {
        const userId = (req as any).userId
        const updates = req.body

        const user = await prisma.user.update({
            where: { id: userId },
            data: updates,
            include: {
                profile: true,
            },
        })

        res.json(user)
    } catch (error) {
        res.status(500).json({ error: 'Failed to update profile' })
    }
})

export default router
