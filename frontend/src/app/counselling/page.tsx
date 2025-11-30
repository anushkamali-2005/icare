'use client'

import { Phone, MessageCircle, Calendar, Users, Heart, Brain, Video } from 'lucide-react'

export default function CounsellingPage() {
    const counselors = [
        {
            id: 1,
            name: 'Dr. Priya Sharma',
            qualification: 'M.Phil Clinical Psychology',
            specialization: 'Cancer & Chronic Illness',
            experience: '8 years',
            languages: ['English', 'Hindi', 'Marathi'],
            photo: 'https://via.placeholder.com/150/ec4899/ffffff?text=PS',
            phone: '+91-98765-43210',
            pricing: '₹300/session',
            availability: 'Mon-Sat, 10 AM - 6 PM'
        },
        {
            id: 2,
            name: 'Dr. Rajesh Kumar',
            qualification: 'PhD Clinical Psychology',
            specialization: 'Oncology Psychology',
            experience: '12 years',
            languages: ['English', 'Hindi', 'Tamil'],
            photo: 'https://via.placeholder.com/150/3b82f6/ffffff?text=RK',
            phone: '+91-98765-43211',
            pricing: '₹400/session',
            availability: 'Mon-Fri, 9 AM - 5 PM'
        },
        {
            id: 3,
            name: 'Dr. Anjali Mehta',
            qualification: 'M.Phil Clinical Psychology',
            specialization: 'Family & Caregiver Counseling',
            experience: '6 years',
            languages: ['English', 'Hindi', 'Gujarati'],
            photo: 'https://via.placeholder.com/150/8b5cf6/ffffff?text=AM',
            phone: '+91-98765-43212',
            pricing: '₹250/session',
            availability: 'Tue-Sun, 11 AM - 7 PM'
        }
    ]

    const supportGroups = [
        {
            id: 1,
            name: 'Breast Cancer Survivors Support Group',
            type: 'Breast Cancer',
            format: 'In-person & Virtual',
            schedule: 'Every 2nd Saturday, 4:00 PM',
            location: 'Tata Memorial Hospital, Mumbai',
            facilitator: 'Dr. Priya Sharma',
            members: 25,
            contact: '+91-98765-43210'
        },
        {
            id: 2,
            name: 'Lung Cancer Patients & Families',
            type: 'Lung Cancer',
            format: 'Virtual (Zoom)',
            schedule: 'Every Wednesday, 6:00 PM',
            location: 'Online',
            facilitator: 'Dr. Rajesh Kumar',
            members: 18,
            contact: '+91-98765-43211'
        },
        {
            id: 3,
            name: 'Caregiver Support Circle',
            type: 'All Cancers (Caregivers)',
            format: 'In-person',
            schedule: 'Every 1st & 3rd Sunday, 3:00 PM',
            location: 'Indian Cancer Society, Andheri',
            facilitator: 'Dr. Anjali Mehta',
            members: 32,
            contact: '+91-98765-43212'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold mb-2">Counselling & Psychosocial Support</h1>
                    <p className="text-xl opacity-90">Mental health, family guidance, and peer support</p>
                </div>
            </div>

            <div className="container-custom py-12">
                {/* Professional Counseling */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Professional Counselors</h2>
                            <p className="text-gray-600 mt-2">Licensed psychologists specializing in cancer care</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {counselors.map(counselor => (
                            <div key={counselor.id} className="card hover:shadow-xl transition-shadow">
                                <div className="flex flex-col items-center text-center mb-6">
                                    <img
                                        src={counselor.photo}
                                        alt={counselor.name}
                                        className="w-24 h-24 rounded-full mb-4 border-4 border-indigo-100"
                                    />
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{counselor.name}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{counselor.qualification}</p>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full">
                                        {counselor.experience} experience
                                    </span>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start space-x-3">
                                        <Brain className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">Specialization</div>
                                            <div className="text-sm text-gray-600">{counselor.specialization}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <MessageCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">Languages</div>
                                            <div className="text-sm text-gray-600">{counselor.languages.join(', ')}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <Calendar className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">Availability</div>
                                            <div className="text-sm text-gray-600">{counselor.availability}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-3 border-t">
                                        <div>
                                            <div className="text-sm text-gray-600">Session Fee</div>
                                            <div className="text-lg font-bold text-indigo-600">{counselor.pricing}</div>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href={`tel:${counselor.phone}`}
                                    className="btn-primary w-full flex items-center justify-center space-x-2"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>Call to Book</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Support Groups */}
                <section>
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-gray-900">Peer Support Groups</h2>
                        <p className="text-gray-600 mt-2">Connect with others going through similar experiences</p>
                    </div>

                    <div className="space-y-6">
                        {supportGroups.map(group => (
                            <div key={group.id} className="card">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{group.name}</h3>
                                        <div className="flex items-center space-x-3 mb-4">
                                            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                                                {group.type}
                                            </span>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                                                {group.format}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <Users className="w-5 h-5" />
                                            <span className="font-semibold">{group.members} members</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div className="flex items-start space-x-3">
                                        <Calendar className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <div className="font-semibold text-gray-900 text-sm">Schedule</div>
                                            <div className="text-sm text-gray-600">{group.schedule}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        {group.format.includes('Virtual') ? (
                                            <Video className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                        ) : (
                                            <Users className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                        )}
                                        <div>
                                            <div className="font-semibold text-gray-900 text-sm">Location</div>
                                            <div className="text-sm text-gray-600">{group.location}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <Heart className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <div className="font-semibold text-gray-900 text-sm">Facilitator</div>
                                            <div className="text-sm text-gray-600">{group.facilitator}</div>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href={`tel:${group.contact}`}
                                    className="btn-secondary w-full flex items-center justify-center space-x-2"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>Contact to Join Group</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Info Box */}
                <div className="card bg-indigo-50 border-2 border-indigo-200 mt-12">
                    <h3 className="text-xl font-bold text-indigo-900 mb-4">💜 Why Counseling Matters</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-indigo-900 mb-3">Benefits of Professional Counseling:</h4>
                            <ul className="space-y-2 text-sm text-indigo-800">
                                <li className="flex items-start space-x-2">
                                    <span className="text-indigo-600">•</span>
                                    <span>Reduce anxiety and depression</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-indigo-600">•</span>
                                    <span>Cope with treatment side effects</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-indigo-600">•</span>
                                    <span>Improve quality of life</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-indigo-600">•</span>
                                    <span>Better treatment adherence</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-indigo-900 mb-3">Benefits of Support Groups:</h4>
                            <ul className="space-y-2 text-sm text-indigo-800">
                                <li className="flex items-start space-x-2">
                                    <span className="text-indigo-600">•</span>
                                    <span>Share experiences with peers</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-indigo-600">•</span>
                                    <span>Learn coping strategies</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-indigo-600">•</span>
                                    <span>Reduce feelings of isolation</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-indigo-600">•</span>
                                    <span>Build lasting friendships</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
