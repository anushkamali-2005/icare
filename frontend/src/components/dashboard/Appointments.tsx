import { Calendar, MapPin, Clock, Video, Plus } from 'lucide-react'

export default function Appointments() {
    const appointments = [
        {
            id: 1,
            title: 'Oncologist Consultation',
            doctor: 'Dr. Sharma',
            hospital: 'Apollo Hospital, Delhi',
            date: '5 Dec 2024',
            time: '10:00 AM',
            type: 'in-person',
            status: 'upcoming',
        },
        {
            id: 2,
            title: 'Chemotherapy Session 1',
            doctor: 'Dr. Verma',
            hospital: 'Tata Memorial Hospital',
            date: '12 Dec 2024',
            time: '9:00 AM',
            type: 'in-person',
            status: 'upcoming',
        },
        {
            id: 3,
            title: 'Counselling Session',
            doctor: 'Ms. Priya (Psychologist)',
            hospital: 'Online',
            date: '8 Dec 2024',
            time: '4:00 PM',
            type: 'online',
            status: 'upcoming',
        },
    ]

    return (
        <div className="card">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Upcoming Appointments</h2>
                <button className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-medium text-sm">
                    <Plus className="w-4 h-4" />
                    <span>Book New</span>
                </button>
            </div>

            <div className="space-y-4">
                {appointments.map((appointment) => (
                    <div
                        key={appointment.id}
                        className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:shadow-md transition-all"
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h3 className="font-semibold text-gray-900">{appointment.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">{appointment.doctor}</p>
                            </div>
                            {appointment.type === 'online' ? (
                                <div className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                                    <Video className="w-3 h-3" />
                                    <span>Online</span>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                                    <MapPin className="w-3 h-3" />
                                    <span>In-person</span>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{appointment.time}</span>
                            </div>
                        </div>

                        {appointment.type === 'in-person' && (
                            <div className="flex items-center space-x-1 text-sm text-gray-500 mt-2">
                                <MapPin className="w-4 h-4" />
                                <span>{appointment.hospital}</span>
                            </div>
                        )}

                        <div className="flex space-x-2 mt-4">
                            {appointment.type === 'online' && (
                                <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                                    Join Video Call
                                </button>
                            )}
                            <button className="flex-1 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold border border-gray-300 transition-colors">
                                Reschedule
                            </button>
                            <button className="flex-1 bg-white hover:bg-gray-50 text-red-600 px-4 py-2 rounded-lg text-sm font-semibold border border-gray-300 transition-colors">
                                Cancel
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full mt-4 text-sm text-primary-600 hover:underline font-medium">
                View All Appointments →
            </button>
        </div>
    )
}
