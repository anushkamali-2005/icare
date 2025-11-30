'use client'

import { Heart, Users, Target, Award, TrendingUp, Shield } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-20">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold mb-6">About ICARE</h1>
                        <p className="text-2xl opacity-90 leading-relaxed">
                            India's first integrated cancer care ecosystem, empowering patients with comprehensive support from prevention to survivorship.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-custom py-16">
                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="card bg-gradient-to-br from-primary-50 to-primary-100">
                        <Target className="w-12 h-12 text-primary-600 mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                        <p className="text-gray-700 leading-relaxed">
                            To democratize access to quality cancer care in India by providing an integrated platform that connects patients with the right medical expertise, financial assistance, and emotional support at every stage of their journey.
                        </p>
                    </div>

                    <div className="card bg-gradient-to-br from-secondary-50 to-secondary-100">
                        <Award className="w-12 h-12 text-secondary-600 mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                        <p className="text-gray-700 leading-relaxed">
                            A future where no cancer patient in India faces financial barriers to treatment, where every patient has access to dedicated case management, and where the cancer care journey is transparent, dignified, and hopeful.
                        </p>
                    </div>
                </div>

                {/* Impact Stats */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: Users, value: '15.6 Lakh+', label: 'Patients Supported' },
                            { icon: TrendingUp, value: '₹2,400 Cr+', label: 'Funding Secured' },
                            { icon: Heart, value: '50+', label: 'NGO Partners' },
                            { icon: Shield, value: '200+', label: 'Hospitals Empanelled' },
                        ].map((stat, index) => {
                            const Icon = stat.icon
                            return (
                                <div key={index} className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>
                                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Our Story */}
                <div className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                        <p>
                            ICARE was born from a simple observation: cancer patients in India face not just a medical battle, but a financial and emotional one too. Despite having world-class hospitals and dedicated healthcare professionals, the fragmented nature of cancer care support meant that patients often struggled to navigate the complex landscape of treatment options, financial assistance, and support services.
                        </p>
                        <p>
                            Founded in 2020, ICARE set out to change this. We built India's first truly integrated cancer care platform that brings together:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Access to 200+ empanelled hospitals across India</li>
                            <li>Integrated financial assistance from 6 different sources</li>
                            <li>Dedicated case managers for personalized support</li>
                            <li>Comprehensive support services from prevention to survivorship</li>
                        </ul>
                        <p>
                            Today, we're proud to have supported over 15.6 lakh patients, secured ₹2,400+ crores in funding, and built a network of 50+ NGO partners and 200+ hospitals. But our work is far from done.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="bg-gray-50 rounded-2xl p-12">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Patient First',
                                description: 'Every decision we make is guided by what\'s best for our patients.',
                            },
                            {
                                title: 'Transparency',
                                description: 'We believe in complete transparency in all financial transactions and processes.',
                            },
                            {
                                title: 'Empathy',
                                description: 'We understand the emotional toll of cancer and approach every interaction with compassion.',
                            },
                            {
                                title: 'Innovation',
                                description: 'We leverage technology to make cancer care more accessible and efficient.',
                            },
                            {
                                title: 'Collaboration',
                                description: 'We work closely with hospitals, NGOs, and partners to maximize patient outcomes.',
                            },
                            {
                                title: 'Integrity',
                                description: 'We maintain the highest standards of ethics and data privacy.',
                            },
                        ].map((value, index) => (
                            <div key={index} className="text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
