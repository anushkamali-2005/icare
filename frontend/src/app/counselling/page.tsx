'use client'

import { useState } from 'react'
import { Calendar, Video, User, Clock, CheckCircle2, MessageCircle } from 'lucide-react'

const counsellors = [
    {
        id: 1,
        name: 'Dr. Priya Sharma',
        specialization: 'Psycho-Oncologist',
        experience: '12 years',
        photo: null,
        rating: 4.9,
        sessions: 450,
        languages: ['English', 'Hindi'],
        availability: ['Mon', 'Wed', 'Fri'],
    },
    {
        id: 2,
        name: 'Ms. Anjali Verma',
        specialization: 'Nutrition Counsellor',
        experience: '8 years',
        photo: null,
        rating: 4.8,
        sessions: 320,
        languages: ['English', 'Hindi', 'Marathi'],
        availability: ['Tue', 'Thu', 'Sat'],
    },
    {
        id: 3,
        name: 'Dr. Rajesh Kumar',
        specialization: 'Rehabilitation Specialist',
        experience: '15 years',
        photo: null,
        rating: 4.9,
        sessions: 520,
        languages: ['English', 'Hindi', 'Tamil'],
        availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    },
]

export default function CounsellingPage() {
    const [selectedType, setSelectedType] = useState('')
    const [showBooking, setShowBooking] = useState(false)
    const [selectedCounsellor, setSelectedCounsellor] = useState<any>(null)

    const handleBookSession = (counsellor: any) => {
        setSelectedCounsellor(counsellor)
        setShowBooking(true)
    }

    if (showBooking && selectedCounsellor) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16">
                    <div className="container-custom">
                        <h1 className="text-4xl font-bold mb-4">Book Counselling Session</h1>
                        <p className="text-xl opacity-90">with {selectedCounsellor.name}</p>
                    </div>
                </div>

                <div className="container-custom py-12">
                    <div className="max-w-3xl mx-auto">
                        <div className="card">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Date & Time</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                                    <input
                                        type="date"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none">
                                        <option>10:00 AM</option>
                                        <option>11:00 AM</option>
                                        <option>2:00 PM</option>
                                        <option>3:00 PM</option>
                                        <option>4:00 PM</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Session Type</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <label className="flex items-center space-x-3 p-4 border-2 border-primary-500 bg-primary-50 rounded-lg cursor-pointer">
                                        <input type="radio" name="sessionType" className="w-5 h-5 text-primary-600" defaultChecked />
                                        <div>
                                            <div className="font-semibold text-gray-900">Video Call</div>
                                            <div className="text-xs text-gray-500">Online session</div>
                                        </div>
                                    </label>
                                    <label className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer">
                                        <input type="radio" name="sessionType" className="w-5 h-5 text-primary-600" />
                                        <div>
                                            <div className="font-semibold text-gray-900">In-Person</div>
                                            <div className="text-xs text-gray-500">At clinic</div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Brief Description (Optional)</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us what you'd like to discuss..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none resize-none"
                                />
                            </div>

                            <div className="flex space-x-4">
                                <button onClick={() => setShowBooking(false)} className="btn-secondary flex-1">
                                    Back
                                </button>
                                <button className="btn-primary flex-1">Confirm Booking</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Counselling & Support</h1>
                    <p className="text-xl opacity-90">
                        Professional psychological, nutritional, and rehabilitation support
                    </p>
                </div>
            </div>

            <div className="container-custom py-12">
                {/* Service Types */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        {
                            type: 'psycho',
                            title: 'Psycho-Oncology',
                            description: 'Emotional and psychological support during cancer journey',
                            icon: MessageCircle,
                        },
                        {
                            type: 'nutrition',
                            title: 'Nutrition Counselling',
                            description: 'Diet plans and nutritional guidance for cancer patients',
                            icon: User,
                        },
                        {
                            type: 'rehab',
                            title: 'Rehabilitation',
                            description: 'Physical therapy and post-treatment rehabilitation',
                            icon: CheckCircle2,
                        },
                    ].map((service) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={service.type}
                                onClick={() => setSelectedType(service.type)}
                                className={`card cursor-pointer transition-all ${selectedType === service.type ? 'border-2 border-primary-500 bg-primary-50' : 'hover:shadow-xl'
                                    }`}
                            >
                                <Icon className="w-12 h-12 text-primary-600 mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        )
                    })}
                </div>

                {/* Counsellors */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Counsellors</h2>
                    <div className="space-y-6">
                        {counsellors.map((counsellor) => (
                            <div key={counsellor.id} className="card hover:shadow-xl transition-all">
                                <div className="flex items-start space-x-6">
                                    <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white font-bold text-3xl">
                                            {counsellor.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900">{counsellor.name}</h3>
                                                <p className="text-primary-600 font-semibold">{counsellor.specialization}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="flex items-center space-x-1 text-yellow-500 mb-1">
                                                    <span className="text-2xl font-bold">{counsellor.rating}</span>
                                                    <span className="text-xl">★</span>
                                                </div>
                                                <div className="text-xs text-gray-500">{counsellor.sessions} sessions</div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div className="flex items-center space-x-2 text-gray-600">
                                                <Clock className="w-4 h-4" />
                                                <span className="text-sm">{counsellor.experience} experience</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-gray-600">
                                                <MessageCircle className="w-4 h-4" />
                                                <span className="text-sm">{counsellor.languages.join(', ')}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-gray-600">
                                                <Calendar className="w-4 h-4" />
                                                <span className="text-sm">{counsellor.availability.join(', ')}</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => handleBookSession(counsellor)}
                                            className="btn-primary"
                                        >
                                            <Video className="w-4 h-4 inline mr-2" />
                                            Book Session
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* My Sessions */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">My Upcoming Sessions</h2>
                    <div className="card text-center py-12">
                        <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">No upcoming sessions</p>
                        <p className="text-sm text-gray-400 mt-2">Book your first counselling session above</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
