'use client'

import Link from 'next/link'
import { ArrowRight, Activity, FileText } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 md:py-32 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        <div className="inline-block">
                            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                                🎗️ India's First Integrated Cancer Care Platform
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Comprehensive Cancer Care
                            <span className="block text-primary-600 mt-2">From Prevention to Survivorship</span>
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            Navigate your cancer journey with confidence. Get personalized support, financial assistance,
                            and access to India's best healthcare providers - all in one place.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/symptom-checker" className="btn-primary flex items-center justify-center space-x-2 group">
                                <Activity className="w-5 h-5" />
                                <span>Check Your Symptoms</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/register" className="btn-secondary flex items-center justify-center space-x-2">
                                <FileText className="w-5 h-5" />
                                <span>Register Now</span>
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center space-x-6 pt-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-gray-600">ABDM Compliant</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-gray-600">Data Secure</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-gray-600">24/7 Support</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Visual */}
                    <div className="relative">
                        <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                            {/* Quick Stats Card */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900">Our Impact</h3>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-4 rounded-xl">
                                        <div className="text-3xl font-bold text-primary-700">15.6L+</div>
                                        <div className="text-sm text-gray-600 mt-1">Cases Supported</div>
                                    </div>

                                    <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-4 rounded-xl">
                                        <div className="text-3xl font-bold text-secondary-700">₹2,400Cr</div>
                                        <div className="text-sm text-gray-600 mt-1">Funding Secured</div>
                                    </div>

                                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                                        <div className="text-3xl font-bold text-green-700">50+</div>
                                        <div className="text-sm text-gray-600 mt-1">NGO Partners</div>
                                    </div>

                                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                                        <div className="text-3xl font-bold text-purple-700">200+</div>
                                        <div className="text-sm text-gray-600 mt-1">Hospitals</div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 rounded-xl text-white">
                                    <div className="text-4xl font-bold">95%</div>
                                    <div className="text-sm mt-1 opacity-90">Average Funding Coverage</div>
                                    <div className="text-xs mt-2 opacity-75">Patients pay less than 20% out-of-pocket</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500 rounded-full opacity-20 animate-pulse-slow"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-500 rounded-full opacity-20 animate-pulse-slow"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
