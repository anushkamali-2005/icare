'use client'

import { useState } from 'react'
import { Shield, CheckCircle2, AlertCircle, ArrowRight, FileText, Upload } from 'lucide-react'

export default function PMJAYPage() {
    const [step, setStep] = useState(1)
    const [cardNumber, setCardNumber] = useState('')
    const [verified, setVerified] = useState(false)

    const handleVerify = () => {
        if (cardNumber.length === 14) {
            setVerified(true)
            setStep(2)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white py-16">
                <div className="container-custom">
                    <div className="flex items-center space-x-4 mb-4">
                        <Shield className="w-16 h-16" />
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold">PM-JAY (Ayushman Bharat)</h1>
                            <p className="text-xl opacity-90 mt-2">Government health insurance up to ₹5 lakh</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Key Benefits */}
                    <div className="card mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'Coverage up to ₹5,00,000 per family per year',
                                'Cashless treatment at empanelled hospitals',
                                'Pre and post-hospitalization coverage',
                                'No age limit or family size restriction',
                                'Covers 1,393 medical procedures',
                                'Portable across India',
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Eligibility */}
                    <div className="card mb-8 bg-blue-50 border-blue-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility</h2>
                        <div className="space-y-2 text-gray-700">
                            <p>✓ BPL (Below Poverty Line) families</p>
                            <p>✓ Families listed in SECC 2011 database</p>
                            <p>✓ Annual income less than ₹5 lakh</p>
                        </div>
                    </div>

                    {/* Application Process */}
                    <div className="card mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h2>

                        {step === 1 && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Step 1: Verify PM-JAY Card</h3>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        PM-JAY Card Number (14 digits)
                                    </label>
                                    <input
                                        type="text"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').slice(0, 14))}
                                        placeholder="Enter 14-digit card number"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                    />
                                </div>
                                <button
                                    onClick={handleVerify}
                                    disabled={cardNumber.length !== 14}
                                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Verify Card
                                </button>
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                                    <div className="flex items-center space-x-2 text-green-700">
                                        <CheckCircle2 className="w-5 h-5" />
                                        <span className="font-semibold">PM-JAY Card Verified Successfully!</span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Step 2: Upload Documents</h3>
                                <div className="space-y-4 mb-6">
                                    {[
                                        'Hospital cost estimate',
                                        'Doctor's prescription',
                    'Diagnostic reports',
                                        'PM-JAY card (both sides)',
                                    ].map((doc, index) => (
                                        <div key={index} className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-primary-400 transition-colors cursor-pointer">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <FileText className="w-6 h-6 text-gray-400" />
                                                    <span className="text-gray-700">{doc}</span>
                                                </div>
                                                <Upload className="w-5 h-5 text-primary-600" />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex space-x-4">
                                    <button onClick={() => setStep(1)} className="btn-secondary flex-1">
                                        Back
                                    </button>
                                    <button onClick={() => setStep(3)} className="btn-primary flex-1">
                                        Submit Application
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="text-center py-8">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h3>
                                <p className="text-gray-600 mb-6">
                                    Your PM-JAY application has been submitted. You will receive approval within 2-3 working days.
                                </p>
                                <button className="btn-primary">View Application Status</button>
                            </div>
                        )}
                    </div>

                    {/* Help */}
                    <div className="card bg-gradient-to-br from-primary-50 to-secondary-50">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
                        <p className="text-gray-700 mb-4">
                            Our case managers can help you with PM-JAY application and hospital coordination.
                        </p>
                        <button className="btn-secondary">Contact Case Manager</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
