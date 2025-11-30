'use client'

import { Users, TrendingUp, DollarSign, FileText, Activity, Settings } from 'lucide-react'

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
                    <p className="text-xl opacity-90">System-wide analytics and management</p>
                </div>
            </div>

            <div className="container-custom py-8">
                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="card bg-gradient-to-br from-blue-50 to-blue-100">
                        <Users className="w-10 h-10 text-blue-600 mb-3" />
                        <div className="text-3xl font-bold text-blue-700">15,678</div>
                        <div className="text-sm text-gray-600 mt-1">Total Patients</div>
                        <div className="text-xs text-green-600 mt-2">+12% this month</div>
                    </div>
                    <div className="card bg-gradient-to-br from-green-50 to-green-100">
                        <DollarSign className="w-10 h-10 text-green-600 mb-3" />
                        <div className="text-3xl font-bold text-green-700">₹2,400Cr</div>
                        <div className="text-sm text-gray-600 mt-1">Funding Secured</div>
                        <div className="text-xs text-green-600 mt-2">+8% this month</div>
                    </div>
                    <div className="card bg-gradient-to-br from-purple-50 to-purple-100">
                        <FileText className="w-10 h-10 text-purple-600 mb-3" />
                        <div className="text-3xl font-bold text-purple-700">1,234</div>
                        <div className="text-sm text-gray-600 mt-1">Active Applications</div>
                        <div className="text-xs text-yellow-600 mt-2">456 pending</div>
                    </div>
                    <div className="card bg-gradient-to-br from-orange-50 to-orange-100">
                        <Activity className="w-10 h-10 text-orange-600 mb-3" />
                        <div className="text-3xl font-bold text-orange-700">95%</div>
                        <div className="text-sm text-gray-600 mt-1">System Uptime</div>
                        <div className="text-xs text-green-600 mt-2">All systems operational</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* User Management */}
                    <div className="card">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">User Management</h2>
                        <div className="space-y-3">
                            {[
                                { role: 'Patients', count: 15678, color: 'blue' },
                                { role: 'Case Managers', count: 45, color: 'green' },
                                { role: 'Hospitals', count: 203, color: 'purple' },
                                { role: 'NGO Partners', count: 52, color: 'pink' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="font-semibold text-gray-900">{item.role}</span>
                                    <span className={`text-${item.color}-600 font-bold`}>{item.count.toLocaleString()}</span>
                                </div>
                            ))}
                        </div>
                        <button className="btn-primary w-full mt-4">Manage Users</button>
                    </div>

                    {/* Partner Management */}
                    <div className="card">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Partner Management</h2>
                        <div className="space-y-3">
                            {[
                                { name: 'Cancer Aid Foundation', type: 'NGO', status: 'Active' },
                                { name: 'Tata Memorial Hospital', type: 'Hospital', status: 'Active' },
                                { name: 'HDFC Medical Loans', type: 'NBFC', status: 'Active' },
                            ].map((partner, i) => (
                                <div key={i} className="border rounded-lg p-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="font-semibold text-gray-900">{partner.name}</div>
                                            <div className="text-xs text-gray-600">{partner.type}</div>
                                        </div>
                                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                                            {partner.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="btn-primary w-full mt-4">Manage Partners</button>
                    </div>

                    {/* System Settings */}
                    <div className="card">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">System Settings</h2>
                        <div className="space-y-3">
                            {[
                                'API Configuration',
                                'Email Templates',
                                'Notification Settings',
                                'Security Settings',
                                'Backup & Recovery',
                            ].map((setting, i) => (
                                <button key={i} className="w-full text-left p-3 border rounded-lg hover:border-primary-400 hover:bg-primary-50 transition-all">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-700">{setting}</span>
                                        <Settings className="w-4 h-4 text-gray-400" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Reports */}
                    <div className="card">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Reports & Analytics</h2>
                        <div className="space-y-3">
                            {[
                                { name: 'Monthly Performance Report', date: 'Nov 2024' },
                                { name: 'Funding Analytics', date: 'Last 30 days' },
                                { name: 'User Activity Report', date: 'This week' },
                            ].map((report, i) => (
                                <div key={i} className="border rounded-lg p-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="font-semibold text-gray-900">{report.name}</div>
                                            <div className="text-xs text-gray-600">{report.date}</div>
                                        </div>
                                        <button className="text-primary-600 hover:underline text-sm font-semibold">
                                            Download
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="btn-secondary w-full mt-4">Generate Custom Report</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
