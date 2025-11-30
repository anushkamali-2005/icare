import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { authMiddleware } from '../middleware/auth'
import { z } from 'zod'

const router = Router()
const prisma = new PrismaClient()

// Create appointment
router.post('/', authMiddleware, async (req, res) => {
    try {
        const userId = (req as any).userId
        const schema = z.object({
            title: z.string(),
            doctor: z.string(),
            hospital: z.string(),
            type: z.enum(['in-person', 'online']),
            date: z.string(),
            time: z.string(),
            notes: z.string().optional(),
        })

        const data = schema.parse(req.body)

        const appointment = await prisma.appointment.create({
            data: {
                userId,
                ...data,
                date: new Date(data.date),
            },
        })

        res.json(appointment)
    } catch (error) {
        res.status(400).json({ error: 'Failed to create appointment' })
    }
})

// Get all appointments
router.get('/', authMiddleware, async (req, res) => {
    try {
        const userId = (req as any).userId

        const appointments = await prisma.appointment.findMany({
            where: { userId },
            orderBy: { date: 'asc' },
        })

        res.json(appointments)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch appointments' })
    }
})

// Update appointment
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const userId = (req as any).userId
        const { id } = req.params

        const appointment = await prisma.appointment.findFirst({
            where: { id, userId },
        })

        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' })
        }

        const updated = await prisma.appointment.update({
            where: { id },
            data: req.body,
        })

        res.json(updated)
    } catch (error) {
        res.status(500).json({ error: 'Failed to update appointment' })
    }
})

// Cancel appointment
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const userId = (req as any).userId
        const { id } = req.params

        const appointment = await prisma.appointment.findFirst({
            where: { id, userId },
        })

        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' })
        }

        await prisma.appointment.update({
            where: { id },
            data: { status: 'cancelled' },
        })

        res.json({ success: true })
    } catch (error) {
        res.status(500).json({ error: 'Failed to cancel appointment' })
    }
})

export default router
