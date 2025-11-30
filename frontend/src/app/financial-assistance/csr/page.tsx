'use client'

import { Building2, CheckCircle2 } from 'lucide-react'

export default function CSRPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white py-16">
                <div className="container-custom">
                    <div className="flex items-center space-x-4">
                        <Building2 className="w-16 h-16" />
                        <div>
                            <h1 className="text-4xl font-bold">CSR Adopt-a-Patient</h1>
                            <p className="text-xl opacity-90 mt-2">Corporate funding up to ₹5 lakh</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12 max-w-4xl mx-auto">
                <div className="card mb-8">
                    <h2 className="text-2xl font-bold mb-4">How It Works</h2>
                    <div className="space-y-3">
                        {['Create anonymized patient profile', 'Corporate partners review profiles', 'Get matched with CSR sponsor', 'Receive direct funding for treatment'].map((step, i) => (
                            <div key={i} className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-purple-600 font-bold">{i + 1}</span>
                                </div>
                                <p className="text-gray-700 mt-1">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card">
                    <h2 className="text-2xl font-bold mb-6">Create Your Profile</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Your Story (will be anonymized)</label>
                            <textarea rows={6} placeholder="Share your cancer journey..." className="w-full px-4 py-3 border rounded-lg resize-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Funding Needed</label>
                            <input type="number" className="w-full px-4 py-3 border rounded-lg" />
                        </div>
                        <button className="btn-primary w-full">Submit for CSR Matching</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
