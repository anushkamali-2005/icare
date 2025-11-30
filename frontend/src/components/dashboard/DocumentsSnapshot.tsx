import { FileText, Download, Eye, Upload } from 'lucide-react'

export default function DocumentsSnapshot() {
    const documents = [
        {
            id: 1,
            name: 'Biopsy Report',
            type: 'Medical Report',
            date: '22 Oct 2024',
            size: '2.4 MB',
            icon: '🔬',
        },
        {
            id: 2,
            name: 'Hospital Cost Estimate',
            type: 'Financial',
            date: '25 Oct 2024',
            size: '1.1 MB',
            icon: '💰',
        },
        {
            id: 3,
            name: 'PM-JAY Approval Letter',
            type: 'Insurance',
            date: '28 Oct 2024',
            size: '856 KB',
            icon: '✅',
        },
    ]

    return (
        <div className="card">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Recent Documents</h2>
                <button className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-medium text-sm">
                    <Upload className="w-4 h-4" />
                    <span>Upload</span>
                </button>
            </div>

            <div className="space-y-3">
                {documents.map((doc) => (
                    <div
                        key={doc.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-2xl">
                                {doc.icon}
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 text-sm">{doc.name}</h3>
                                <p className="text-xs text-gray-500 mt-1">
                                    {doc.type} • {doc.date} • {doc.size}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                                <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                                <Download className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full mt-4 text-sm text-primary-600 hover:underline font-medium">
                View All Documents →
            </button>
        </div>
    )
}
