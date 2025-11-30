'use client'

import { useState } from 'react'
import { Search, MapPin, Phone, Mail, CheckCircle2, Filter } from 'lucide-react'

export default function HospitalFinderPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCity, setSelectedCity] = useState('')
    const [pmjayOnly, setPmjayOnly] = useState(false)

    const hospitals = [
        {
            id: 1,
            name: 'Tata Memorial Hospital',
            city: 'Mumbai',
            state: 'Maharashtra',
            specializations: ['Oncology', 'Radiation Therapy', 'Surgical Oncology'],
            pmjayEmpanelled: true,
            phone: '+91 22 2417 7000',
            email: 'info@tmc.gov.in',
            rating: 4.8,
        },
        {
            id: 2,
            name: 'AIIMS Delhi',
            city: 'New Delhi',
            state: 'Delhi',
            specializations: ['Oncology', 'Chemotherapy', 'Palliative Care'],
            pmjayEmpanelled: true,
            phone: '+91 11 2658 8500',
            email: 'info@aiims.edu',
            rating: 4.9,
        },
        {
            id: 3,
            name: 'Apollo Cancer Centre',
            city: 'Chennai',
            state: 'Tamil Nadu',
            specializations: ['Medical Oncology', 'Surgical Oncology', 'Radiation Oncology'],
            pmjayEmpanelled: false,
            phone: '+91 44 2829 3333',
            email: 'info@apollohospitals.com',
            rating: 4.7,
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Cancer Care Hospitals</h1>
                    <p className="text-xl opacity-90">
                        Search from 200+ empanelled hospitals across India
                    </p>
                </div>
            </div>

            <div className="container-custom py-12">
                {/* Search & Filters */}
                <div className="card mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Search Hospital</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Hospital name or specialization"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                            <select
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                            >
                                <option value="">All Cities</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Kolkata">Kolkata</option>
                            </select>
                        </div>

                        <div className="flex items-end">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={pmjayOnly}
                                    onChange={(e) => setPmjayOnly(e.target.checked)}
                                    className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                />
                                <span className="text-sm font-medium text-gray-700">PM-JAY Only</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="space-y-6">
                    {hospitals.map((hospital) => (
                        <div key={hospital.id} className="card hover:shadow-xl transition-all">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <div className="flex items-center space-x-3 mb-2">
                                        <h3 className="text-2xl font-bold text-gray-900">{hospital.name}</h3>
                                        {hospital.pmjayEmpanelled && (
                                            <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                                                <CheckCircle2 className="w-4 h-4" />
                                                <span>PM-JAY</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-600">
                                        <MapPin className="w-4 h-4" />
                                        <span>{hospital.city}, {hospital.state}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center space-x-1 text-yellow-500 mb-1">
                                        <span className="text-2xl font-bold">{hospital.rating}</span>
                                        <span className="text-xl">★</span>
                                    </div>
                                    <div className="text-xs text-gray-500">Patient Rating</div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-700 mb-2">Specializations</h4>
                                <div className="flex flex-wrap gap-2">
                                    {hospital.specializations.map((spec, index) => (
                                        <span
                                            key={index}
                                            className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                                        >
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                <div className="flex items-center space-x-6 text-sm text-gray-600">
                                    <a href={`tel:${hospital.phone}`} className="flex items-center space-x-2 hover:text-primary-600 transition-colors">
                                        <Phone className="w-4 h-4" />
                                        <span>{hospital.phone}</span>
                                    </a>
                                    <a href={`mailto:${hospital.email}`} className="flex items-center space-x-2 hover:text-primary-600 transition-colors">
                                        <Mail className="w-4 h-4" />
                                        <span>{hospital.email}</span>
                                    </a>
                                </div>
                                <div className="flex space-x-3">
                                    <button className="btn-secondary text-sm py-2">View Details</button>
                                    <button className="btn-primary text-sm py-2">Book Appointment</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
