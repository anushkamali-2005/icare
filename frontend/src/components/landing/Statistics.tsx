'use client'

import { Users, TrendingUp, Heart, Building2 } from 'lucide-react'

const stats = [
    {
        icon: Users,
        value: '15.6 Lakh+',
        label: 'Cancer Cases Supported',
        description: 'Patients helped across India',
        color: 'from-primary-500 to-primary-600',
    },
    {
        icon: TrendingUp,
        value: '₹2,400 Cr+',
        label: 'Funding Secured',
        description: 'Total financial assistance provided',
        color: 'from-secondary-500 to-secondary-600',
    },
    {
        icon: Heart,
        value: '50+ NGOs',
        label: 'Partner Organizations',
        description: 'Trusted NGO partners',
        color: 'from-pink-500 to-pink-600',
    },
    {
        icon: Building2,
        value: '200+ Hospitals',
        label: 'Empanelled Hospitals',
        description: 'Across India',
        color: 'from-purple-500 to-purple-600',
    },
]

export default function Statistics() {
    return (
        <section className="py-16 bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Making a Real Difference
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Join thousands of patients who have successfully navigated their cancer journey with ICARE
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Value */}
                                    <div className="text-3xl font-bold text-gray-900 mb-2">
                                        {stat.value}
                                    </div>

                                    {/* Label */}
                                    <div className="text-lg font-semibold text-gray-700 mb-1">
                                        {stat.label}
                                    </div>

                                    {/* Description */}
                                    <div className="text-sm text-gray-500">
                                        {stat.description}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">
                        Be part of India's largest cancer care community
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white"></div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 border-2 border-white"></div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                        </div>
                        <span>Join 15.6L+ patients who trust ICARE</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
