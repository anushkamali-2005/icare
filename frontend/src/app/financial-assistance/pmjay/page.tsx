'use client'

import { useState } from 'react'
import { Shield, Hospital, FileText, CheckCircle, XCircle, Search, MapPin, Phone } from 'lucide-react'

export default function PMJAYPage() {
    const [rationCard, setRationCard] = useState('')
    const [checking, setChecking] = useState(false)
    const [result, setResult] = useState<any>(null)

    const checkEligibility = () => {
        setChecking(true)
        // Mock API call
        setTimeout(() => {
            setResult({
                eligible: rationCard.length > 0,
                amount: 500000,
                familyMembers: 5,
                cardNumber: rationCard
            })
            setChecking(false)
        }, 1500)
    }

    const hospitals = [
        {
            name: 'Tata Memorial Hospital',
            location: 'Parel, Mumbai',
            address: 'Dr. Ernest Borges Marg, Parel East, Mumbai - 400012',
            phone: '+91-22-2417-7000',
            specialties: ['All Cancer Types'],
            beds: 629
        },
        {
            name: 'All India Institute of Medical Sciences (AIIMS)',
            location: 'New Delhi',
            address: 'Ansari Nagar, New Delhi - 110029',
            phone: '+91-11-2658-8500',
            specialties: ['All Cancer Types'],
            beds: 2478
        },
        {
            name: 'Rajiv Gandhi Cancer Institute',
            location: 'Delhi',
            address: 'Sector 5, Rohini, Delhi - 110085',
            phone: '+91-11-4705-2222',
            specialties: ['All Cancer Types'],
            beds: 165
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12">
                <div className="container-custom">
                    <div className="flex items-center space-x-4 mb-4">
                        <Shield className="w-16 h-16" />
                        <div>
                            <h1 className="text-4xl font-bold mb-2">PM-JAY (Ayushman Bharat)</h1>
                            <p className="text-xl opacity-90">Free treatment up to ₹5 lakh per family per year</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12">
                {/* Eligibility Checker */}
                <section className="mb-12">
                    <div className="max-w-2xl mx-auto">
                        <div className="card">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Check Your Eligibility</h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Enter Ration Card Number
                                    </label>
                                    <input
                                        type="text"
                                        value={rationCard}
                                        onChange={(e) => setRationCard(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                        placeholder="e.g., 1234567890"
                                    />
                                    <p className="text-sm text-gray-500 mt-2">
                                        You can also check using SECC number or Aadhar number
                                    </p>
                                </div>

                                <button
                                    onClick={checkEligibility}
                                    disabled={!rationCard || checking}
                                    className="btn-primary w-full flex items-center justify-center space-x-2"
                                >
                                    {checking ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                            <span>Checking...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Search className="w-5 h-5" />
                                            <span>Check Eligibility</span>
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Results */}
                            {result && (
                                <div className="mt-8">
                                    {result.eligible ? (
                                        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
                                            <div className="flex items-center space-x-4 mb-4">
                                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                                                    <CheckCircle className="w-10 h-10 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-green-900">You are Eligible!</h3>
                                                    <p className="text-green-700">Your family qualifies for PM-JAY benefits</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div className="bg-white p-4 rounded-lg">
                                                    <div className="text-sm text-gray-600 mb-1">Coverage Amount</div>
                                                    <div className="text-2xl font-bold text-green-900">₹{result.amount.toLocaleString('en-IN')}</div>
                                                    <div className="text-xs text-gray-500">per family per year</div>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg">
                                                    <div className="text-sm text-gray-600 mb-1">Family Members Covered</div>
                                                    <div className="text-2xl font-bold text-green-900">{result.familyMembers}</div>
                                                    <div className="text-xs text-gray-500">members</div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg mb-4">
                                                <h4 className="font-semibold text-gray-900 mb-3">Next Steps:</h4>
                                                <ol className="space-y-2">
                                                    <li className="flex items-start space-x-3">
                                                        <span className="font-bold text-green-600">1.</span>
                                                        <span className="text-sm text-gray-700">Visit any PM-JAY empaneled hospital (see list below)</span>
                                                    </li>
                                                    <li className="flex items-start space-x-3">
                                                        <span className="font-bold text-green-600">2.</span>
                                                        <span className="text-sm text-gray-700">Show your ration card and Aadhar card at the Ayushman Mitra desk</span>
                                                    </li>
                                                    <li className="flex items-start space-x-3">
                                                        <span className="font-bold text-green-600">3.</span>
                                                        <span className="text-sm text-gray-700">Get your Ayushman Bharat card generated (free)</span>
                                                    </li>
                                                    <li className="flex items-start space-x-3">
                                                        <span className="font-bold text-green-600">4.</span>
                                                        <span className="text-sm text-gray-700">Start your treatment - no upfront payment required!</span>
                                                    </li>
                                                </ol>
                                            </div>

                                            <button className="btn-primary w-full">
                                                Contact Case Manager for Help
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6">
                                            <div className="flex items-center space-x-4 mb-4">
                                                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                                                    <XCircle className="w-10 h-10 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-red-900">Not Eligible</h3>
                                                    <p className="text-red-700">Your card number is not in the PM-JAY database</p>
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-semibold text-gray-900 mb-3">Alternative Funding Options:</h4>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start space-x-2">
                                                        <span className="text-blue-600">•</span>
                                                        <span className="text-sm text-gray-700">NGO Grants (₹50,000 - ₹3,00,000)</span>
                                                    </li>
                                                    <li className="flex items-start space-x-2">
                                                        <span className="text-blue-600">•</span>
                                                        <span className="text-sm text-gray-700">State Government Schemes</span>
                                                    </li>
                                                    <li className="flex items-start space-x-2">
                                                        <span className="text-blue-600">•</span>
                                                        <span className="text-sm text-gray-700">Medical Loans from NBFCs</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Empaneled Hospitals */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">PM-JAY Empaneled Hospitals (Sample)</h2>
                    <p className="text-gray-600 mb-6">24,000+ hospitals across India accept PM-JAY. Here are some major cancer centers:</p>

                    <div className="space-y-6">
                        {hospitals.map((hospital, index) => (
                            <div key={index} className="card">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{hospital.name}</h3>
                                        <div className="flex items-center space-x-2 mb-3">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                                                PM-JAY Empaneled
                                            </span>
                                            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                                                {hospital.beds} beds
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start space-x-3">
                                        <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <div className="font-semibold text-gray-900">{hospital.location}</div>
                                            <div className="text-sm text-gray-600">{hospital.address}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <div className="font-semibold text-gray-900">Contact</div>
                                            <a href={`tel:${hospital.phone}`} className="text-sm text-blue-600 hover:text-blue-700">
                                                {hospital.phone}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t">
                                    <div className="font-semibold text-gray-900 mb-2">Specialties:</div>
                                    <div className="flex flex-wrap gap-2">
                                        {hospital.specialties.map((specialty, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                                {specialty}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="card bg-blue-50 border-2 border-blue-200 mt-8">
                        <p className="text-center text-blue-900">
                            <strong>Note:</strong> This is a sample list. To find all PM-JAY hospitals near you, visit{' '}
                            <a href="https://hospitals.pmjay.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                                hospitals.pmjay.gov.in
                            </a>
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}
