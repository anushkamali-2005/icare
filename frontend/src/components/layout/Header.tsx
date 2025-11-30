'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, Globe } from 'lucide-react'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [language, setLanguage] = useState('EN')

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="container-custom py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">I</span>
                        </div>
                        <span className="text-2xl font-bold text-gray-900">ICARE</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                            About
                        </Link>
                        <Link href="/services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                            Services
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Language Selector */}
                        <button
                            onClick={() => setLanguage(language === 'EN' ? 'HI' : 'EN')}
                            className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
                        >
                            <Globe className="w-4 h-4" />
                            <span className="text-sm font-medium">{language}</span>
                        </button>

                        {/* Hotline */}
                        <a href="tel:1800-XXX-XXXX" className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors">
                            <Phone className="w-4 h-4" />
                            <span className="text-sm font-medium">1800-XXX-XXXX</span>
                        </a>

                        {/* Login Button */}
                        <Link href="/login" className="text-primary-600 hover:text-primary-700 font-semibold transition-colors">
                            Login
                        </Link>

                        {/* Register Button */}
                        <Link href="/register" className="btn-primary">
                            Register
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-gray-700 hover:text-primary-600"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-4">
                        <Link href="/" className="block text-gray-700 hover:text-primary-600 font-medium">
                            Home
                        </Link>
                        <Link href="/about" className="block text-gray-700 hover:text-primary-600 font-medium">
                            About
                        </Link>
                        <Link href="/services" className="block text-gray-700 hover:text-primary-600 font-medium">
                            Services
                        </Link>
                        <Link href="/contact" className="block text-gray-700 hover:text-primary-600 font-medium">
                            Contact
                        </Link>
                        <div className="pt-4 border-t border-gray-200 space-y-3">
                            <Link href="/login" className="block text-primary-600 font-semibold">
                                Login
                            </Link>
                            <Link href="/register" className="block btn-primary text-center">
                                Register
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
