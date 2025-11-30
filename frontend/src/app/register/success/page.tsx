import Link from 'next/link'
import { CheckCircle2, Phone, Mail, Calendar, FileText } from 'lucide-react'

export default function RegistrationSuccessPage() {
    // In real app, get this from API/state
    const caseId = 'ICARE-PT-123456'
    const patientName = 'Rajesh Kumar'
    const caseManager = {
        name: 'Meera Patel',
        photo: null,
        phone: '+91 98765 43210',
        email: 'meera.patel@icare.in',
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
            <div className="container-custom">
                <div className="max-w-2xl mx-auto">
                    {/* Success Icon */}
                    <div className="text-center mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <CheckCircle2 className="w-14 h-14 text-white" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-3">
                            Welcome to ICARE, {patientName}!
                        </h1>
                        <p className="text-lg text-gray-600">Your registration is complete.</p>
                    </div>

                    {/* Case ID Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
                        <div className="text-center mb-6">
                            <p className="text-sm text-gray-600 mb-2">Your Case ID</p>
                            <div className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg">
                                <span className="text-2xl font-bold tracking-wide">{caseId}</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Save this ID for future reference</p>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                            <div className="flex items-center space-x-2 text-green-600 mb-4">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="font-semibold">Case Manager Assigned</span>
                            </div>

                            {/* Case Manager Card */}
                            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-bold text-2xl">
                                            {caseManager.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{caseManager.name}</h3>
                                        <p className="text-sm text-gray-600 mb-4">Your Dedicated Case Manager</p>

                                        <div className="space-y-2">
                                            <a href={`tel:${caseManager.phone}`} className="flex items-center space-x-2 text-sm text-gray-700 hover:text-primary-600 transition-colors">
                                                <Phone className="w-4 h-4" />
                                                <span>{caseManager.phone}</span>
                                            </a>
                                            <a href={`mailto:${caseManager.email}`} className="flex items-center space-x-2 text-sm text-gray-700 hover:text-primary-600 transition-colors">
                                                <Mail className="w-4 h-4" />
                                                <span>{caseManager.email}</span>
                                            </a>
                                        </div>

                                        <div className="mt-4 flex space-x-3">
                                            <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                                                Send Message
                                            </button>
                                            <button className="flex-1 bg-white hover:bg-gray-50 text-primary-600 px-4 py-2 rounded-lg text-sm font-semibold border-2 border-primary-600 transition-colors">
                                                Schedule Call
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 mt-4 text-center">
                                Your Case Manager will contact you within <strong>24 hours</strong> to discuss your next steps.
                            </p>
                        </div>
                    </div>

                    {/* Next Steps */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Next Steps</h2>
                        <div className="space-y-4">
                            <label className="flex items-start space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-primary-300 transition-colors cursor-pointer">
                                <input type="checkbox" className="mt-1 w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500" />
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <FileText className="w-5 h-5 text-primary-600" />
                                        <span className="font-semibold text-gray-900">Upload your medical reports</span>
                                    </div>
                                    <p className="text-sm text-gray-600">Diagnosis reports, hospital estimates, prescriptions</p>
                                </div>
                            </label>

                            <label className="flex items-start space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-primary-300 transition-colors cursor-pointer">
                                <input type="checkbox" className="mt-1 w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500" />
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="font-semibold text-gray-900">Complete financial assistance application</span>
                                    </div>
                                    <p className="text-sm text-gray-600">Get funding from PM-JAY, NGOs, loans, and more</p>
                                </div>
                            </label>

                            <label className="flex items-start space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-primary-300 transition-colors cursor-pointer">
                                <input type="checkbox" className="mt-1 w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500" />
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <Calendar className="w-5 h-5 text-primary-600" />
                                        <span className="font-semibold text-gray-900">Book a counselling session</span>
                                    </div>
                                    <p className="text-sm text-gray-600">Psycho-oncology, nutrition, and rehabilitation support</p>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <Link href="/dashboard" className="block">
                        <button className="w-full btn-primary text-lg py-4">
                            Go to Dashboard
                        </button>
                    </Link>

                    <div className="text-center mt-6">
                        <button className="text-primary-600 hover:underline font-medium">
                            Download Registration Summary (PDF)
                        </button>
                    </div>

                    {/* Help Section */}
                    <div className="mt-8 text-center text-sm text-gray-600">
                        <p>Need immediate help?</p>
                        <p className="mt-1">
                            Call our 24/7 hotline: <a href="tel:1800-XXX-XXXX" className="text-primary-600 font-semibold">1800-XXX-XXXX</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
