'use client'

import { useState } from 'react'
import { Upload, FileText, Download, Eye, Trash2, Search, Filter } from 'lucide-react'

export default function DocumentsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all')

    const documents = [
        {
            id: 1,
            name: 'Biopsy Report - Oct 2024',
            category: 'Medical Reports',
            type: 'PDF',
            size: '2.4 MB',
            uploadedAt: '22 Oct 2024',
            icon: '🔬',
        },
        {
            id: 2,
            name: 'Hospital Cost Estimate',
            category: 'Financial',
            type: 'PDF',
            size: '1.1 MB',
            uploadedAt: '25 Oct 2024',
            icon: '💰',
        },
        {
            id: 3,
            name: 'PM-JAY Approval Letter',
            category: 'Insurance',
            type: 'PDF',
            size: '856 KB',
            uploadedAt: '28 Oct 2024',
            icon: '✅',
        },
        {
            id: 4,
            name: 'CT Scan Images',
            category: 'Medical Reports',
            type: 'ZIP',
            size: '45.2 MB',
            uploadedAt: '20 Oct 2024',
            icon: '📸',
        },
        {
            id: 5,
            name: 'Prescription - Dr. Sharma',
            category: 'Prescriptions',
            type: 'PDF',
            size: '512 KB',
            uploadedAt: '15 Oct 2024',
            icon: '💊',
        },
    ]

    const categories = ['all', 'Medical Reports', 'Financial', 'Insurance', 'Prescriptions', 'ID Proofs']

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16">
                <div className="container-custom">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Document Vault</h1>
                            <p className="text-xl opacity-90">
                                Securely store and manage all your medical documents
                            </p>
                        </div>
                        <button className="flex items-center space-x-2 bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                            <Upload className="w-5 h-5" />
                            <span>Upload Document</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12">
                {/* Search & Filter */}
                <div className="card mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search documents..."
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                            >
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat === 'all' ? 'All Categories' : cat}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="card bg-gradient-to-br from-blue-50 to-blue-100">
                        <div className="text-3xl font-bold text-blue-700">{documents.length}</div>
                        <div className="text-sm text-gray-600 mt-1">Total Documents</div>
                    </div>
                    <div className="card bg-gradient-to-br from-green-50 to-green-100">
                        <div className="text-3xl font-bold text-green-700">
                            {(documents.reduce((sum, doc) => sum + parseFloat(doc.size), 0) / 1000).toFixed(1)} MB
                        </div>
                        <div className="text-sm text-gray-600 mt-1">Total Storage</div>
                    </div>
                    <div className="card bg-gradient-to-br from-purple-50 to-purple-100">
                        <div className="text-3xl font-bold text-purple-700">3</div>
                        <div className="text-sm text-gray-600 mt-1">Shared with Case Manager</div>
                    </div>
                    <div className="card bg-gradient-to-br from-orange-50 to-orange-100">
                        <div className="text-3xl font-bold text-orange-700">2</div>
                        <div className="text-sm text-gray-600 mt-1">Pending Verification</div>
                    </div>
                </div>

                {/* Documents Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {documents.map((doc) => (
                        <div key={doc.id} className="card hover:shadow-xl transition-all">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-3xl">
                                    {doc.icon}
                                </div>
                                <div className="flex items-center space-x-1">
                                    <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                                        <Eye className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                                        <Download className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{doc.name}</h3>

                            <div className="space-y-2 text-sm">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">Category:</span>
                                    <span className="font-medium text-gray-900">{doc.category}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">Type:</span>
                                    <span className="font-medium text-gray-900">{doc.type}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">Size:</span>
                                    <span className="font-medium text-gray-900">{doc.size}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">Uploaded:</span>
                                    <span className="font-medium text-gray-900">{doc.uploadedAt}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Upload Zone */}
                <div className="mt-8 card border-2 border-dashed border-gray-300 hover:border-primary-400 transition-colors cursor-pointer">
                    <div className="text-center py-12">
                        <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload New Document</h3>
                        <p className="text-gray-600 mb-4">Drag & drop files here or click to browse</p>
                        <button className="btn-primary">Choose Files</button>
                        <p className="text-xs text-gray-500 mt-4">Supported: PDF, JPG, PNG, ZIP (Max 50MB each)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
