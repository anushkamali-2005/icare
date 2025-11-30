'use client'

import { useState } from 'react'
import { MapPin, Calendar, Users, Phone, CheckCircle2, Filter, Search } from 'lucide-react'

const camps = [
    {
        id: 1,
        name: 'Free Breast Cancer Screening Camp',
        organizer: 'Cancer Aid Foundation',
        date: '15 Dec 2024',
        time: '9:00 AM - 5:00 PM',
        location: 'Community Health Center, Connaught Place',
        city: 'New Delhi',
        state: 'Delhi',
        cancerTypes: ['Breast Cancer'],
        services: ['Mammography', 'Clinical Examination', 'Consultation'],
        capacity: 100,
        registered: 45,
        phone: '+91 98765 43210',
        free: true,
    },
    {
        id: 2,
        name: 'Cervical Cancer Screening',
        organizer: 'Women Health Initiative',
        date: '20 Dec 2024',
        time: '10:00 AM - 4:00 PM',
        location: 'District Hospital, Andheri',
        city: 'Mumbai',
        state: 'Maharashtra',
        cancerTypes: ['Cervical Cancer'],
        services: ['Pap Smear', 'HPV Test', 'Consultation'],
        capacity: 80,
        registered: 32,
        phone: '+91 98765 43211',
        free: true,
    },
    {
        id: 3,
        name: 'Oral Cancer Detection Camp',
        organizer: 'Smile Foundation',
        date: '18 Dec 2024',
        time: '8:00 AM - 2:00 PM',
        location: 'City Hospital, MG Road',
        city: 'Bangalore',
        state: 'Karnataka',
        cancerTypes: ['Oral Cancer'],
        services: ['Visual Examination', 'Biopsy (if needed)', 'Consultation'],
        capacity: 60,
        registered: 28,
        phone: '+91 98765 43212',
        free: false,
        cost: '₹200',
    },
]

export default function ScreeningLocatorPage() {
    const [selectedCity, setSelectedCity] = useState('')
    const [selectedCancerType, setSelectedCancerType] = useState('')
    const [freeOnly, setFreeOnly] = useState(false)

    const filteredCamps = camps.filter(camp => {
        if (selectedCity && camp.city !== selectedCity) return false
        if (selectedCancerType && !camp.cancerTypes.includes(selectedCancerType)) return false
        if (freeOnly && !camp.free) return false
        return true
    })

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Screening Camp Locator</h1>
                    <p className="text-xl opacity-90">
                        Find free and subsidized cancer screening camps near you
                    </p>
                </div>
            </div>

            <div className="container-custom py-12">
                {/* Filters */}
                <div className="card mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                            <select
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                            >
                                <option value="">All Cities</option>
                                <option value="New Delhi">New Delhi</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Chennai">Chennai</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Cancer Type</label>
                            <select
                                value={selectedCancerType}
                                onChange={(e) => setSelectedCancerType(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                            >
                                <option value="">All Types</option>
                                <option value="Breast Cancer">Breast Cancer</option>
                                <option value="Cervical Cancer">Cervical Cancer</option>
                                <option value="Oral Cancer">Oral Cancer</option>
                            </select>
                        </div>

                        <div className="flex items-end">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={freeOnly}
                                    onChange={(e) => setFreeOnly(e.target.checked)}
                                    className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                />
                                <span className="text-sm font-medium text-gray-700">Free Camps Only</span>
                            </label>
                        </div>

                        <div className="flex items-end">
                            <button className="btn-primary w-full">
                                <Search className="w-4 h-4 inline mr-2" />
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                    <p className="text-gray-600">
                        Found <strong>{filteredCamps.length}</strong> screening camps
                    </p>
                </div>

                <div className="space-y-6">
                    {filteredCamps.map((camp) => (
                        <div key={camp.id} className="card hover:shadow-xl transition-all">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <h3 className="text-2xl font-bold text-gray-900">{camp.name}</h3>
                                        {camp.free && (
                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                                                FREE
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-600 mb-2">Organized by {camp.organizer}</p>
                                </div>
                                {!camp.free && camp.cost && (
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-primary-600">{camp.cost}</div>
                                        <div className="text-xs text-gray-500">Registration Fee</div>
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div className="flex items-center space-x-2 text-gray-700">
                                    <Calendar className="w-5 h-5 text-primary-600" />
                                    <span>{camp.date} • {camp.time}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-700">
                                    <MapPin className="w-5 h-5 text-primary-600" />
                                    <span>{camp.location}, {camp.city}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-700">
                                    <Users className="w-5 h-5 text-primary-600" />
                                    <span>{camp.registered}/{camp.capacity} registered</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-700">
                                    <Phone className="w-5 h-5 text-primary-600" />
                                    <span>{camp.phone}</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-700 mb-2">Cancer Types</h4>
                                <div className="flex flex-wrap gap-2">
                                    {camp.cancerTypes.map((type, index) => (
                                        <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                                            {type}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-700 mb-2">Services Offered</h4>
                                <div className="space-y-1">
                                    {camp.services.map((service, index) => (
                                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            <span>{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex space-x-4 pt-4 border-t border-gray-200">
                                <button className="btn-primary flex-1">Register for Camp</button>
                                <button className="btn-secondary flex-1">View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
