'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { authAPI } from '@/lib/api'

// Pages that don't require authentication (public pages)
const PUBLIC_ROUTES = [
    '/',
    '/login',
    '/register',
    '/about',
    '/contact',
    '/hospital-finder',
    '/screening-locator',
]

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        const isPublicRoute = PUBLIC_ROUTES.includes(pathname)
        const isAuthenticated = authAPI.isAuthenticated()

        if (!isPublicRoute && !isAuthenticated) {
            router.push('/login')
        }
    }, [pathname, router])

    const isPublicRoute = PUBLIC_ROUTES.includes(pathname)
    const isAuthenticated = authAPI.isAuthenticated()

    if (!isPublicRoute && !isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Redirecting to login...</p>
                </div>
            </div>
        )
    }

    return <>{children}</>
}
