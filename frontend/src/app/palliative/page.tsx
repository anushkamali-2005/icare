'use client'

import { Heart, Users, Phone, Calendar, Home } from 'lucide-react'

export default function PalliativePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white py-16">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Palliative & Survivorship Care</h1>
                    <p className="text-xl opacity-90">Long-term care and follow-up support</p>
                </div>
            </div>

            <div className="container-custom py-12">
                {/* Services Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="card bg-gradient-to-br from-red-50 to-red-100">
                        <Heart className="w-12 h-12 text-red-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Palliative Care</h3>
                        <p className="text-gray-700 mb-4">
                            Specialized medical care focused on providing relief from symptoms and stress of serious illness
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center space-x-2">
                                <span className="text-red-600">•</span>
                                <span>Pain and symptom management</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-red-600">•</span>
                                <span>Emotional and spiritual support</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-red-600">•</span>
                                <span>24/7 care coordination</span>
                            </li>
                        </ul>
                    </div>

                    <div className="card bg-gradient-to-br from-green-50 to-green-100">
                        <Users className="w-12 h-12 text-green-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Survivorship Care</h3>
                        <p className="text-gray-700 mb-4">
                            Comprehensive follow-up care for cancer survivors to maintain health and quality of life
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center space-x-2">
                                <span className="text-green-600">•</span>
                                <span>Regular health monitoring</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-green-600">•</span>
                                <span>Late effects management</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-green-600">•</span>
                                <span>Lifestyle and wellness guidance</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Care Services */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                    <div className="card text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Home className="w-8 h-8 text-blue-600" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Home Care Services</h4>
                        <p className="text-sm text-gray-600">Professional care in the comfort of your home</p>
                    </div>

                    <div className="card text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="w-8 h-8 text-purple-600" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">24/7 Helpline</h4>
                        <p className="text-sm text-gray-600">Round-the-clock support and guidance</p>
                    </div>

                    <div className="card text-center">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Calendar className="w-8 h-8 text-orange-600" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Follow-up Scheduling</h4>
                        <p className="text-sm text-gray-600">Regular check-ups and monitoring</p>
                    </div>
                </div>

                {/* Survivorship Plan */}
                <div className="card">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Survivorship Care Plan</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Regular Monitoring</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-green-600 text-sm">✓</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-700">Physical examinations every 3-6 months</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-green-600 text-sm">✓</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-700">Blood tests and imaging as recommended</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-green-600 text-sm">✓</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-700">Screening for recurrence or new cancers</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Wellness Support</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-blue-600 text-sm">✓</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-700">Nutrition and exercise counselling</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-blue-600 text-sm">✓</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-700">Mental health and emotional support</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-blue-600 text-sm">✓</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-700">Survivor community and peer support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex space-x-4">
                        <button className="btn-primary flex-1">Schedule Follow-up</button>
                        <button className="btn-secondary flex-1">Contact Support Team</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
