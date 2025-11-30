'use client'

import { useState } from 'react'
import { Calculator, IndianRupee, TrendingUp, TrendingDown, FileText, Download, ArrowRight } from 'lucide-react'

export default function FinancialAssessmentPage() {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        cancerType: '',
        stage: '',
        treatmentPlan: [],
        monthlyIncome: '',
        savings: '',
        insurance: '',
        insuranceAmount: ''
    })
    const [results, setResults] = useState<any>(null)

    const cancerTypes = ['Breast', 'Lung', 'Colorectal', 'Cervical', 'Oral', 'Stomach', 'Liver', 'Prostate']
    const stages = ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4']
    const treatments = ['Surgery', 'Chemotherapy', 'Radiation', 'Targeted Therapy', 'Immunotherapy']

    const calculateCost = () => {
        // Mock calculation - in real app, this would use actual cost data
        let baseCost = 0

        // Base cost by cancer type
        const typeCosts: any = {
            'Breast': 300000,
            'Lung': 500000,
            'Colorectal': 400000,
            'Cervical': 250000,
            'Oral': 350000,
            'Stomach': 450000,
            'Liver': 600000,
            'Prostate': 400000
        }

        baseCost = typeCosts[formData.cancerType] || 300000

        // Multiply by stage
        const stageMultiplier = parseInt(formData.stage.split(' ')[1]) || 1
        baseCost *= stageMultiplier * 0.5 + 0.5

        // Add treatment costs
        const treatmentCosts: any = {
            'Surgery': 150000,
            'Chemotherapy': 200000,
            'Radiation': 150000,
            'Targeted Therapy': 300000,
            'Immunotherapy': 400000
        }

        formData.treatmentPlan.forEach(treatment => {
            baseCost += treatmentCosts[treatment] || 0
        })

        const totalCost = Math.round(baseCost)
        const availableFunds = parseInt(formData.savings) + parseInt(formData.insuranceAmount || '0')
        const fundingGap = Math.max(0, totalCost - availableFunds)

        setResults({
            totalCost,
            availableFunds,
            fundingGap,
            breakdown: {
                surgery: formData.treatmentPlan.includes('Surgery') ? 150000 : 0,
                chemo: formData.treatmentPlan.includes('Chemotherapy') ? 200000 : 0,
                radiation: formData.treatmentPlan.includes('Radiation') ? 150000 : 0,
                targeted: formData.treatmentPlan.includes('Targeted Therapy') ? 300000 : 0,
                immuno: formData.treatmentPlan.includes('Immunotherapy') ? 400000 : 0,
                hospitalization: Math.round(baseCost * 0.3),
                medicines: Math.round(baseCost * 0.2),
                tests: Math.round(baseCost * 0.15)
            }
        })

        setStep(3)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold mb-2">Financial Assessment</h1>
                    <p className="text-xl opacity-90">Calculate treatment costs and identify funding sources</p>
                </div>
            </div>

            <div className="container-custom py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Progress Steps */}
                    <div className="flex items-center justify-center mb-12">
                        {[1, 2, 3].map(num => (
                            <div key={num} className="flex items-center">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${step >= num ? 'bg-emerald-600 text-white' : 'bg-gray-300 text-gray-600'
                                    }`}>
                                    {num}
                                </div>
                                {num < 3 && (
                                    <div className={`w-24 h-1 ${step > num ? 'bg-emerald-600' : 'bg-gray-300'}`} />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Step 1: Treatment Details */}
                    {step === 1 && (
                        <div className="card">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 1: Treatment Details</h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Cancer Type *</label>
                                    <select
                                        value={formData.cancerType}
                                        onChange={(e) => setFormData({ ...formData, cancerType: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                        required
                                    >
                                        <option value="">Select cancer type</option>
                                        {cancerTypes.map(type => (
                                            <option key={type} value={type}>{type} Cancer</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Stage *</label>
                                    <select
                                        value={formData.stage}
                                        onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                        required
                                    >
                                        <option value="">Select stage</option>
                                        {stages.map(stage => (
                                            <option key={stage} value={stage}>{stage}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Treatment Plan * (Select all that apply)</label>
                                    <div className="space-y-2">
                                        {treatments.map(treatment => (
                                            <label key={treatment} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.treatmentPlan.includes(treatment)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFormData({ ...formData, treatmentPlan: [...formData.treatmentPlan, treatment] })
                                                        } else {
                                                            setFormData({ ...formData, treatmentPlan: formData.treatmentPlan.filter(t => t !== treatment) })
                                                        }
                                                    }}
                                                    className="w-5 h-5"
                                                />
                                                <span className="font-medium text-gray-900">{treatment}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setStep(2)}
                                disabled={!formData.cancerType || !formData.stage || formData.treatmentPlan.length === 0}
                                className="btn-primary w-full mt-8 flex items-center justify-center space-x-2"
                            >
                                <span>Next: Financial Details</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}

                    {/* Step 2: Financial Details */}
                    {step === 2 && (
                        <div className="card">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 2: Financial Details</h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Family Income (₹) *</label>
                                    <input
                                        type="number"
                                        value={formData.monthlyIncome}
                                        onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                        placeholder="e.g., 25000"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Available Savings (₹) *</label>
                                    <input
                                        type="number"
                                        value={formData.savings}
                                        onChange={(e) => setFormData({ ...formData, savings: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                        placeholder="e.g., 50000"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Do you have health insurance?</label>
                                    <select
                                        value={formData.insurance}
                                        onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                    >
                                        <option value="">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>

                                {formData.insurance === 'yes' && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Coverage Amount (₹)</label>
                                        <input
                                            type="number"
                                            value={formData.insuranceAmount}
                                            onChange={(e) => setFormData({ ...formData, insuranceAmount: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                            placeholder="e.g., 200000"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="flex space-x-4 mt-8">
                                <button onClick={() => setStep(1)} className="btn-secondary flex-1">
                                    Back
                                </button>
                                <button
                                    onClick={calculateCost}
                                    disabled={!formData.monthlyIncome || !formData.savings}
                                    className="btn-primary flex-1 flex items-center justify-center space-x-2"
                                >
                                    <Calculator className="w-5 h-5" />
                                    <span>Calculate</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Results */}
                    {step === 3 && results && (
                        <div className="space-y-6">
                            {/* Summary Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
                                    <div className="text-sm text-blue-700 mb-2">Estimated Total Cost</div>
                                    <div className="text-3xl font-bold text-blue-900 flex items-center">
                                        <IndianRupee className="w-8 h-8" />
                                        {results.totalCost.toLocaleString('en-IN')}
                                    </div>
                                </div>

                                <div className="card bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
                                    <div className="text-sm text-green-700 mb-2">Available Funds</div>
                                    <div className="text-3xl font-bold text-green-900 flex items-center">
                                        <IndianRupee className="w-8 h-8" />
                                        {results.availableFunds.toLocaleString('en-IN')}
                                    </div>
                                </div>

                                <div className={`card bg-gradient-to-br ${results.fundingGap > 0 ? 'from-red-50 to-red-100 border-2 border-red-200' : 'from-green-50 to-green-100 border-2 border-green-200'
                                    }`}>
                                    <div className={`text-sm ${results.fundingGap > 0 ? 'text-red-700' : 'text-green-700'} mb-2`}>
                                        Funding Gap
                                    </div>
                                    <div className={`text-3xl font-bold ${results.fundingGap > 0 ? 'text-red-900' : 'text-green-900'} flex items-center`}>
                                        <IndianRupee className="w-8 h-8" />
                                        {results.fundingGap.toLocaleString('en-IN')}
                                    </div>
                                </div>
                            </div>

                            {/* Cost Breakdown */}
                            <div className="card">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Cost Breakdown</h3>
                                <div className="space-y-4">
                                    {Object.entries(results.breakdown).map(([key, value]: [string, any]) => {
                                        if (value === 0) return null
                                        const labels: any = {
                                            surgery: 'Surgery',
                                            chemo: 'Chemotherapy',
                                            radiation: 'Radiation Therapy',
                                            targeted: 'Targeted Therapy',
                                            immuno: 'Immunotherapy',
                                            hospitalization: 'Hospitalization',
                                            medicines: 'Medicines',
                                            tests: 'Tests & Diagnostics'
                                        }
                                        return (
                                            <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                                <span className="font-medium text-gray-900">{labels[key]}</span>
                                                <span className="text-lg font-bold text-gray-900">₹{value.toLocaleString('en-IN')}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Recommendations */}
                            <div className="card bg-emerald-50 border-2 border-emerald-200">
                                <h3 className="text-xl font-bold text-emerald-900 mb-4">💡 Recommended Funding Sources</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                                        <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-900 mb-1">PM-JAY (Ayushman Bharat)</h4>
                                            <p className="text-sm text-gray-600 mb-2">Coverage up to ₹5,00,000 per family per year</p>
                                            <button className="text-emerald-600 font-semibold text-sm hover:text-emerald-700">
                                                Check Eligibility →
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                                        <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-900 mb-1">NGO Grants</h4>
                                            <p className="text-sm text-gray-600 mb-2">20+ NGOs offering grants of ₹50,000 - ₹3,00,000</p>
                                            <button className="text-emerald-600 font-semibold text-sm hover:text-emerald-700">
                                                Browse NGOs →
                                            </button>
                                        </div>
                                    </div>

                                    {results.fundingGap > 300000 && (
                                        <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                                            <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-900 mb-1">Medical Loans</h4>
                                                <p className="text-sm text-gray-600 mb-2">Low-interest loans from NBFCs</p>
                                                <button className="text-emerald-600 font-semibold text-sm hover:text-emerald-700">
                                                    Explore Loans →
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex space-x-4">
                                <button onClick={() => setStep(1)} className="btn-secondary flex-1">
                                    Start Over
                                </button>
                                <button className="btn-primary flex-1 flex items-center justify-center space-x-2">
                                    <Download className="w-5 h-5" />
                                    <span>Download Report</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
