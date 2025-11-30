'use client'

import { Users, Share2, TrendingUp, Image as ImageIcon } from 'lucide-react'

export default function CrowdfundingPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16">
                <div className="container-custom">
                    <div className="flex items-center space-x-4">
                        <Users className="w-16 h-16" />
                        <div>
                            <h1 className="text-4xl font-bold">Crowdfunding Campaign</h1>
                            <p className="text-xl opacity-90 mt-2">Raise funds from community support</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12 max-w-4xl mx-auto">
                <div className="card mb-8 bg-gradient-to-br from-orange-50 to-orange-100">
                    <h2 className="text-2xl font-bold mb-4">Success Stories</h2>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <div className="text-3xl font-bold text-orange-600">₹45L+</div>
                            <div className="text-sm text-gray-600">Total Raised</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-orange-600">1,200+</div>
                            <div className="text-sm text-gray-600">Campaigns</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-orange-600">85%</div>
                            <div className="text-sm text-gray-600">Success Rate</div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h2 className="text-2xl font-bold mb-6">Create Your Campaign</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Campaign Title</label>
                            <input type="text" placeholder="Help [Name] Fight Cancer" className="w-full px-4 py-3 border rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Funding Goal</label>
                            <input type="number" placeholder="₹" className="w-full px-4 py-3 border rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Your Story</label>
                            <textarea rows={6} className="w-full px-4 py-3 border rounded-lg resize-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Upload Photo</label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-orange-400">
                                <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                                <p className="text-gray-600">Click to upload campaign photo</p>
                            </div>
                        </div>
                        <button className="btn-primary w-full flex items-center justify-center space-x-2">
                            <Share2 className="w-5 h-5" />
                            <span>Launch Campaign</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
