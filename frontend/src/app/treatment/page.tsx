'use client'

import { useState } from 'react'
import { User, Calendar, FileText, Phone, MessageCircle, Clock, CheckCircle, Plus, Download } from 'lucide-react'

export default function TreatmentCoordinationPage() {
    const [showAddAppointment, setShowAddAppointment] = useState(false)

    // Mock data
    const caseManager = {
        name: 'Dr. Priya Sharma',
        role: 'Oncology Case Manager',
        phone: '+91-98765-43210',
        whatsapp: '+91-98765-43210',
        email: 'priya.sharma@icare.org',
        photo: 'https://via.placeholder.com/150/3b82f6/ffffff?text=PS',
        availability: 'Mon-Sat, 9 AM - 6 PM'
    }

    const treatmentPlan = {
        cancerType: 'Breast Cancer',
        stage: 'Stage 2A',
        diagnosisDate: 'January 15, 2024',
        treatmentModalities: [
            { name: 'Surgery', status: 'Completed', date: 'February 20, 2024' },
            { name: 'Chemotherapy', status: 'Completed', date: 'March 2024 - June 2024' },
            { name: 'Radiation', status: 'Completed', date: 'July 2024 - August 2024' },
            { name: 'Hormone Therapy', status: 'Ongoing', date: 'September 2024 - Present' }
        ],
        expectedDuration: '12 months',
        currentPhase: 'Post-treatment follow-up'
    }

    const [appointments, setAppointments] = useState([
        {
            id: 1,
            date: '2024-12-05',
            time: '10:00 AM',
            doctor: 'Dr. Rajesh Kumar',
            specialty: 'Medical Oncologist',
            hospital: 'Tata Memorial Hospital',
            type: 'Follow-up',
            status: 'Upcoming'
        },
        {
            id: 2,
            date: '2024-12-12',
            time: '2:00 PM',
            doctor: 'Dr. Anjali Mehta',
            specialty: 'Radiation Oncologist',
            hospital: 'Tata Memorial Hospital',
            type: 'Consultation',
            status: 'Upcoming'
        },
        {
            id: 3,
            date: '2024-11-28',
            time: '11:00 AM',
            doctor: 'Dr. Suresh Patel',
            specialty: 'Surgical Oncologist',
            hospital: 'Tata Memorial Hospital',
            type: 'Post-op Review',
            status: 'Completed'
        }
    ])

    const upcomingAppointments = appointments.filter(a => a.status === 'Upcoming')
    const pastAppointments = appointments.filter(a => a.status === 'Completed')

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold mb-2">Treatment Coordination</h1>
                    <p className="text-xl opacity-90">Your dedicated case manager and treatment plan</p>
                </div>
            </div>

            <div className="container-custom py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Case Manager */}
                    <div className="lg:col-span-1">
                        <div className="card sticky top-4">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Your Case Manager</h2>

                            <div className="text-center mb-6">
                                <img
                                    src={caseManager.photo}
                                    alt={caseManager.name}
                                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-100"
                                />
                                <h3 className="text-xl font-bold text-gray-900">{caseManager.name}</h3>
                                <p className="text-gray-600">{caseManager.role}</p>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <Phone className="w-5 h-5 text-blue-600" />
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-600">Phone</div>
                                        <a href={`tel:${caseManager.phone}`} className="font-semibold text-blue-600 hover:text-blue-700">
                                            {caseManager.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <MessageCircle className="w-5 h-5 text-green-600" />
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-600">WhatsApp</div>
                                        <a href={`https://wa.me/${caseManager.whatsapp.replace(/[^0-9]/g, '')}`} className="font-semibold text-green-600 hover:text-green-700">
                                            Message on WhatsApp
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <Clock className="w-5 h-5 text-purple-600" />
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-600">Availability</div>
                                        <div className="font-semibold text-gray-900">{caseManager.availability}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <h4 className="font-semibold text-blue-900 mb-2">How I Can Help:</h4>
                                <ul className="space-y-2 text-sm text-blue-800">
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600">•</span>
                                        <span>Coordinate appointments</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600">•</span>
                                        <span>Answer treatment questions</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600">•</span>
                                        <span>Help with paperwork</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600">•</span>
                                        <span>Financial assistance guidance</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-blue-600">•</span>
                                        <span>Emotional support</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Treatment Plan & Appointments */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Treatment Plan */}
                        <section className="card">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Treatment Plan Overview</h2>
                                <button className="btn-secondary flex items-center space-x-2">
                                    <Download className="w-5 h-5" />
                                    <span>Download PDF</span>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div className="p-4 bg-blue-50 rounded-lg">
                                    <div className="text-sm text-blue-700 mb-1">Cancer Type</div>
                                    <div className="font-bold text-blue-900">{treatmentPlan.cancerType}</div>
                                </div>
                                <div className="p-4 bg-purple-50 rounded-lg">
                                    <div className="text-sm text-purple-700 mb-1">Stage</div>
                                    <div className="font-bold text-purple-900">{treatmentPlan.stage}</div>
                                </div>
                                <div className="p-4 bg-green-50 rounded-lg">
                                    <div className="text-sm text-green-700 mb-1">Current Phase</div>
                                    <div className="font-bold text-green-900">{treatmentPlan.currentPhase}</div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900 mb-4">Treatment Modalities:</h3>
                                <div className="space-y-3">
                                    {treatmentPlan.treatmentModalities.map((modality, index) => (
                                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                            <div className="flex items-center space-x-4">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${modality.status === 'Completed' ? 'bg-green-100' :
                                                        modality.status === 'Ongoing' ? 'bg-blue-100' :
                                                            'bg-gray-200'
                                                    }`}>
                                                    {modality.status === 'Completed' && <CheckCircle className="w-6 h-6 text-green-600" />}
                                                    {modality.status === 'Ongoing' && <Clock className="w-6 h-6 text-blue-600" />}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-gray-900">{modality.name}</div>
                                                    <div className="text-sm text-gray-600">{modality.date}</div>
                                                </div>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${modality.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                                    modality.status === 'Ongoing' ? 'bg-blue-100 text-blue-700' :
                                                        'bg-gray-200 text-gray-700'
                                                }`}>
                                                {modality.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Appointments */}
                        <section className="card">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
                                <button
                                    onClick={() => setShowAddAppointment(true)}
                                    className="btn-primary flex items-center space-x-2"
                                >
                                    <Plus className="w-5 h-5" />
                                    <span>Add Appointment</span>
                                </button>
                            </div>

                            {/* Upcoming Appointments */}
                            <div className="mb-8">
                                <h3 className="font-semibold text-gray-900 mb-4">Upcoming Appointments ({upcomingAppointments.length})</h3>
                                <div className="space-y-4">
                                    {upcomingAppointments.map(apt => (
                                        <div key={apt.id} className="border-2 border-blue-200 bg-blue-50 rounded-lg p-4">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-start space-x-4">
                                                    <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex flex-col items-center justify-center">
                                                        <div className="text-xs">{new Date(apt.date).toLocaleDateString('en-US', { month: 'short' })}</div>
                                                        <div className="text-lg font-bold">{new Date(apt.date).getDate()}</div>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 text-lg">{apt.doctor}</h4>
                                                        <p className="text-sm text-gray-600">{apt.specialty}</p>
                                                        <p className="text-sm text-gray-600">{apt.hospital}</p>
                                                    </div>
                                                </div>
                                                <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                                                    {apt.type}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                                                <div className="flex items-center space-x-2">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{new Date(apt.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{apt.time}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Past Appointments */}
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-4">Past Appointments ({pastAppointments.length})</h3>
                                <div className="space-y-4">
                                    {pastAppointments.map(apt => (
                                        <div key={apt.id} className="border border-gray-200 bg-white rounded-lg p-4">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-start space-x-4">
                                                    <div className="w-12 h-12 bg-gray-200 text-gray-600 rounded-lg flex flex-col items-center justify-center">
                                                        <div className="text-xs">{new Date(apt.date).toLocaleDateString('en-US', { month: 'short' })}</div>
                                                        <div className="text-lg font-bold">{new Date(apt.date).getDate()}</div>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900">{apt.doctor}</h4>
                                                        <p className="text-sm text-gray-600">{apt.specialty}</p>
                                                        <p className="text-sm text-gray-600">{apt.hospital}</p>
                                                    </div>
                                                </div>
                                                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full flex items-center space-x-1">
                                                    <CheckCircle className="w-4 h-4" />
                                                    <span>Completed</span>
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                                                <div className="flex items-center space-x-2">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{new Date(apt.date).toLocaleDateString('en-IN')}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{apt.time}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Add Appointment Modal */}
            {showAddAppointment && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Add New Appointment</h2>

                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
                                        <input type="date" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Time *</label>
                                        <input type="time" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Doctor Name *</label>
                                    <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Specialty</label>
                                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Hospital/Clinic *</label>
                                    <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Appointment Type</label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                                        <option>Consultation</option>
                                        <option>Follow-up</option>
                                        <option>Treatment</option>
                                        <option>Test/Scan</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Notes (Optional)</label>
                                    <textarea rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg"></textarea>
                                </div>

                                <div className="flex space-x-4 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowAddAppointment(false)}
                                        className="btn-secondary flex-1"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn-primary flex-1"
                                    >
                                        Add Appointment
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
