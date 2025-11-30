import { Phone, Mail, MessageCircle, Calendar } from 'lucide-react'

export default function CaseManagerCard() {
    const caseManager = {
        name: 'Meera Patel',
        photo: null,
        phone: '+91 98765 43210',
        email: 'meera.patel@icare.in',
        availableHours: '9 AM - 6 PM',
    }

    return (
        <div className="card bg-gradient-to-br from-primary-50 to-secondary-50">
            <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-sm font-semibold text-gray-700">Your Case Manager</h3>
            </div>

            <div className="flex items-start space-x-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">
                        {caseManager.name.split(' ').map(n => n[0]).join('')}
                    </span>
                </div>
                <div>
                    <h4 className="font-bold text-gray-900">{caseManager.name}</h4>
                    <p className="text-xs text-gray-600 mt-1">Available: {caseManager.availableHours}</p>
                </div>
            </div>

            <div className="space-y-2 mb-4">
                <a href={`tel:${caseManager.phone}`} className="flex items-center space-x-2 text-sm text-gray-700 hover:text-primary-600 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>{caseManager.phone}</span>
                </a>
                <a href={`mailto:${caseManager.email}`} className="flex items-center space-x-2 text-sm text-gray-700 hover:text-primary-600 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{caseManager.email}</span>
                </a>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center space-x-1 bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-lg text-xs font-semibold transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat</span>
                </button>
                <button className="flex items-center justify-center space-x-1 bg-white hover:bg-gray-50 text-primary-600 px-3 py-2 rounded-lg text-xs font-semibold border-2 border-primary-600 transition-colors">
                    <Calendar className="w-4 h-4" />
                    <span>Schedule</span>
                </button>
            </div>
        </div>
    )
}
