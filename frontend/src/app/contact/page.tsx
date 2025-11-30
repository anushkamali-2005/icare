'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Submit form
        alert('Thank you! We will get back to you soon.')
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl opacity-90">
                        We're here to help. Reach out to us anytime.
                    </p>
                </div>
            </div>

            <div className="container-custom py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="card">
                            <Phone className="w-12 h-12 text-primary-600 mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Hotline</h3>
                            <a href="tel:1800-XXX-XXXX" className="text-lg text-primary-600 hover:underline font-semibold">
                                1800-XXX-XXXX
                            </a>
                            <p className="text-sm text-gray-600 mt-2">Toll-free support available 24/7</p>
                        </div>

                        <div className="card">
                            <Mail className="w-12 h-12 text-primary-600 mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                            <a href="mailto:support@icare.in" className="text-lg text-primary-600 hover:underline font-semibold">
                                support@icare.in
                            </a>
                            <p className="text-sm text-gray-600 mt-2">We'll respond within 24 hours</p>
                        </div>

                        <div className="card">
                            <MapPin className="w-12 h-12 text-primary-600 mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                            <p className="text-gray-700">
                                ICARE Headquarters<br />
                                New Delhi, India
                            </p>
                        </div>

                        <div className="card bg-gradient-to-br from-primary-50 to-secondary-50">
                            <MessageCircle className="w-12 h-12 text-primary-600 mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
                            <p className="text-gray-700 mb-4">Chat with our support team</p>
                            <button className="btn-primary w-full">Start Chat</button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="card">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="support">Patient Support</option>
                                            <option value="financial">Financial Assistance</option>
                                            <option value="partnership">Partnership Opportunity</option>
                                            <option value="feedback">Feedback</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none resize-none"
                                    />
                                </div>

                                <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
