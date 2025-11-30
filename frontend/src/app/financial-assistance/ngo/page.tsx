'use client'

import { useState } from 'react'
import { Heart, CheckCircle2, TrendingUp, FileText } from 'lucide-react'

const ngoPartners = [
    { name: 'Cancer Aid Foundation', maxGrant: 300000, focus: 'All cancers', turnaround: '5-7 days', match: 95 },
    { name: 'Hope for Tomorrow', maxGrant: 200000, focus: 'Pediatric cancer', turnaround: '7-10 days', match: 88 },
    { name: 'Healing Hands Trust', maxGrant: 250000, focus: 'Women cancers', turnaround: '5-7 days', match: 92 },
]

export default function NGOGrantPage() {
    const [step, setStep] = useState(1)

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white py-16">
                <div className="container-custom">
                    <div className="flex items-center space-x-4">
                        <Heart className="w-16 h-16" />
                        <div>
                            <h1 className="text-4xl font-bold">NGO Grants</h1>
                            <p className="text-xl opacity-90 mt-2">Non-repayable grants from 50+ partner NGOs</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12 max-w-4xl mx-auto">
                <div className="card mb-8">
                    <h2 className="text-2xl font-bold mb-6">Top Matched NGO Partners</h2>
                    <div className="space-y-4">
                        {ngoPartners.map((ngo, i) => (
                            <div key={i} className="border-2 border-gray-200 rounded-lg p-4 hover:border-pink-400 transition-all">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{ngo.name}</h3>
                                        <p className="text-sm text-gray-600">Focus: {ngo.focus}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-pink-600">₹{(ngo.maxGrant / 100000).toFixed(1)}L</div>
                                        <div className="text-xs text-gray-500">Max grant</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-2">
                                        <TrendingUp className="w-4 h-4 text-green-500" />
                                        <span className="text-sm text-gray-600">{ngo.match}% match</span>
                                    </div>
                                    <button className="btn-primary text-sm py-2">Apply Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card">
                    <h2 className="text-2xl font-bold mb-6">Application Form</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Requested Amount</label>
                            <input type="number" placeholder="₹" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
                            <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 outline-none resize-none" />
                        </div>
                        <button className="btn-primary w-full">Submit Applications to All Matched NGOs</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
