'use client'

import { useState } from 'react'
import { CheckSquare, Square, ChevronRight, FileText, Download } from 'lucide-react'

export default function DiagnosisPage() {
    const [selectedCancer, setSelectedCancer] = useState('breast')
    const [checklist, setChecklist] = useState({
        breast: [
            { id: 1, task: 'Book Mammography', completed: false, details: 'Schedule a mammogram at a diagnostic center' },
            { id: 2, task: 'Get Ultrasound (if needed)', completed: false, details: 'Additional imaging if mammogram shows abnormality' },
            { id: 3, task: 'Biopsy Appointment', completed: false, details: 'Book biopsy to confirm diagnosis' },
            { id: 4, task: 'Collect Pathology Report', completed: false, details: 'Get detailed pathology results' },
            { id: 5, task: 'Consult Oncologist', completed: false, details: 'Discuss diagnosis and treatment options' },
            { id: 6, task: 'Staging Tests (CT/MRI/PET)', completed: false, details: 'Determine cancer stage' }
        ],
        lung: [
            { id: 1, task: 'LDCT Scan', completed: false, details: 'Low-dose CT scan of chest' },
            { id: 2, task: 'PET-CT Scan', completed: false, details: 'Detailed imaging for staging' },
            { id: 3, task: 'Bronchoscopy & Biopsy', completed: false, details: 'Tissue sample collection' },
            { id: 4, task: 'Molecular Testing', completed: false, details: 'Test for genetic mutations (EGFR, ALK)' },
            { id: 5, task: 'Pulmonary Function Test', completed: false, details: 'Assess lung capacity' },
            { id: 6, task: 'Oncologist Consultation', completed: false, details: 'Discuss treatment plan' }
        ],
        colorectal: [
            { id: 1, task: 'Colonoscopy', completed: false, details: 'Visual examination of colon' },
            { id: 2, task: 'Biopsy During Colonoscopy', completed: false, details: 'Tissue sample collection' },
            { id: 3, task: 'CT Scan (Abdomen & Pelvis)', completed: false, details: 'Check for spread' },
            { id: 4, task: 'CEA Blood Test', completed: false, details: 'Tumor marker test' },
            { id: 5, task: 'Pathology Report Review', completed: false, details: 'Confirm diagnosis and stage' },
            { id: 6, task: 'Surgical Oncologist Consult', completed: false, details: 'Plan treatment approach' }
        ],
        cervical: [
            { id: 1, task: 'Pap Smear', completed: false, details: 'Screening test for abnormal cells' },
            { id: 2, task: 'HPV Test', completed: false, details: 'Test for HPV infection' },
            { id: 3, task: 'Colposcopy', completed: false, details: 'Detailed examination of cervix' },
            { id: 4, task: 'Biopsy', completed: false, details: 'Tissue sample for confirmation' },
            { id: 5, task: 'MRI Pelvis', completed: false, details: 'Staging and treatment planning' },
            { id: 6, task: 'Gynecologic Oncologist Consult', completed: false, details: 'Discuss treatment options' }
        ],
        oral: [
            { id: 1, task: 'Oral Examination', completed: false, details: 'Visual inspection by dentist/doctor' },
            { id: 2, task: 'Biopsy of Lesion', completed: false, details: 'Tissue sample from suspicious area' },
            { id: 3, task: 'CT/MRI Scan', completed: false, details: 'Check extent of tumor' },
            { id: 4, task: 'Chest X-ray', completed: false, details: 'Rule out lung metastasis' },
            { id: 5, task: 'Dental Clearance', completed: false, details: 'Pre-treatment dental work' },
            { id: 6, task: 'Head & Neck Surgeon Consult', completed: false, details: 'Plan surgery/radiation' }
        ]
    })

    const cancerTypes = [
        { id: 'breast', name: 'Breast Cancer', icon: '🎀' },
        { id: 'lung', name: 'Lung Cancer', icon: '🫁' },
        { id: 'colorectal', name: 'Colorectal Cancer', icon: '🩺' },
        { id: 'cervical', name: 'Cervical Cancer', icon: '💉' },
        { id: 'oral', name: 'Oral Cancer', icon: '👄' }
    ]

    const toggleTask = (taskId: number) => {
        setChecklist(prev => ({
            ...prev,
            [selectedCancer]: prev[selectedCancer].map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        }))
    }

    const currentChecklist = checklist[selectedCancer as keyof typeof checklist]
    const completedCount = currentChecklist.filter(t => t.completed).length
    const progress = (completedCount / currentChecklist.length) * 100

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-12">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold mb-2">Diagnosis Navigation</h1>
                    <p className="text-xl opacity-90">Step-by-step guidance for getting diagnosed</p>
                </div>
            </div>

            <div className="container-custom py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cancer Type Selector */}
                    <div className="lg:col-span-1">
                        <div className="card sticky top-4">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Select Cancer Type</h2>
                            <div className="space-y-2">
                                {cancerTypes.map(cancer => (
                                    <button
                                        key={cancer.id}
                                        onClick={() => setSelectedCancer(cancer.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center space-x-3 ${selectedCancer === cancer.id
                                                ? 'bg-indigo-600 text-white shadow-lg'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        <span className="text-2xl">{cancer.icon}</span>
                                        <span className="font-semibold">{cancer.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Checklist */}
                    <div className="lg:col-span-2">
                        <div className="card mb-6">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        {cancerTypes.find(c => c.id === selectedCancer)?.name} Diagnostic Checklist
                                    </h2>
                                    <p className="text-gray-600 mt-1">
                                        {completedCount} of {currentChecklist.length} steps completed
                                    </p>
                                </div>
                                <button className="btn-secondary flex items-center space-x-2">
                                    <Download className="w-5 h-5" />
                                    <span>Download</span>
                                </button>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-gray-700">Progress</span>
                                    <span className="text-sm font-medium text-indigo-600">{Math.round(progress)}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div
                                        className="bg-indigo-600 h-3 rounded-full transition-all duration-500"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>

                            {/* Checklist Items */}
                            <div className="space-y-4">
                                {currentChecklist.map((task, index) => (
                                    <div
                                        key={task.id}
                                        className={`border-2 rounded-lg p-4 transition-all cursor-pointer ${task.completed
                                                ? 'border-green-500 bg-green-50'
                                                : 'border-gray-200 hover:border-indigo-300 bg-white'
                                            }`}
                                        onClick={() => toggleTask(task.id)}
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 mt-1">
                                                {task.completed ? (
                                                    <CheckSquare className="w-6 h-6 text-green-600" />
                                                ) : (
                                                    <Square className="w-6 h-6 text-gray-400" />
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-sm">
                                                        {index + 1}
                                                    </div>
                                                    <h3 className={`text-lg font-semibold ${task.completed ? 'text-green-700 line-through' : 'text-gray-900'}`}>
                                                        {task.task}
                                                    </h3>
                                                </div>
                                                <p className="text-sm text-gray-600 ml-11">{task.details}</p>
                                            </div>
                                            <ChevronRight className={`w-5 h-5 ${task.completed ? 'text-green-600' : 'text-gray-400'}`} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Next Steps */}
                        <div className="card bg-blue-50 border-2 border-blue-200">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">💡 Tips for Faster Diagnosis</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs">✓</span>
                                    </div>
                                    <div className="text-sm text-blue-800">
                                        <strong>Book all tests together:</strong> Many diagnostic centers offer packages that include multiple tests
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs">✓</span>
                                    </div>
                                    <div className="text-sm text-blue-800">
                                        <strong>Keep all reports organized:</strong> Upload them to your ICARE document vault for easy access
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs">✓</span>
                                    </div>
                                    <div className="text-sm text-blue-800">
                                        <strong>Contact your case manager:</strong> They can help coordinate appointments and follow up on reports
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs">✓</span>
                                    </div>
                                    <div className="text-sm text-blue-800">
                                        <strong>Target timeline:</strong> Complete diagnosis within 30-45 days from first test
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
