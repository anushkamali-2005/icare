'use client'

import { Coins, FileText, CheckCircle2, Clock } from 'lucide-react'

const claims = [
    { id: 1, policyNo: 'POL-2024-001', amount: 300000, status: 'approved', date: '15 Nov 2024' },
    { id: 2, policyNo: 'POL-2024-002', amount: 150000, status: 'pending', date: '20 Nov 2024' },
]

export default function InsurancePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white py-16">
                <div className="container-custom">
                    <div className="flex items-center space-x-4">
                        <Coins className="w-16 h-16" />
                        <div>
                            <h1 className="text-4xl font-bold">Insurance Claims</h1>
                            <p className="text-xl opacity-90 mt-2">Process health insurance claims</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12 max-w-4xl mx-auto">
                <div className="card mb-8">
                    <h2 className="text-2xl font-bold mb-6">My Claims</h2>
                    <div className="space-y-4">
                        {claims.map(claim => (
                            <div key={claim.id} className="border rounded-lg p-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="font-semibold text-gray-900">{claim.policyNo}</div>
                                        <div className="text-sm text-gray-600">{claim.date}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xl font-bold text-gray-900">₹{(claim.amount / 1000).toFixed(0)}K</div>
                                        <div className={`text-xs px-2 py-1 rounded-full inline-block ${claim.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                            {claim.status}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card">
                    <h2 className="text-2xl font-bold mb-6">File New Claim</h2>
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Policy Number</label>
                                <input type="text" className="w-full px-4 py-3 border rounded-lg" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Claim Amount</label>
                                <input type="number" className="w-full px-4 py-3 border rounded-lg" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Upload Documents</label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                <FileText className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                                <p className="text-gray-600 text-sm">Upload hospital bills, policy documents</p>
                            </div>
                        </div>
                        <button className="btn-primary w-full">Submit Claim</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
