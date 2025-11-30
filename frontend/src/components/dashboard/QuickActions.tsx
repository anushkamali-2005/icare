import { FileText, Upload, MessageSquare, DollarSign, Calendar, Hospital } from 'lucide-react'
import Link from 'next/link'

const actions = [
    {
        icon: Upload,
        label: 'Upload Documents',
        href: '/documents/upload',
        color: 'from-blue-500 to-blue-600',
    },
    {
        icon: DollarSign,
        label: 'Apply for Funding',
        href: '/financial-assistance',
        color: 'from-green-500 to-green-600',
    },
    {
        icon: Calendar,
        label: 'Book Appointment',
        href: '/appointments/book',
        color: 'from-purple-500 to-purple-600',
    },
    {
        icon: MessageSquare,
        label: 'Counselling',
        href: '/counselling',
        color: 'from-pink-500 to-pink-600',
    },
    {
        icon: Hospital,
        label: 'Find Hospital',
        href: '/hospital-finder',
        color: 'from-orange-500 to-orange-600',
    },
    {
        icon: FileText,
        label: 'View Reports',
        href: '/documents',
        color: 'from-indigo-500 to-indigo-600',
    },
]

export default function QuickActions() {
    return (
        <div className="card">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
                {actions.map((action, index) => {
                    const Icon = action.icon
                    return (
                        <Link
                            key={index}
                            href={action.href}
                            className="group flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:shadow-md transition-all"
                        >
                            <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                                <Icon className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xs font-medium text-gray-700 text-center group-hover:text-primary-600 transition-colors">
                                {action.label}
                            </span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
