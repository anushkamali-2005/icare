'use client'

import { useState } from 'react'
import { AlertCircle, CheckCircle2, ArrowRight, Activity } from 'lucide-react'

const symptoms = [
    { id: 'lump', label: 'Lump or mass in breast/body', category: 'Physical' },
    { id: 'pain', label: 'Persistent pain', category: 'Physical' },
    { id: 'bleeding', label: 'Unusual bleeding or discharge', category: 'Physical' },
    { id: 'weight-loss', label: 'Unexplained weight loss', category: 'General' },
    { id: 'fatigue', label: 'Extreme fatigue', category: 'General' },
    { id: 'fever', label: 'Persistent fever', category: 'General' },
    { id: 'skin-changes', label: 'Skin changes or sores', category: 'Physical' },
    { id: 'cough', label: 'Persistent cough', category: 'Respiratory' },
    { id: 'difficulty-swallowing', label: 'Difficulty swallowing', category: 'Digestive' },
    { id: 'bowel-changes', label: 'Changes in bowel habits', category: 'Digestive' },
]

export default function SymptomCheckerPage() {
    const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [showResults, setShowResults] = useState(false)

    const handleSymptomToggle = (symptomId: string) => {
        if (selectedSymptoms.includes(symptomId)) {
            setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptomId))
        } else {
            setSelectedSymptoms([...selectedSymptoms, symptomId])
        }
    }

    const handleSubmit = () => {
        if (selectedSymptoms.length > 0 && age && gender) {
            setShowResults(true)
        }
    }

    const riskLevel = selectedSymptoms.length >= 3 ? 'high' : selectedSymptoms.length >= 1 ? 'medium' : 'low'

    if (showResults) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16">
                    <div className="container-custom">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Symptom Assessment Results</h1>
                    </div>
                </div>

                <div className="container-custom py-12">
                    <div className="max-w-3xl mx-auto space-y-6">
                        {/* Risk Level */}
                        <div className={`card ${riskLevel === 'high' ? 'bg-red-50 border-red-200' : riskLevel === 'medium' ? 'bg-yellow-50 border-yellow-200' : 'bg-green-50 border-green-200'}`}>
                            <div className="flex items-start space-x-4">
                                <AlertCircle className={`w-12 h-12 ${riskLevel === 'high' ? 'text-red-600' : riskLevel === 'medium' ? 'text-yellow-600' : 'text-green-600'}`} />
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                        {riskLevel === 'high' ? 'High Priority - Immediate Action Recommended' : riskLevel === 'medium' ? 'Medium Priority - Consultation Recommended' : 'Low Risk - Monitor Symptoms'}
                                    </h2>
                                    <p className="text-gray-700">
                                        {riskLevel === 'high'
                                            ? 'Based on your symptoms, we strongly recommend consulting a doctor immediately for proper diagnosis.'
                                            : riskLevel === 'medium'
                                                ? 'Your symptoms warrant medical attention. Please schedule a consultation with a healthcare provider.'
                                                : 'Your symptoms appear to be low risk, but continue monitoring and consult a doctor if they persist.'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Recommendations */}
                        <div className="card">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Next Steps</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Schedule a Doctor Consultation</p>
                                        <p className="text-sm text-gray-600">Book an appointment with an oncologist for proper diagnosis</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Get Diagnostic Tests</p>
                                        <p className="text-sm text-gray-600">Your doctor may recommend blood tests, imaging, or biopsy</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Register with ICARE</p>
                                        <p className="text-sm text-gray-600">Get access to financial assistance and case management support</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Find Hospitals */}
                        <div className="card bg-gradient-to-br from-primary-50 to-secondary-50">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Find Nearby Hospitals</h3>
                            <p className="text-gray-700 mb-4">We can help you find cancer care specialists near you</p>
                            <button className="btn-primary">Find Hospitals</button>
                        </div>

                        {/* Screening Camps */}
                        <div className="card bg-gradient-to-br from-purple-50 to-pink-50">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Free Screening Camps</h3>
                            <p className="text-gray-700 mb-4">Check for free or subsidized screening camps in your area</p>
                            <button className="btn-secondary">Find Screening Camps</button>
                        </div>

                        <div className="flex space-x-4">
                            <button onClick={() => setShowResults(false)} className="btn-secondary flex-1">
                                Check Again
                            </button>
                            <button className="btn-primary flex-1">Register with ICARE</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Symptom Checker</h1>
                    <p className="text-xl opacity-90">
                        AI-powered symptom analysis to assess your cancer risk
                    </p>
                </div>
            </div>

            <div className="container-custom py-12">
                <div className="max-w-3xl mx-auto">
                    <div className="card mb-8 bg-blue-50 border-blue-200">
                        <div className="flex items-start space-x-3">
                            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm text-gray-700">
                                    <strong>Disclaimer:</strong> This tool is for informational purposes only and does not replace professional medical advice.
                                    Always consult a qualified healthcare provider for proper diagnosis and treatment.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Tell us about your symptoms</h2>

                        {/* Basic Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                                <input
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    placeholder="Enter your age"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                                <select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                >
                                    <option value="">Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Symptoms */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Select all symptoms you're experiencing</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {symptoms.map((symptom) => (
                                    <label
                                        key={symptom.id}
                                        className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${selectedSymptoms.includes(symptom.id)
                                                ? 'border-primary-500 bg-primary-50'
                                                : 'border-gray-200 hover:border-primary-300'
                                            }`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedSymptoms.includes(symptom.id)}
                                            onChange={() => handleSymptomToggle(symptom.id)}
                                            className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                        />
                                        <div className="flex-1">
                                            <div className="font-medium text-gray-900">{symptom.label}</div>
                                            <div className="text-xs text-gray-500">{symptom.category}</div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={selectedSymptoms.length === 0 || !age || !gender}
                            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                        >
                            <Activity className="w-5 h-5" />
                            <span>Analyze Symptoms</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
