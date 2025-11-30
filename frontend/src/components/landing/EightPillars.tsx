'use client'

import {
    Shield,
    Search,
    Stethoscope,
    Pill,
    DollarSign,
    MessageCircle,
    Activity,
    Heart
} from 'lucide-react'

const pillars = [
    {
        icon: Shield,
        title: 'Prevention',
        description: 'Early detection and risk assessment',
        color: 'from-green-500 to-green-600',
    },
    {
        icon: Search,
        title: 'Screening',
        description: 'Free and subsidized screening camps',
        color: 'from-blue-500 to-blue-600',
    },
    {
        icon: Stethoscope,
        title: 'Diagnosis',
        description: 'Access to best diagnostic facilities',
        color: 'from-purple-500 to-purple-600',
    },
    {
        icon: Pill,
        title: 'Treatment',
        description: 'Comprehensive treatment support',
        color: 'from-pink-500 to-pink-600',
    },
    {
        icon: DollarSign,
        title: 'Financial Aid',
        description: '6 funding sources integrated',
        color: 'from-yellow-500 to-yellow-600',
    },
    {
        icon: MessageCircle,
        title: 'Counselling',
        description: 'Mental health and nutrition support',
        color: 'from-indigo-500 to-indigo-600',
    },
    {
        icon: Activity,
        title: 'Rehabilitation',
        description: 'Post-treatment recovery programs',
        color: 'from-teal-500 to-teal-600',
    },
    {
        icon: Heart,
        title: 'Survivorship',
        description: 'Long-term care and follow-up',
        color: 'from-red-500 to-red-600',
    },
]

export default function EightPillars() {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                            Our 8 Pillars of Support
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Complete Cancer Care Journey
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        From prevention to survivorship, we support you at every step with dedicated case management
                        and integrated financial assistance
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer"
                            >
                                {/* Number Badge */}
                                <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-400 group-hover:bg-primary-100 group-hover:text-primary-600 transition-colors">
                                    {index + 1}
                                </div>

                                {/* Icon */}
                                <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                    {pillar.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {pillar.description}
                                </p>

                                {/* Hover Arrow */}
                                <div className="mt-4 flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-sm font-semibold">Learn more</span>
                                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Bottom Highlight */}
                <div className="mt-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-3">
                        🎯 Our Unique Advantage: Integrated Financial Assistance
                    </h3>
                    <p className="text-lg opacity-90 max-w-3xl mx-auto">
                        Unlike other platforms, ICARE connects you to <strong>6 funding sources</strong> simultaneously -
                        PM-JAY, NGO Grants, Medical Loans, CSR Adoption, Crowdfunding, and Insurance -
                        ensuring you get maximum financial coverage with minimum out-of-pocket expenses.
                    </p>
                </div>
            </div>
        </section>
    )
}
