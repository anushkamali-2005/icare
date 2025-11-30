'use client'

import { useState } from 'react'
import { MapPin, Calendar, Users, Phone, Search, Filter, CheckCircle } from 'lucide-react'

export default function ScreeningLocatorPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedType, setSelectedType] = useState('all')
    const [showRegistration, setShowRegistration] = useState(false)
    const [selectedCamp, setSelectedCamp] = useState<any>(null)

    const camps = [
        {
            id: 1,
            name: 'Free Breast Cancer Screening Camp',
            organizer: 'Tata Memorial Hospital',
            date: '2025-12-15',
            time: '9:00 AM - 5:00 PM',
            location: 'Parel, Mumbai',
            address: 'Dr. Ernest Borges Marg, Parel East, Mumbai - 400012',
            type: 'Breast',
            tests: ['Mammography', 'Clinical Breast Exam'],
            eligibility: 'Women aged 40-65',
            contact: '+91-22-2417-7000',
            isFree: true,
            capacity: 100,
            registered: 67
        },
        {
            id: 2,
            name: 'Cervical Cancer Screening Camp',
            organizer: 'Indian Cancer Society',
            date: '2025-12-20',
            time: '10:00 AM - 4:00 PM',
            location: 'Andheri, Mumbai',
            address: 'SV Road, Andheri West, Mumbai - 400058',
            type: 'Cervical',
            tests: ['Pap Smear', 'VIA Test'],
            eligibility: 'Women aged 30-65',
            contact: '+91-22-2682-4109',
            isFree: true,
            capacity: 80,
            registered: 45
        },
        {
            id: 3,
            name: 'Oral Cancer Screening Camp',
            organizer: 'Nanavati Hospital',
            date: '2025-12-18',
            time: '8:00 AM - 2:00 PM',
            location: 'Vile Parle, Mumbai',
            address: 'SV Road, Vile Parle West, Mumbai - 400056',
            type: 'Oral',
            tests: ['Visual Examination', 'Biopsy (if needed)'],
            eligibility: 'All adults, especially tobacco users',
            contact: '+91-22-2626-7777',
            isFree: true,
            capacity: 150,
            registered: 89
        },
        {
            id: 4,
            name: 'Multi-Cancer Screening Camp',
            organizer: 'Apollo Hospital',
            date: '2025-12-22',
            time: '7:00 AM - 1:00 PM',
            location: 'Navi Mumbai',
            address: 'Plot No. 13, Parsik Hill Road, Sector 23, CBD Belapur',
            type: 'Multiple',
            tests: ['Blood Tests', 'Physical Examination', 'Counseling'],
            eligibility: 'All adults above 40',
            contact: '+91-22-3982-3982',
            isFree: false,
            price: '₹500',
            capacity: 200,
            registered: 134
        }
    ]

    const filteredCamps = camps.filter(camp => {
        const matchesSearch = camp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            camp.location.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesType = selectedType === 'all' || camp.type.toLowerCase() === selectedType
        return matchesSearch && matchesType
    })

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold mb-2">Screening Camp Locator</h1>
                    <p className="text-xl opacity-90">Find free and subsidized cancer screening camps near you</p>
                </div>
            </div>

            <div className="container-custom py-12">
                {/* Search and Filter */}
                <div className="card mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Search by location or camp name</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Enter city, pincode, or camp name..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by cancer type</label>
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="all">All Types</option>
                                <option value="breast">Breast Cancer</option>
                                <option value="cervical">Cervical Cancer</option>
                                <option value="oral">Oral Cancer</option>
                                <option value="multiple">Multi-Cancer</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-gray-600">
                        Found <strong>{filteredCamps.length}</strong> screening camps
                    </p>
                </div>

                {/* Camp Listings */}
                <div className="space-y-6">
                    {filteredCamps.map(camp => (
                        <div key={camp.id} className="card hover:shadow-xl transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <h3 className="text-2xl font-bold text-gray-900">{camp.name}</h3>
                                        {camp.isFree && (
                                            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                                                FREE
                                            </span>
                                        )}
                                        {!camp.isFree && (
                                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                                                {camp.price}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-600 mb-4">Organized by {camp.organizer}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <div className="font-semibold text-gray-900">{new Date(camp.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                                            <div className="text-sm text-gray-600">{camp.time}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <div className="font-semibold text-gray-900">{camp.location}</div>
                                            <div className="text-sm text-gray-600">{camp.address}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <div className="font-semibold text-gray-900">Contact</div>
                                            <div className="text-sm text-gray-600">{camp.contact}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div>
                                        <div className="font-semibold text-gray-900 mb-2">Tests Offered:</div>
                                        <ul className="space-y-1">
                                            {camp.tests.map((test, idx) => (
                                                <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                                    <span>{test}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-gray-900 mb-1">Eligibility:</div>
                                        <p className="text-sm text-gray-600">{camp.eligibility}</p>
                                    </div>

                                    <div>
                                        <div className="font-semibold text-gray-900 mb-2">Availability:</div>
                                        <div className="flex items-center space-x-3">
                                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-blue-600 h-2 rounded-full"
                                                    style={{ width: `${(camp.registered / camp.capacity) * 100}%` }}
                                                />
                                            </div>
                                            <span className="text-sm text-gray-600">{camp.capacity - camp.registered} slots left</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    setSelectedCamp(camp)
                                    setShowRegistration(true)
                                }}
                                className="btn-primary w-full"
                            >
                                Register for This Camp
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Registration Modal */}
            {showRegistration && selectedCamp && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Register for Screening Camp</h2>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                                <h3 className="font-semibold text-blue-900 mb-1">{selectedCamp.name}</h3>
                                <p className="text-sm text-blue-700">{new Date(selectedCamp.date).toLocaleDateString()} • {selectedCamp.location}</p>
                            </div>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                    <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                                        <input type="number" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                                        <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                                            <option value="">Select</option>
                                            <option value="female">Female</option>
                                            <option value="male">Male</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                    <input type="tel" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="+91" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email (Optional)</label>
                                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                    <textarea rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg"></textarea>
                                </div>

                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                    <p className="text-sm text-yellow-800">
                                        <strong>Note:</strong> You will receive an SMS confirmation with camp details and instructions. Please bring a valid ID proof on the day of the camp.
                                    </p>
                                </div>

                                <div className="flex space-x-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowRegistration(false)}
                                        className="btn-secondary flex-1"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn-primary flex-1"
                                    >
                                        Confirm Registration
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
