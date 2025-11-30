'use client'

import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const steps = [
    {
        number: '01',
        title: 'Register & Get Verified',
        description: 'Quick OTP-based registration. Get assigned a dedicated Case Manager within 24 hours.',
        features: ['Phone verification', 'ABHA ID integration', 'Case Manager assigned'],
    },
    {
        number: '02',
        title: 'Upload Medical Records',
        description: 'Securely upload diagnosis reports, hospital estimates, and treatment plans.',
        features: ['Secure document vault', 'OCR for cost extraction', 'Instant verification'],
    },
    {
        number: '03',
        title: 'Get Funding Plan',
        description: 'AI-powered eligibility check across 6 funding sources. Get personalized funding mix.',
        features: ['PM-JAY verification', 'NGO matching', 'Loan calculator'],
    },
    {
        number: '04',
        title: 'Start Treatment',
        description: 'Funds disbursed directly to hospital. Track everything in real-time with full transparency.',
        features: ['Cashless treatment', 'Real-time tracking', 'Transparency ledger'],
    },
]

export default function HowItWorks() {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        How ICARE Works
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Simple 4-step process to get comprehensive cancer care support
                    </p>
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                {/* Step Card */}
                                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-primary-500 hover:shadow-xl transition-all duration-300 h-full">
                                    {/* Number Badge */}
                                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                        <span className="text-2xl font-bold text-white">{step.number}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-2">
                                        {step.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                                                <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Arrow (Desktop only) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-24 -right-4 z-20">
                                        <ArrowRight className="w-8 h-8 text-primary-500" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Ready to Start Your Journey?
                        </h3>
                        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                            Join thousands of patients who have successfully navigated their cancer care with ICARE's support
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/register" className="btn-primary inline-flex items-center justify-center space-x-2">
                                <span>Register Now - It's Free</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/symptom-checker" className="btn-secondary inline-flex items-center justify-center">
                                <span>Check Your Symptoms First</span>
                            </Link>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            ✓ No hidden charges  ✓ Data secure  ✓ 24/7 support
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
