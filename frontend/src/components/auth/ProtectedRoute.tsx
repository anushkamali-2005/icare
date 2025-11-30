'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { authAPI } from '@/lib/api'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    useEffect(() => {
        if (!authAPI.isAuthenticated()) {
            router.push('/login')
        }
    }, [router])

    if (!authAPI.isAuthenticated()) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Checking authentication...</p>
                </div>
            </div>
        )
    }

    return <>{children}</>
}
