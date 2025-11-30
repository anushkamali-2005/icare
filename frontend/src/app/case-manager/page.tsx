'use client'

import { Users, CheckCircle2, Clock, MessageCircle, FileText, TrendingUp } from 'lucide-react'

const patients = [
    { id: 1, name: 'Rajesh Kumar', caseId: 'ICARE-PT-123456', status: 'Active', priority: 'High', lastContact: '2 hours ago' },
    { id: 2, name: 'Priya Sharma', caseId: 'ICARE-PT-123457', status: 'Active', priority: 'Medium', lastContact: '1 day ago' },
    { id: 3, name: 'Amit Patel', caseId: 'ICARE-PT-123458', status: 'Active', priority: 'Low', lastContact: '3 days ago' },
]

export default function CaseManagerDashboard() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-12">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold mb-2">Case Manager Dashboard</h1>
                    <p className="text-xl opacity-90">Manage your patient caseload</p>
                </div>
            </div>

            <div className="container-custom py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="card bg-gradient-to-br from-blue-50 to-blue-100">
                        <div className="text-3xl font-bold text-blue-700">24</div>
                        <div className="text-sm text-gray-600 mt-1">Active Patients</div>
                    </div>
                    <div className="card bg-gradient-to-br from-green-50 to-green-100">
                        <div className="text-3xl font-bold text-green-700">8</div>
                        <div className="text-sm text-gray-600 mt-1">Pending Tasks</div>
                    </div>
                    <div className="card bg-gradient-to-br from-yellow-50 to-yellow-100">
                        <div className="text-3xl font-bold text-yellow-700">12</div>
                        <div className="text-sm text-gray-600 mt-1">Documents to Verify</div>
                    </div>
                    <div className="card bg-gradient-to-br from-purple-50 to-purple-100">
                        <div className="text-3xl font-bold text-purple-700">5</div>
                        <div className="text-sm text-gray-600 mt-1">New Messages</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Patient Caseload */}
                    <div className="lg:col-span-2">
                        <div className="card">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">My Patients</h2>
                                <select className="px-4 py-2 border rounded-lg">
                                    <option>All Patients</option>
                                    <option>High Priority</option>
                                    <option>Needs Attention</option>
                                </select>
                            </div>

                            <div className="space-y-4">
                                {patients.map(patient => (
                                    <div key={patient.id} className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary-400 transition-all cursor-pointer">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900">{patient.name}</h3>
                                                <p className="text-sm text-gray-600">{patient.caseId}</p>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${patient.priority === 'High' ? 'bg-red-100 text-red-700' :
                                                        patient.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                                            'bg-green-100 text-green-700'
                                                    }`}>
                                                    {patient.priority}
                                                </span>
                                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                                                    {patient.status}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between text-sm text-gray-600">
                                            <span>Last contact: {patient.lastContact}</span>
                                            <div className="flex space-x-2">
                                                <button className="p-2 hover:bg-primary-50 rounded-lg transition-colors">
                                                    <MessageCircle className="w-4 h-4 text-primary-600" />
                                                </button>
                                                <button className="p-2 hover:bg-primary-50 rounded-lg transition-colors">
                                                    <FileText className="w-4 h-4 text-primary-600" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Tasks & Messages */}
                    <div className="space-y-6">
                        <div className="card">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Pending Tasks</h3>
                            <div className="space-y-3">
                                {[
                                    { task: 'Verify PM-JAY documents', patient: 'Rajesh Kumar', due: 'Today' },
                                    { task: 'Follow up on NGO application', patient: 'Priya Sharma', due: 'Tomorrow' },
                                    { task: 'Schedule counselling', patient: 'Amit Patel', due: '2 days' },
                                ].map((item, i) => (
                                    <div key={i} className="border-l-4 border-primary-500 pl-3 py-2">
                                        <div className="font-semibold text-sm text-gray-900">{item.task}</div>
                                        <div className="text-xs text-gray-600">{item.patient} • Due: {item.due}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Messages</h3>
                            <div className="space-y-3">
                                {[
                                    { from: 'Rajesh Kumar', message: 'When will my funding be approved?', time: '10 min ago' },
                                    { from: 'Priya Sharma', message: 'Thank you for your help!', time: '2 hours ago' },
                                ].map((msg, i) => (
                                    <div key={i} className="p-3 bg-gray-50 rounded-lg">
                                        <div className="font-semibold text-sm text-gray-900">{msg.from}</div>
                                        <div className="text-xs text-gray-600 mt-1">{msg.message}</div>
                                        <div className="text-xs text-gray-400 mt-1">{msg.time}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
