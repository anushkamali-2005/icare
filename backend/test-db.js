// Quick Database Connection Test
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testConnection() {
    try {
        console.log('🔍 Testing database connection...')

        // Try to connect
        await prisma.$connect()
        console.log('✅ Database connected successfully!')

        // Try a simple query
        const userCount = await prisma.user.count()
        console.log(`📊 Current users in database: ${userCount}`)

        await prisma.$disconnect()
        console.log('✅ Database test complete!')

    } catch (error) {
        console.error('❌ Database connection failed!')
        console.error('Error:', error.message)

        if (error.message.includes('DATABASE_URL')) {
            console.log('\n💡 Solution: Create a .env file in the backend folder with:')
            console.log('DATABASE_URL="your-supabase-connection-string"')
        }

        process.exit(1)
    }
}

testConnection()
