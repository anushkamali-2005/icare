'use client'

import { useState } from 'react'
import { CreditCard, Calculator } from 'lucide-react'

export default function NBFCLoanPage() {
    const [amount, setAmount] = useState(500000)
    const [tenure, setTenure] = useState(24)
    const interest = 12
    const emi = Math.round((amount * interest / 12 / 100 * Math.pow(1 + interest / 12 / 100, tenure)) / (Math.pow(1 + interest / 12 / 100, tenure) - 1))

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-16">
                <div className="container-custom">
                    <div className="flex items-center space-x-4">
                        <CreditCard className="w-16 h-16" />
                        <div>
                            <h1 className="text-4xl font-bold">NBFC Medical Loans</h1>
                            <p className="text-xl opacity-90 mt-2">Low-interest loans up to ₹10 lakh</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12 max-w-4xl mx-auto">
                <div className="card mb-8 bg-gradient-to-br from-blue-50 to-blue-100">
                    <div className="flex items-center space-x-3 mb-4">
                        <Calculator className="w-8 h-8 text-blue-600" />
                        <h2 className="text-2xl font-bold">EMI Calculator</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Loan Amount</label>
                            <input type="range" min="100000" max="1000000" step="50000" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} className="w-full" />
                            <div className="text-2xl font-bold text-blue-600 mt-2">₹{(amount / 100000).toFixed(1)}L</div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Tenure (months)</label>
                            <input type="range" min="12" max="60" step="6" value={tenure} onChange={(e) => setTenure(parseInt(e.target.value))} className="w-full" />
                            <div className="text-2xl font-bold text-blue-600 mt-2">{tenure} months</div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                        <div className="text-center">
                            <div className="text-sm text-gray-600 mb-2">Monthly EMI</div>
                            <div className="text-4xl font-bold text-blue-600">₹{emi.toLocaleString()}</div>
                            <div className="text-xs text-gray-500 mt-2">@ {interest}% interest p.a.</div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h2 className="text-2xl font-bold mb-6">Apply for Loan</h2>
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Monthly Income</label>
                                <input type="number" className="w-full px-4 py-3 border rounded-lg" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">CIBIL Score</label>
                                <input type="number" className="w-full px-4 py-3 border rounded-lg" />
                            </div>
                        </div>
                        <button className="btn-primary w-full">Apply for Loan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
