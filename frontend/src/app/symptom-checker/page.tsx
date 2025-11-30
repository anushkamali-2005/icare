'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Shield, Users, Activity, FileText, Download, ArrowRight, ArrowLeft } from 'lucide-react'

type Step = 'intro' | 'symptoms' | 'family' | 'lifestyle' | 'results'

export default function RiskAssessmentPage() {
    const router = useRouter()
    const [currentStep, setCurrentStep] = useState<Step>('intro')
    const [assessmentData, setAssessmentData] = useState({
        symptoms: {},
        familyHistory: {},
        lifestyle: {},
        riskScore: 0
    })

    const steps = [
        { id: 'intro', name: 'Introduction', icon: Shield },
        { id: 'symptoms', name: 'Symptoms', icon: Activity },
        { id: 'family', name: 'Family History', icon: Users },
        { id: 'lifestyle', name: 'Lifestyle', icon: Activity },
        { id: 'results', name: 'Results', icon: FileText }
    ]

    const currentStepIndex = steps.findIndex(s => s.id === currentStep)

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold mb-2">AI-Powered Cancer Risk Assessment</h1>
                    <p className="text-xl opacity-90">Comprehensive evaluation of your cancer risk factors</p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-white border-b">
                <div className="container-custom py-6">
                    <div className="flex items-center justify-between">
                        {steps.map((step, index) => {
                            const Icon = step.icon
                            const isActive = index === currentStepIndex
                            const isCompleted = index < currentStepIndex

                            return (
                                <div key={step.id} className="flex items-center flex-1">
                                    <div className="flex flex-col items-center flex-1">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${isActive ? 'bg-green-600 text-white scale-110' :
                                                isCompleted ? 'bg-green-100 text-green-600' :
                                                    'bg-gray-200 text-gray-400'
                                            }`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className={`text-sm font-medium ${isActive ? 'text-green-600' : 'text-gray-500'}`}>
                                            {step.name}
                                        </span>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className={`h-1 flex-1 mx-4 ${isCompleted ? 'bg-green-600' : 'bg-gray-200'}`} />
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container-custom py-12">
                <div className="max-w-4xl mx-auto">
                    {currentStep === 'intro' && <IntroStep onNext={() => setCurrentStep('symptoms')} />}
                    {currentStep === 'symptoms' && (
                        <SymptomsStep
                            onNext={() => setCurrentStep('family')}
                            onBack={() => setCurrentStep('intro')}
                        />
                    )}
                    {currentStep === 'family' && (
                        <FamilyHistoryStep
                            onNext={() => setCurrentStep('lifestyle')}
                            onBack={() => setCurrentStep('symptoms')}
                        />
                    )}
                    {currentStep === 'lifestyle' && (
                        <LifestyleStep
                            onNext={() => setCurrentStep('results')}
                            onBack={() => setCurrentStep('family')}
                        />
                    )}
                    {currentStep === 'results' && (
                        <ResultsStep onBack={() => setCurrentStep('lifestyle')} />
                    )}
                </div>
            </div>
        </div>
    )
}

function IntroStep({ onNext }: { onNext: () => void }) {
    return (
        <div className="card">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Cancer Risk Assessment</h2>

            <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-2">Comprehensive Evaluation</h3>
                        <p className="text-gray-600">
                            This assessment evaluates your cancer risk based on symptoms, family history, and lifestyle factors.
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Activity className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-2">AI-Powered Analysis</h3>
                        <p className="text-gray-600">
                            Our AI algorithm analyzes your responses to provide a personalized risk score and recommendations.
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-2">Detailed Report</h3>
                        <p className="text-gray-600">
                            Receive a comprehensive PDF report with your risk score, recommendations, and next steps.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
                <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> This assessment is for informational purposes only and does not replace professional medical advice.
                    Please consult with a healthcare provider for proper diagnosis and treatment.
                </p>
            </div>

            <button onClick={onNext} className="btn-primary w-full flex items-center justify-center space-x-2">
                <span>Start Assessment</span>
                <ArrowRight className="w-5 h-5" />
            </button>
        </div>
    )
}

function SymptomsStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
    const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])

    const symptoms = [
        { id: 'lump', name: 'Lump or swelling', body: 'Breast, neck, armpit, or elsewhere' },
        { id: 'bleeding', name: 'Unusual bleeding', body: 'Blood in urine, stool, or coughing up blood' },
        { id: 'cough', name: 'Persistent cough', body: 'Lasting more than 3 weeks' },
        { id: 'weight', name: 'Unexplained weight loss', body: 'More than 5kg in 6 months' },
        { id: 'fatigue', name: 'Extreme fatigue', body: 'Not relieved by rest' },
        { id: 'pain', name: 'Persistent pain', body: 'Lasting more than 4 weeks' },
        { id: 'skin', name: 'Skin changes', body: 'New moles, changes in existing moles' },
        { id: 'bowel', name: 'Bowel changes', body: 'Persistent diarrhea or constipation' },
        { id: 'difficulty', name: 'Difficulty swallowing', body: 'Persistent for more than 3 weeks' },
        { id: 'sores', name: 'Mouth sores', body: 'Not healing for more than 3 weeks' }
    ]

    const toggleSymptom = (id: string) => {
        setSelectedSymptoms(prev =>
            prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
        )
    }

    return (
        <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Symptom Assessment</h2>
            <p className="text-gray-600 mb-8">Select any symptoms you've experienced in the past 6 months</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {symptoms.map(symptom => (
                    <div
                        key={symptom.id}
                        onClick={() => toggleSymptom(symptom.id)}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${selectedSymptoms.includes(symptom.id)
                                ? 'border-green-600 bg-green-50'
                                : 'border-gray-200 hover:border-green-300'
                            }`}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 mb-1">{symptom.name}</h4>
                                <p className="text-sm text-gray-600">{symptom.body}</p>
                            </div>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedSymptoms.includes(symptom.id)
                                    ? 'border-green-600 bg-green-600'
                                    : 'border-gray-300'
                                }`}>
                                {selectedSymptoms.includes(symptom.id) && (
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex space-x-4">
                <button onClick={onBack} className="btn-secondary flex-1 flex items-center justify-center space-x-2">
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                </button>
                <button onClick={onNext} className="btn-primary flex-1 flex items-center justify-center space-x-2">
                    <span>Next</span>
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}

function FamilyHistoryStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
    return (
        <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Family History</h2>
            <p className="text-gray-600 mb-8">Has anyone in your family been diagnosed with cancer?</p>

            <div className="space-y-6 mb-8">
                <div className="border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">Immediate Family (Parents, Siblings, Children)</h3>
                    <div className="space-y-4">
                        {['Mother', 'Father', 'Sister', 'Brother'].map(relation => (
                            <div key={relation} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <span className="font-medium text-gray-900">{relation}</span>
                                <div className="flex space-x-4">
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name={relation} value="yes" className="w-4 h-4" />
                                        <span className="text-sm">Yes</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name={relation} value="no" className="w-4 h-4" defaultChecked />
                                        <span className="text-sm">No</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name={relation} value="unknown" className="w-4 h-4" />
                                        <span className="text-sm">Unknown</span>
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">Extended Family (Grandparents, Aunts, Uncles)</h3>
                    <div className="space-y-4">
                        {['Grandmother', 'Grandfather', 'Aunt', 'Uncle'].map(relation => (
                            <div key={relation} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <span className="font-medium text-gray-900">{relation}</span>
                                <div className="flex space-x-4">
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name={relation} value="yes" className="w-4 h-4" />
                                        <span className="text-sm">Yes</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name={relation} value="no" className="w-4 h-4" defaultChecked />
                                        <span className="text-sm">No</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name={relation} value="unknown" className="w-4 h-4" />
                                        <span className="text-sm">Unknown</span>
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex space-x-4">
                <button onClick={onBack} className="btn-secondary flex-1 flex items-center justify-center space-x-2">
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                </button>
                <button onClick={onNext} className="btn-primary flex-1 flex items-center justify-center space-x-2">
                    <span>Next</span>
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}

function LifestyleStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
    return (
        <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Lifestyle Risk Factors</h2>
            <p className="text-gray-600 mb-8">Help us understand your lifestyle habits</p>

            <div className="space-y-6 mb-8">
                {/* Tobacco Use */}
                <div className="border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">Tobacco Use</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Do you smoke?</label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                                <option>Never smoked</option>
                                <option>Former smoker</option>
                                <option>Current smoker</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Cigarettes per day</label>
                                <input type="number" className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="0" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Years of smoking</label>
                                <input type="number" className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="0" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alcohol */}
                <div className="border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">Alcohol Consumption</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">How often do you drink alcohol?</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                            <option>Never</option>
                            <option>Occasionally (1-2 times/month)</option>
                            <option>Regularly (1-2 times/week)</option>
                            <option>Frequently (3+ times/week)</option>
                            <option>Daily</option>
                        </select>
                    </div>
                </div>

                {/* Physical Activity */}
                <div className="border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">Physical Activity</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">How many minutes of exercise per week?</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                            <option>Less than 30 minutes</option>
                            <option>30-60 minutes</option>
                            <option>60-150 minutes</option>
                            <option>More than 150 minutes</option>
                        </select>
                    </div>
                </div>

                {/* Diet */}
                <div className="border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">Diet Quality</h3>
                    <div className="space-y-3">
                        <label className="flex items-center space-x-3">
                            <input type="checkbox" className="w-5 h-5" />
                            <span className="text-gray-700">I eat 5+ servings of fruits and vegetables daily</span>
                        </label>
                        <label className="flex items-center space-x-3">
                            <input type="checkbox" className="w-5 h-5" />
                            <span className="text-gray-700">I limit processed and red meat</span>
                        </label>
                        <label className="flex items-center space-x-3">
                            <input type="checkbox" className="w-5 h-5" />
                            <span className="text-gray-700">I avoid sugary drinks</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="flex space-x-4">
                <button onClick={onBack} className="btn-secondary flex-1 flex items-center justify-center space-x-2">
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                </button>
                <button onClick={onNext} className="btn-primary flex-1 flex items-center justify-center space-x-2">
                    <span>View Results</span>
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}

function ResultsStep({ onBack }: { onBack: () => void }) {
    const riskScore = 45 // Mock score - would be calculated from assessment data
    const riskLevel = riskScore < 30 ? 'Low' : riskScore < 60 ? 'Medium' : 'High'
    const riskColor = riskScore < 30 ? 'green' : riskScore < 60 ? 'yellow' : 'red'

    return (
        <div className="space-y-6">
            {/* Risk Score Card */}
            <div className="card text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Cancer Risk Assessment</h2>

                <div className="mb-8">
                    <div className={`w-48 h-48 mx-auto rounded-full border-8 border-${riskColor}-500 flex items-center justify-center bg-${riskColor}-50`}>
                        <div>
                            <div className={`text-6xl font-bold text-${riskColor}-600`}>{riskScore}</div>
                            <div className={`text-xl font-semibold text-${riskColor}-700`}>{riskLevel} Risk</div>
                        </div>
                    </div>
                </div>

                <p className="text-gray-600 mb-6">
                    Based on your responses, you have a <strong>{riskLevel.toLowerCase()} risk</strong> of developing cancer.
                </p>
            </div>

            {/* Recommendations */}
            <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Recommendations</h3>
                <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white text-sm">1</span>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Schedule a Screening</h4>
                            <p className="text-sm text-gray-600">Based on your age and risk factors, we recommend scheduling a comprehensive cancer screening.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white text-sm">2</span>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Lifestyle Modifications</h4>
                            <p className="text-sm text-gray-600">Consider quitting smoking, reducing alcohol intake, and increasing physical activity to 150+ minutes per week.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white text-sm">3</span>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Consult a Doctor</h4>
                            <p className="text-sm text-gray-600">Discuss your family history with a healthcare provider and consider genetic counseling if recommended.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="btn-primary flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download PDF Report</span>
                </button>
                <button className="btn-secondary flex items-center justify-center space-x-2">
                    <span>Book Screening</span>
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>

            <button onClick={onBack} className="btn-secondary w-full flex items-center justify-center space-x-2">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Edit Responses</span>
            </button>
        </div>
    )
}
