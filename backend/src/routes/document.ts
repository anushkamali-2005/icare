import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { authMiddleware } from '../middleware/auth'
import multer from 'multer'

const router = Router()
const prisma = new PrismaClient()
const upload = multer({ dest: 'uploads/' })

// Upload document
router.post('/upload', authMiddleware, upload.single('file'), async (req, res) => {
    try {
        const userId = (req as any).userId
        const file = req.file

        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' })
        }

        // TODO: Upload to S3/Cloudinary
        const fileUrl = `/uploads/${file.filename}`

        const document = await prisma.document.create({
            data: {
                userId,
                name: req.body.name || file.originalname,
                type: req.body.type || 'other',
                category: req.body.category || 'general',
                fileUrl,
                fileSize: file.size,
                mimeType: file.mimetype,
            },
        })

        // Create activity
        await prisma.activity.create({
            data: {
                userId,
                type: 'document',
                title: 'Document Uploaded',
                description: `You uploaded ${document.name}`,
            },
        })

        res.json(document)
    } catch (error) {
        res.status(500).json({ error: 'Failed to upload document' })
    }
})

// Get all documents
router.get('/', authMiddleware, async (req, res) => {
    try {
        const userId = (req as any).userId

        const documents = await prisma.document.findMany({
            where: { userId },
            orderBy: { uploadedAt: 'desc' },
        })

        res.json(documents)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch documents' })
    }
})

// Delete document
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const userId = (req as any).userId
        const { id } = req.params

        const document = await prisma.document.findFirst({
            where: { id, userId },
        })

        if (!document) {
            return res.status(404).json({ error: 'Document not found' })
        }

        await prisma.document.delete({ where: { id } })

        res.json({ success: true })
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete document' })
    }
})

export default router
