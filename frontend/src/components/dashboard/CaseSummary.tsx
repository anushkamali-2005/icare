import { AlertCircle, CheckCircle2, Clock, TrendingUp } from 'lucide-react'

export default function CaseSummary() {
    const caseData = {
        caseId: 'ICARE-PT-123456',
        status: 'Active',
        stage: 'Treatment Planning',
        cancerType: 'Breast Cancer',
        diagnosisDate: '15 Oct 2024',
        daysInCare: 45,
        completionPercentage: 65,
    }

    return (
        <div className="card">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Case Summary</h2>
                    <p className="text-sm text-gray-600 mt-1">Case ID: {caseData.caseId}</p>
                </div>
                <div className="flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold">{caseData.status}</span>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">{caseData.daysInCare}</div>
                    <div className="text-xs text-gray-600 mt-1">Days in Care</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-700">{caseData.completionPercentage}%</div>
                    <div className="text-xs text-gray-600 mt-1">Journey Complete</div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-lg">
                    <div className="text-sm font-bold text-pink-700">{caseData.cancerType}</div>
                    <div className="text-xs text-gray-600 mt-1">Diagnosis</div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                    <div className="text-sm font-bold text-orange-700">{caseData.stage}</div>
                    <div className="text-xs text-gray-600 mt-1">Current Stage</div>
                </div>
            </div>

            <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 text-sm">Current Milestones</h3>

                <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Initial Consultation Completed</p>
                        <p className="text-xs text-gray-500">Completed on 15 Oct 2024</p>
                    </div>
                </div>

                <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Diagnostic Tests Done</p>
                        <p className="text-xs text-gray-500">Completed on 22 Oct 2024</p>
                    </div>
                </div>

                <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Treatment Plan Approval Pending</p>
                        <p className="text-xs text-gray-500">In progress</p>
                    </div>
                </div>

                <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <p className="text-sm font-medium text-gray-400">Treatment Start</p>
                        <p className="text-xs text-gray-400">Upcoming</p>
                    </div>
                </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span>On track with treatment plan</span>
                    </div>
                    <button className="text-sm text-primary-600 hover:underline font-medium">
                        View Full Timeline →
                    </button>
                </div>
            </div>
        </div>
    )
}
