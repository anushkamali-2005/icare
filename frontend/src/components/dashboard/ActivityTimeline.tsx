import { CheckCircle2, Clock, AlertCircle, MessageSquare, FileText, DollarSign } from 'lucide-react'

export default function ActivityTimeline() {
    const activities = [
        {
            id: 1,
            type: 'success',
            icon: CheckCircle2,
            title: 'NGO Grant Approved',
            description: 'Cancer Aid Foundation approved ₹2L grant',
            time: '2 hours ago',
            color: 'green',
        },
        {
            id: 2,
            type: 'message',
            icon: MessageSquare,
            title: 'Message from Case Manager',
            description: 'Meera sent you a message about next steps',
            time: '5 hours ago',
            color: 'blue',
        },
        {
            id: 3,
            type: 'document',
            icon: FileText,
            title: 'Document Uploaded',
            description: 'You uploaded Biopsy Report',
            time: '1 day ago',
            color: 'purple',
        },
        {
            id: 4,
            type: 'pending',
            icon: Clock,
            title: 'Application Under Review',
            description: 'CSR adoption application is being reviewed',
            time: '2 days ago',
            color: 'yellow',
        },
        {
            id: 5,
            type: 'success',
            icon: CheckCircle2,
            title: 'PM-JAY Verified',
            description: 'Your PM-JAY card has been verified',
            time: '3 days ago',
            color: 'green',
        },
        {
            id: 6,
            type: 'financial',
            icon: DollarSign,
            title: 'Cost Estimate Received',
            description: 'Hospital submitted treatment cost estimate',
            time: '4 days ago',
            color: 'orange',
        },
    ]

    const colorMap = {
        green: 'bg-green-100 text-green-600',
        blue: 'bg-blue-100 text-blue-600',
        purple: 'bg-purple-100 text-purple-600',
        yellow: 'bg-yellow-100 text-yellow-600',
        orange: 'bg-orange-100 text-orange-600',
    }

    return (
        <div className="card sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Activity Timeline</h2>

            <div className="space-y-4">
                {activities.map((activity, index) => {
                    const Icon = activity.icon
                    return (
                        <div key={activity.id} className="relative">
                            {/* Timeline Line */}
                            {index < activities.length - 1 && (
                                <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gray-200"></div>
                            )}

                            <div className="flex items-start space-x-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${colorMap[activity.color as keyof typeof colorMap]}`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-gray-900 text-sm">{activity.title}</h3>
                                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">{activity.description}</p>
                                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <button className="w-full mt-6 text-sm text-primary-600 hover:underline font-medium">
                View Full History →
            </button>
        </div>
    )
}
