import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

// Search hospitals
router.get('/search', async (req, res) => {
    try {
        const { city, state, specialization, pmjayOnly } = req.query

        const where: any = {}

        if (city) where.city = { contains: city as string, mode: 'insensitive' }
        if (state) where.state = { contains: state as string, mode: 'insensitive' }
        if (pmjayOnly === 'true') where.pmjayEmpanelled = true
        if (specialization) {
            where.specializations = { has: specialization as string }
        }

        const hospitals = await prisma.hospital.findMany({
            where,
            take: 50,
        })

        res.json(hospitals)
    } catch (error) {
        res.status(500).json({ error: 'Failed to search hospitals' })
    }
})

// Get hospital by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params

        const hospital = await prisma.hospital.findUnique({
            where: { id },
        })

        if (!hospital) {
            return res.status(404).json({ error: 'Hospital not found' })
        }

        res.json(hospital)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch hospital' })
    }
})

export default router
