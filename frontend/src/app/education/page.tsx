'use client'

import { useState } from 'react'
import { Search, BookOpen, Video, Award, Share2, Download, Play } from 'lucide-react'

export default function EducationPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')

    const categories = ['All', 'Breast', 'Lung', 'Colorectal', 'Prostate', 'Cervical', 'Oral', 'Stomach', 'Liver']

    const cancerTypes = [
        {
            id: 'breast',
            name: 'Breast Cancer',
            description: 'Most common cancer in women worldwide',
            prevalence: '1 in 8 women',
            color: 'pink',
            icon: '🎀'
        },
        {
            id: 'lung',
            name: 'Lung Cancer',
            description: 'Leading cause of cancer deaths globally',
            prevalence: '2.2 million cases/year',
            color: 'blue',
            icon: '🫁'
        },
        {
            id: 'colorectal',
            name: 'Colorectal Cancer',
            description: 'Third most common cancer worldwide',
            prevalence: '1.9 million cases/year',
            color: 'purple',
            icon: '🩺'
        },
        {
            id: 'prostate',
            name: 'Prostate Cancer',
            description: 'Most common cancer in men',
            prevalence: '1 in 8 men',
            color: 'indigo',
            icon: '👨'
        },
        {
            id: 'cervical',
            name: 'Cervical Cancer',
            description: 'Preventable with HPV vaccination',
            prevalence: '600,000 cases/year',
            color: 'teal',
            icon: '💉'
        },
        {
            id: 'oral',
            name: 'Oral Cancer',
            description: 'High incidence in India due to tobacco',
            prevalence: '377,000 cases/year',
            color: 'orange',
            icon: '👄'
        }
    ]

    const myths = [
        {
            myth: 'Cancer is always hereditary',
            fact: 'Only 5-10% of cancers are hereditary. Most are caused by lifestyle and environmental factors.',
            category: 'General'
        },
        {
            myth: 'Cancer is contagious',
            fact: 'Cancer cannot be transmitted from person to person through touch or proximity.',
            category: 'General'
        },
        {
            myth: 'Sugar feeds cancer',
            fact: 'While cancer cells use glucose, there\'s no evidence that avoiding sugar slows cancer growth.',
            category: 'Diet'
        },
        {
            myth: 'Cancer treatment is worse than the disease',
            fact: 'Modern treatments are highly effective with manageable side effects. Many patients live normal lives during treatment.',
            category: 'Treatment'
        }
    ]

    const videos = [
        {
            id: 1,
            title: 'Understanding Breast Cancer: Early Detection Saves Lives',
            duration: '12:45',
            views: '1.2M',
            thumbnail: 'https://via.placeholder.com/400x225/ec4899/ffffff?text=Breast+Cancer',
            category: 'Breast'
        },
        {
            id: 2,
            title: 'Lung Cancer Prevention: Quit Smoking Today',
            duration: '8:30',
            views: '890K',
            thumbnail: 'https://via.placeholder.com/400x225/3b82f6/ffffff?text=Lung+Cancer',
            category: 'Lung'
        },
        {
            id: 3,
            title: 'Colorectal Cancer Screening: What You Need to Know',
            duration: '10:15',
            views: '650K',
            thumbnail: 'https://via.placeholder.com/400x225/8b5cf6/ffffff?text=Colorectal',
            category: 'Colorectal'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Cancer Education Hub</h1>
                    <p className="text-xl opacity-90 mb-8">Comprehensive library of cancer prevention and awareness content</p>

                    {/* Search Bar */}
                    <div className="max-w-2xl">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search for cancer types, symptoms, prevention..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="card text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                        <div className="text-gray-600">Cancer Types</div>
                    </div>
                    <div className="card text-center">
                        <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
                        <div className="text-gray-600">Articles</div>
                    </div>
                    <div className="card text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                        <div className="text-gray-600">Videos</div>
                    </div>
                    <div className="card text-center">
                        <div className="text-4xl font-bold text-orange-600 mb-2">10+</div>
                        <div className="text-gray-600">Languages</div>
                    </div>
                </div>

                {/* Cancer Type Encyclopedia */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-gray-900">Cancer Type Encyclopedia</h2>
                        <button className="btn-secondary flex items-center space-x-2">
                            <Download className="w-5 h-5" />
                            <span>Download All PDFs</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cancerTypes.map(cancer => (
                            <div key={cancer.id} className="card hover:shadow-xl transition-shadow cursor-pointer group">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`text-5xl`}>{cancer.icon}</div>
                                    <span className={`px-3 py-1 bg-${cancer.color}-100 text-${cancer.color}-700 text-sm font-semibold rounded-full`}>
                                        {cancer.prevalence}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {cancer.name}
                                </h3>
                                <p className="text-gray-600 mb-4">{cancer.description}</p>
                                <div className="flex items-center justify-between">
                                    <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center space-x-1">
                                        <BookOpen className="w-4 h-4" />
                                        <span>Learn More</span>
                                    </button>
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Myth Busters */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Myth Busters</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {myths.map((item, index) => (
                            <div key={index} className="card bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-500">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                            ✗
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-900 mb-2">MYTH: {item.myth}</h4>
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                                    ✓
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-green-700 mb-1">FACT:</h5>
                                                <p className="text-gray-700">{item.fact}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Video Library */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-gray-900">Video Library</h2>
                        <div className="flex space-x-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat.toLowerCase())}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === cat.toLowerCase()
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {videos.map(video => (
                            <div key={video.id} className="card p-0 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                                <div className="relative">
                                    <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                            <Play className="w-8 h-8 text-blue-600 ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                                        {video.duration}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{video.title}</h4>
                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <span>{video.views} views</span>
                                        <span className="px-2 py-1 bg-gray-100 rounded">{video.category}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Interactive Quizzes */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Test Your Knowledge</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Breast Cancer Basics', questions: 10, badge: 'Beginner', color: 'green' },
                            { title: 'Prevention Strategies', questions: 15, badge: 'Intermediate', color: 'blue' },
                            { title: 'Treatment Options', questions: 20, badge: 'Advanced', color: 'purple' }
                        ].map((quiz, index) => (
                            <div key={index} className="card bg-gradient-to-br from-gray-50 to-gray-100">
                                <div className="flex items-center justify-between mb-4">
                                    <Award className={`w-12 h-12 text-${quiz.color}-600`} />
                                    <span className={`px-3 py-1 bg-${quiz.color}-100 text-${quiz.color}-700 text-sm font-semibold rounded-full`}>
                                        {quiz.badge}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{quiz.title}</h3>
                                <p className="text-gray-600 mb-4">{quiz.questions} questions • 10 minutes</p>
                                <button className="btn-primary w-full">Start Quiz</button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
