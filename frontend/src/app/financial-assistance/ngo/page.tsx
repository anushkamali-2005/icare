'use client'

import { useState } from 'react'
import { Heart, IndianRupee, Users, Phone, Mail, Globe, Filter, Search } from 'lucide-react'

export default function NGODirectoryPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedType, setSelectedType] = useState('all')

    const ngos = [
        {
            id: 1,
            name: 'Tata Memorial Centre - Patient Welfare',
            focus: 'All Cancer Types',
            grantRange: '₹50,000 - ₹2,00,000',
            eligibility: 'BPL families, income < ₹3 lakh/year',
            coverage: 'Treatment costs, medicines, travel',
            phone: '+91-22-2417-7000',
            email: 'welfare@tmc.gov.in',
            website: 'tmc.gov.in',
            applicationProcess: 'Apply through hospital social worker with income certificate',
            processingTime: '2-4 weeks',
            color: 'blue'
        },
        {
            id: 2,
            name: 'Indian Cancer Society',
            focus: 'All Cancer Types',
            grantRange: '₹25,000 - ₹1,00,000',
            eligibility: 'Low-income families',
            coverage: 'Treatment, medicines, nutrition support',
            phone: '+91-22-2682-4109',
            email: 'info@indiancancersociety.org',
            website: 'indiancancersociety.org',
            applicationProcess: 'Online application with medical reports and income proof',
            processingTime: '3-6 weeks',
            color: 'green'
        },
        {
            id: 3,
            name: 'Cancer Patients Aid Association (CPAA)',
            focus: 'All Cancer Types',
            grantRange: '₹10,000 - ₹50,000',
            eligibility: 'Mumbai residents, income < ₹5 lakh/year',
            coverage: 'Medicines, diagnostic tests, nutrition',
            phone: '+91-22-2414-1478',
            email: 'cpaa@vsnl.com',
            website: 'cpaaindia.org',
            applicationProcess: 'Visit office with documents or apply online',
            processingTime: '1-2 weeks',
            color: 'purple'
        },
        {
            id: 4,
            name: 'St. Jude India ChildCare Centres',
            focus: 'Pediatric Cancer',
            grantRange: '₹1,00,000 - ₹3,00,000',
            eligibility: 'Children under 18 years',
            coverage: 'Complete treatment, accommodation, food',
            phone: '+91-80-2572-0800',
            email: 'info@stjudeindia.org',
            website: 'stjudeindia.org',
            applicationProcess: 'Referral from treating hospital',
            processingTime: '1-3 weeks',
            color: 'pink'
        },
        {
            id: 5,
            name: 'Nargis Dutt Memorial Charitable Trust',
            focus: 'All Cancer Types',
            grantRange: '₹20,000 - ₹1,50,000',
            eligibility: 'Low-income families',
            coverage: 'Treatment costs, surgery, chemotherapy',
            phone: '+91-22-2351-7393',
            email: 'nargisdutt@gmail.com',
            website: 'nargisduttfoundation.org',
            applicationProcess: 'Apply through hospital with medical and financial documents',
            processingTime: '2-4 weeks',
            color: 'orange'
        },
        {
            id: 6,
            name: 'CanSupport',
            focus: 'Palliative Care',
            grantRange: 'Free services',
            eligibility: 'All cancer patients needing palliative care',
            coverage: 'Home-based palliative care, pain management, counseling',
            phone: '+91-11-2627-1742',
            email: 'info@cansupport.org',
            website: 'cansupport.org',
            applicationProcess: 'Call helpline for home visit',
            processingTime: 'Immediate',
            color: 'teal'
        }
    ]

    const filteredNGOs = ngos.filter(ngo => {
        const matchesSearch = ngo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ngo.focus.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesType = selectedType === 'all' || ngo.focus.toLowerCase().includes(selectedType)
        return matchesSearch && matchesType
    })

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-12">
                <div className="container-custom">
                    <div className="flex items-center space-x-4 mb-4">
                        <Heart className="w-16 h-16" />
                        <div>
                            <h1 className="text-4xl font-bold mb-2">NGO Grant Directory</h1>
                            <p className="text-xl opacity-90">20+ NGOs offering financial assistance for cancer treatment</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12">
                {/* Search and Filter */}
                <div className="card mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Search NGOs</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search by name or cancer type..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Focus</label>
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                            >
                                <option value="all">All Types</option>
                                <option value="all cancer">All Cancer Types</option>
                                <option value="pediatric">Pediatric Cancer</option>
                                <option value="palliative">Palliative Care</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-gray-600">
                        Found <strong>{filteredNGOs.length}</strong> NGOs
                    </p>
                </div>

                {/* NGO Listings */}
                <div className="space-y-6">
                    {filteredNGOs.map(ngo => (
                        <div key={ngo.id} className={`card border-l-4 border-${ngo.color}-500`}>
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{ngo.name}</h3>
                                    <div className="flex items-center space-x-3 mb-3">
                                        <span className={`px-3 py-1 bg-${ngo.color}-100 text-${ngo.color}-700 text-sm font-semibold rounded-full`}>
                                            {ngo.focus}
                                        </span>
                                        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full flex items-center space-x-1">
                                            <IndianRupee className="w-4 h-4" />
                                            <span>{ngo.grantRange}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-3">
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900 mb-1">Eligibility:</div>
                                        <p className="text-sm text-gray-600">{ngo.eligibility}</p>
                                    </div>

                                    <div>
                                        <div className="text-sm font-semibold text-gray-900 mb-1">Coverage:</div>
                                        <p className="text-sm text-gray-600">{ngo.coverage}</p>
                                    </div>

                                    <div>
                                        <div className="text-sm font-semibold text-gray-900 mb-1">Processing Time:</div>
                                        <p className="text-sm text-gray-600">{ngo.processingTime}</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <Phone className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">Phone</div>
                                            <a href={`tel:${ngo.phone}`} className="text-sm text-blue-600 hover:text-blue-700">
                                                {ngo.phone}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <Mail className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">Email</div>
                                            <a href={`mailto:${ngo.email}`} className="text-sm text-blue-600 hover:text-blue-700">
                                                {ngo.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <Globe className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">Website</div>
                                            <a href={`https://${ngo.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-700">
                                                {ngo.website}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                <div className="text-sm font-semibold text-gray-900 mb-2">Application Process:</div>
                                <p className="text-sm text-gray-600">{ngo.applicationProcess}</p>
                            </div>

                            <button className="btn-primary w-full">
                                Contact Case Manager for Application Help
                            </button>
                        </div>
                    ))}
                </div>

                {/* Help Box */}
                <div className="card bg-blue-50 border-2 border-blue-200 mt-12">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">💡 Tips for NGO Grant Applications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-blue-900 mb-3">Documents Needed:</h4>
                            <ul className="space-y-2 text-sm text-blue-800">
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-600">•</span>
                                    <span>Medical reports and treatment plan</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-600">•</span>
                                    <span>Income certificate or salary slips</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-600">•</span>
                                    <span>Aadhar card and ration card</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-600">•</span>
                                    <span>Bank account details</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-blue-900 mb-3">Best Practices:</h4>
                            <ul className="space-y-2 text-sm text-blue-800">
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-600">•</span>
                                    <span>Apply to multiple NGOs simultaneously</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-600">•</span>
                                    <span>Keep all documents organized and ready</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-600">•</span>
                                    <span>Follow up regularly on application status</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-blue-600">•</span>
                                    <span>Get help from your case manager</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
