import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth'
import patientRoutes from './routes/patient'
import financialRoutes from './routes/financial'
import documentRoutes from './routes/document'
import appointmentRoutes from './routes/appointment'
import hospitalRoutes from './routes/hospital'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/patient', patientRoutes)
app.use('/api/financial', financialRoutes)
app.use('/api/documents', documentRoutes)
app.use('/api/appointments', appointmentRoutes)
app.use('/api/hospitals', hospitalRoutes)

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'ICARE API is running' })
})

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack)
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
        },
    })
})

app.listen(PORT, () => {
    console.log(`🚀 ICARE API server running on port ${PORT}`)
})

export default app
