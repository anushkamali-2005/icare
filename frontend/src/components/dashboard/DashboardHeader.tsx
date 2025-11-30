'use client'

import Link from 'next/link'
import { Bell, User, LogOut, Menu, Globe } from 'lucide-react'
import { useState } from 'react'

export default function DashboardHeader() {
    const [showNotifications, setShowNotifications] = useState(false)
    const [showProfile, setShowProfile] = useState(false)

    const notifications = [
        { id: 1, text: 'Your case manager sent you a message', time: '5 min ago', unread: true },
        { id: 2, text: 'NGO grant application approved', time: '2 hours ago', unread: true },
        { id: 3, text: 'Upcoming appointment reminder', time: '1 day ago', unread: false },
    ]

    const unreadCount = notifications.filter(n => n.unread).length

    return (
        <header className="bg-white shadow-sm sticky top-0 z-40">
            <div className="container-custom py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/dashboard" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">I</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900">ICARE</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="/dashboard" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                            Dashboard
                        </Link>
                        <Link href="/financial-assistance" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                            Financial Aid
                        </Link>
                        <Link href="/documents" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                            Documents
                        </Link>
                        <Link href="/counselling" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                            Counselling
                        </Link>
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Language */}
                        <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors">
                            <Globe className="w-4 h-4" />
                            <span className="text-sm font-medium">EN</span>
                        </button>

                        {/* Notifications */}
                        <div className="relative">
                            <button
                                onClick={() => setShowNotifications(!showNotifications)}
                                className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
                            >
                                <Bell className="w-5 h-5" />
                                {unreadCount > 0 && (
                                    <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                        {unreadCount}
                                    </span>
                                )}
                            </button>

                            {showNotifications && (
                                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                                    <div className="px-4 py-2 border-b border-gray-200">
                                        <h3 className="font-semibold text-gray-900">Notifications</h3>
                                    </div>
                                    <div className="max-h-96 overflow-y-auto">
                                        {notifications.map(notif => (
                                            <div
                                                key={notif.id}
                                                className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${notif.unread ? 'bg-primary-50' : ''}`}
                                            >
                                                <p className="text-sm text-gray-900">{notif.text}</p>
                                                <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="px-4 py-2 border-t border-gray-200">
                                        <button className="text-sm text-primary-600 hover:underline font-medium">
                                            View all notifications
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Profile */}
                        <div className="relative">
                            <button
                                onClick={() => setShowProfile(!showProfile)}
                                className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-semibold text-sm">RK</span>
                                </div>
                                <span className="hidden md:block text-sm font-medium text-gray-900">Rajesh Kumar</span>
                            </button>

                            {showProfile && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                                    <div className="px-4 py-3 border-b border-gray-200">
                                        <p className="font-semibold text-gray-900">Rajesh Kumar</p>
                                        <p className="text-xs text-gray-500">ICARE-PT-123456</p>
                                    </div>
                                    <Link href="/profile" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 text-gray-700">
                                        <User className="w-4 h-4" />
                                        <span className="text-sm">My Profile</span>
                                    </Link>
                                    <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 text-red-600 w-full">
                                        <LogOut className="w-4 h-4" />
                                        <span className="text-sm">Logout</span>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu */}
                        <button className="md:hidden p-2 text-gray-700 hover:text-primary-600">
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
