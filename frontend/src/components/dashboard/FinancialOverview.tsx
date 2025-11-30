import { DollarSign, TrendingUp, CheckCircle2, Clock, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function FinancialOverview() {
    const financialData = {
        totalEstimate: 850000,
        fundingSecured: 680000,
        pendingApplications: 120000,
        outOfPocket: 50000,
        sources: [
            { name: 'PM-JAY', amount: 300000, status: 'approved', color: 'green' },
            { name: 'NGO Grant', amount: 200000, status: 'approved', color: 'green' },
            { name: 'NBFC Loan', amount: 180000, status: 'approved', color: 'green' },
            { name: 'CSR Adoption', amount: 120000, status: 'pending', color: 'yellow' },
            { name: 'Crowdfunding', amount: 50000, status: 'in-progress', color: 'blue' },
        ],
    }

    const coveragePercentage = Math.round((financialData.fundingSecured / financialData.totalEstimate) * 100)

    return (
        <div className="card">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Financial Overview</h2>
                <Link href="/financial-assistance" className="text-sm text-primary-600 hover:underline font-medium">
                    View Details →
                </Link>
            </div>

            {/* Total Estimate */}
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl p-6 text-white mb-6">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <p className="text-sm opacity-90">Total Treatment Cost</p>
                        <p className="text-3xl font-bold mt-1">₹{(financialData.totalEstimate / 100000).toFixed(1)}L</p>
                    </div>
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <DollarSign className="w-8 h-8" />
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-white bg-opacity-20 rounded-full h-3">
                        <div
                            className="bg-white rounded-full h-3 transition-all duration-500"
                            style={{ width: `${coveragePercentage}%` }}
                        ></div>
                    </div>
                    <span className="text-sm font-semibold">{coveragePercentage}%</span>
                </div>
                <p className="text-xs opacity-75 mt-2">Funding coverage secured</p>
            </div>

            {/* Breakdown */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-xl font-bold text-green-700">₹{(financialData.fundingSecured / 100000).toFixed(1)}L</div>
                    <div className="text-xs text-gray-600 mt-1">Secured</div>
                </div>

                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <div className="text-xl font-bold text-yellow-700">₹{(financialData.pendingApplications / 100000).toFixed(1)}L</div>
                    <div className="text-xs text-gray-600 mt-1">Pending</div>
                </div>

                <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-xl font-bold text-orange-700">₹{(financialData.outOfPocket / 1000).toFixed(0)}K</div>
                    <div className="text-xs text-gray-600 mt-1">Out-of-Pocket</div>
                </div>
            </div>

            {/* Funding Sources */}
            <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 text-sm">Funding Sources</h3>

                {financialData.sources.map((source, index) => {
                    const StatusIcon = source.status === 'approved' ? CheckCircle2 : source.status === 'pending' ? Clock : TrendingUp
                    const statusColor = source.status === 'approved' ? 'text-green-500' : source.status === 'pending' ? 'text-yellow-500' : 'text-blue-500'

                    return (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                                <StatusIcon className={`w-5 h-5 ${statusColor}`} />
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{source.name}</p>
                                    <p className="text-xs text-gray-500 capitalize">{source.status.replace('-', ' ')}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-bold text-gray-900">₹{(source.amount / 1000).toFixed(0)}K</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* CTA */}
            <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg mb-3">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>You can reduce out-of-pocket to ₹0 by applying for additional funding</span>
                </div>
                <Link href="/financial-assistance/apply">
                    <button className="w-full btn-primary">
                        Apply for More Funding
                    </button>
                </Link>
            </div>
        </div>
    )
}
