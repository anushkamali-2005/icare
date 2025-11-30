'use client'

import { Heart, Download, FileText, CheckCircle, Calendar, Activity } from 'lucide-react'

export default function SurvivorshipPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
                <div className="container-custom">
                    <div className="flex items-center space-x-4">
                        <Heart className="w-16 h-16" />
                        <div>
                            <h1 className="text-4xl font-bold mb-2">Survivorship Care Plan</h1>
                            <p className="text-xl opacity-90">Your guide to life after cancer treatment</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Treatment Summary */}
                    <section className="card mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Treatment Summary</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <div className="text-sm text-gray-600 mb-1">Cancer Type</div>
                                    <div className="font-semibold text-gray-900">Breast Cancer</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600 mb-1">Stage at Diagnosis</div>
                                    <div className="font-semibold text-gray-900">Stage 2A</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600 mb-1">Diagnosis Date</div>
                                    <div className="font-semibold text-gray-900">January 15, 2024</div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="text-sm text-gray-600 mb-1">Treatments Received</div>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span className="text-sm text-gray-900">Surgery (Lumpectomy)</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span className="text-sm text-gray-900">Chemotherapy (6 cycles)</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span className="text-sm text-gray-900">Radiation (25 sessions)</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600 mb-1">Treatment Completion</div>
                                    <div className="font-semibold text-gray-900">November 30, 2024</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Follow-up Schedule */}
                    <section className="card mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                            <Calendar className="w-8 h-8 text-purple-600" />
                            <span>Follow-up Schedule</span>
                        </h2>

                        <div className="space-y-4">
                            <div className="p-4 bg-purple-50 border-l-4 border-purple-600 rounded">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold text-gray-900">Year 1-2 After Treatment</h3>
                                    <span className="px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
                                        Current Phase
                                    </span>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start space-x-2">
                                        <span className="text-purple-600">•</span>
                                        <span>Doctor visit every 3-4 months</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-purple-600">•</span>
                                        <span>Mammogram every 6-12 months</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-purple-600">•</span>
                                        <span>Blood tests as recommended by doctor</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-4 bg-gray-50 border-l-4 border-gray-300 rounded">
                                <h3 className="font-semibold text-gray-900 mb-2">Year 3-5 After Treatment</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start space-x-2">
                                        <span className="text-gray-600">•</span>
                                        <span>Doctor visit every 6 months</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-gray-600">•</span>
                                        <span>Mammogram annually</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-4 bg-gray-50 border-l-4 border-gray-300 rounded">
                                <h3 className="font-semibold text-gray-900 mb-2">After 5 Years</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start space-x-2">
                                        <span className="text-gray-600">•</span>
                                        <span>Doctor visit annually</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-gray-600">•</span>
                                        <span>Mammogram annually</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Signs of Recurrence */}
                    <section className="card mb-8 bg-red-50 border-2 border-red-200">
                        <h2 className="text-2xl font-bold text-red-900 mb-6 flex items-center space-x-3">
                            <Activity className="w-8 h-8" />
                            <span>Warning Signs to Watch For</span>
                        </h2>

                        <p className="text-red-800 mb-4">
                            Contact your doctor immediately if you experience any of these symptoms:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2">
                                <li className="flex items-start space-x-2 text-sm text-red-900">
                                    <span className="text-red-600 font-bold">•</span>
                                    <span>New lump in breast or underarm</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm text-red-900">
                                    <span className="text-red-600 font-bold">•</span>
                                    <span>Persistent bone pain</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm text-red-900">
                                    <span className="text-red-600 font-bold">•</span>
                                    <span>Shortness of breath or persistent cough</span>
                                </li>
                            </ul>
                            <ul className="space-y-2">
                                <li className="flex items-start space-x-2 text-sm text-red-900">
                                    <span className="text-red-600 font-bold">•</span>
                                    <span>Unexplained weight loss</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm text-red-900">
                                    <span className="text-red-600 font-bold">•</span>
                                    <span>Severe headaches or vision changes</span>
                                </li>
                                <li className="flex items-start space-x-2 text-sm text-red-900">
                                    <span className="text-red-600 font-bold">•</span>
                                    <span>Persistent abdominal pain</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Healthy Lifestyle Tips */}
                    <section className="card mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Healthy Lifestyle Tips</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">🥗</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Healthy Diet</h3>
                                        <p className="text-sm text-gray-600">Eat plenty of fruits, vegetables, whole grains. Limit processed foods and red meat.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">🏃</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Regular Exercise</h3>
                                        <p className="text-sm text-gray-600">Aim for 150 minutes of moderate exercise per week. Walking, swimming, yoga are great options.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">😴</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Quality Sleep</h3>
                                        <p className="text-sm text-gray-600">Get 7-8 hours of sleep per night. Maintain a regular sleep schedule.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">🚭</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Avoid Tobacco & Alcohol</h3>
                                        <p className="text-sm text-gray-600">Quit smoking completely. Limit alcohol consumption.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">🧘</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Stress Management</h3>
                                        <p className="text-sm text-gray-600">Practice meditation, deep breathing, or yoga. Join support groups.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">💊</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Take Medications</h3>
                                        <p className="text-sm text-gray-600">If prescribed hormone therapy or other medications, take them as directed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Download */}
                    <div className="flex space-x-4">
                        <button className="btn-primary flex-1 flex items-center justify-center space-x-2">
                            <Download className="w-5 h-5" />
                            <span>Download Survivorship Care Plan (PDF)</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
