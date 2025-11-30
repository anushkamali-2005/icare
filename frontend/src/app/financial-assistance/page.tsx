import Link from 'next/link'
import { DollarSign, TrendingUp, CheckCircle2, ArrowRight, Shield, Users, Building2, Heart, Coins, CreditCard } from 'lucide-react'

const fundingSources = [
    {
        icon: Shield,
        name: 'PM-JAY (Ayushman Bharat)',
        description: 'Government health insurance covering up to ₹5 lakh',
        maxAmount: '₹5,00,000',
        eligibility: 'BPL families with PM-JAY card',
        approvalTime: '2-3 days',
        color: 'from-green-500 to-green-600',
        href: '/financial-assistance/pmjay',
    },
    {
        icon: Heart,
        name: 'NGO Grants',
        description: 'Non-repayable grants from 50+ partner NGOs',
        maxAmount: '₹3,00,000',
        eligibility: 'Based on income and cancer type',
        approvalTime: '5-7 days',
        color: 'from-pink-500 to-pink-600',
        href: '/financial-assistance/ngo',
    },
    {
        icon: CreditCard,
        name: 'NBFC Medical Loans',
        description: 'Low-interest loans from partner NBFCs',
        maxAmount: '₹10,00,000',
        eligibility: 'CIBIL score 650+',
        approvalTime: '3-5 days',
        color: 'from-blue-500 to-blue-600',
        href: '/financial-assistance/nbfc',
    },
    {
        icon: Building2,
        name: 'CSR Adopt-a-Patient',
        description: 'Corporate funding for individual patients',
        maxAmount: '₹5,00,000',
        eligibility: 'All patients',
        approvalTime: '7-14 days',
        color: 'from-purple-500 to-purple-600',
        href: '/financial-assistance/csr',
    },
    {
        icon: Users,
        name: 'Crowdfunding',
        description: 'Raise funds from community support',
        maxAmount: 'Unlimited',
        eligibility: 'All patients',
        approvalTime: 'Immediate',
        color: 'from-orange-500 to-orange-600',
        href: '/financial-assistance/crowdfunding',
    },
    {
        icon: Coins,
        name: 'Insurance Claims',
        description: 'Process health insurance claims',
        maxAmount: 'As per policy',
        eligibility: 'Insured patients',
        approvalTime: '10-15 days',
        color: 'from-indigo-500 to-indigo-600',
        href: '/financial-assistance/insurance',
    },
]

export default function FinancialAssistancePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Financial Assistance</h1>
                        <p className="text-xl opacity-90 mb-6">
                            Access funding from 6 different sources to minimize your out-of-pocket expenses
                        </p>
                        <div className="flex items-center space-x-6 text-sm">
                            <div className="flex items-center space-x-2">
                                <CheckCircle2 className="w-5 h-5" />
                                <span>95% Average Coverage</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle2 className="w-5 h-5" />
                                <span>AI-Powered Matching</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle2 className="w-5 h-5" />
                                <span>Full Transparency</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="card bg-gradient-to-br from-green-50 to-green-100">
                        <div className="text-3xl font-bold text-green-700">₹2,400Cr+</div>
                        <div className="text-sm text-gray-600 mt-1">Total Funding Secured</div>
                    </div>
                    <div className="card bg-gradient-to-br from-blue-50 to-blue-100">
                        <div className="text-3xl font-bold text-blue-700">15.6L+</div>
                        <div className="text-sm text-gray-600 mt-1">Patients Helped</div>
                    </div>
                    <div className="card bg-gradient-to-br from-purple-50 to-purple-100">
                        <div className="text-3xl font-bold text-purple-700">6</div>
                        <div className="text-sm text-gray-600 mt-1">Funding Sources</div>
                    </div>
                    <div className="card bg-gradient-to-br from-orange-50 to-orange-100">
                        <div className="text-3xl font-bold text-orange-700">95%</div>
                        <div className="text-sm text-gray-600 mt-1">Avg. Coverage</div>
                    </div>
                </div>

                {/* How It Works */}
                <div className="card mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Upload Cost Estimate', desc: 'Get hospital treatment estimate' },
                            { step: '2', title: 'Check Eligibility', desc: 'AI checks all 6 sources' },
                            { step: '3', title: 'Apply Simultaneously', desc: 'One-click multi-source application' },
                            { step: '4', title: 'Get Funded', desc: 'Direct disbursement to hospital' },
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                                    {item.step}
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Funding Sources */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Funding Sources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {fundingSources.map((source, index) => {
                            const Icon = source.icon
                            return (
                                <Link key={index} href={source.href}>
                                    <div className="card hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${source.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                            {source.name}
                                        </h3>

                                        <p className="text-sm text-gray-600 mb-4">{source.description}</p>

                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Max Amount:</span>
                                                <span className="font-semibold text-gray-900">{source.maxAmount}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Approval Time:</span>
                                                <span className="font-semibold text-gray-900">{source.approvalTime}</span>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-4 border-t border-gray-200">
                                            <p className="text-xs text-gray-500 mb-3">Eligibility: {source.eligibility}</p>
                                            <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                                                <span>Learn More</span>
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                        Our AI-powered system will check your eligibility across all 6 funding sources and maximize your coverage
                    </p>
                    <Link href="/financial-assistance/apply">
                        <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                            Start Application
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
