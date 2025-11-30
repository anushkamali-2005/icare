'use client'

import { useState } from 'react'
import { RegistrationData } from '@/types'
import { ArrowLeft, Shield, Users, MessageSquare, FileText } from 'lucide-react'

interface ConsentProps {
    data: Partial<RegistrationData>
    onNext: (data: Partial<RegistrationData>) => void
    onBack: () => void
}

export default function Consent({ data, onNext, onBack }: ConsentProps) {
    const [formData, setFormData] = useState({
        consentDataCollection: data.consentDataCollection || false,
        consentDataSharing: data.consentDataSharing || false,
        consentCaseManager: data.consentCaseManager || false,
        consentCommunication: data.consentCommunication || false,
        consentResearch: data.consentResearch || false,
        consentCSR: data.consentCSR || false,
        emergencyName: data.emergencyContact?.name || '',
        emergencyRelationship: data.emergencyContact?.relationship || '',
        emergencyPhone: data.emergencyContact?.phone || '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        onNext({
            consentDataCollection: formData.consentDataCollection,
            consentDataSharing: formData.consentDataSharing,
            consentCaseManager: formData.consentCaseManager,
            consentCommunication: formData.consentCommunication,
            consentResearch: formData.consentResearch,
            consentCSR: formData.consentCSR,
            emergencyContact: {
                name: formData.emergencyName,
                relationship: formData.emergencyRelationship,
                phone: formData.emergencyPhone,
            },
        })
    }

    const requiredConsentsGiven =
        formData.consentDataCollection &&
        formData.consentDataSharing &&
        formData.consentCaseManager &&
        formData.consentCommunication

    const emergencyContactComplete =
        formData.emergencyName &&
        formData.emergencyRelationship &&
        formData.emergencyPhone

    const isValid = requiredConsentsGiven && emergencyContactComplete

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Privacy & Consent</h2>
                <p className="text-gray-600">We take your privacy seriously. Please review and accept:</p>
            </div>

            <div className="space-y-4">
                {/* Required Consents */}
                <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-4 border-2 border-primary-200 bg-primary-50 rounded-lg">
                        <input
                            type="checkbox"
                            id="consent1"
                            checked={formData.consentDataCollection}
                            onChange={(e) => setFormData({ ...formData, consentDataCollection: e.target.checked })}
                            className="mt-1 w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <label htmlFor="consent1" className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                                <Shield className="w-5 h-5 text-primary-600" />
                                <span className="font-semibold text-gray-900">Data Collection & Storage</span>
                                <span className="text-red-500 text-sm">*</span>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                I consent to ICARE collecting and storing my medical and financial information for the purpose of providing cancer care support services.
                            </p>
                            <a href="/privacy" className="text-sm text-primary-600 hover:underline mt-1 inline-block">
                                Read Full Privacy Policy →
                            </a>
                        </label>
                    </div>

                    <div className="flex items-start space-x-3 p-4 border-2 border-primary-200 bg-primary-50 rounded-lg">
                        <input
                            type="checkbox"
                            id="consent2"
                            checked={formData.consentDataSharing}
                            onChange={(e) => setFormData({ ...formData, consentDataSharing: e.target.checked })}
                            className="mt-1 w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <label htmlFor="consent2" className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                                <Users className="w-5 h-5 text-primary-600" />
                                <span className="font-semibold text-gray-900">Data Sharing with Partners</span>
                                <span className="text-red-500 text-sm">*</span>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                I consent to ICARE sharing my information with empanelled hospitals, NGOs, and financial partners for the purpose of facilitating treatment and funding.
                            </p>
                            <a href="/data-sharing" className="text-sm text-primary-600 hover:underline mt-1 inline-block">
                                Read Data Sharing Policy →
                            </a>
                        </label>
                    </div>

                    <div className="flex items-start space-x-3 p-4 border-2 border-primary-200 bg-primary-50 rounded-lg">
                        <input
                            type="checkbox"
                            id="consent3"
                            checked={formData.consentCaseManager}
                            onChange={(e) => setFormData({ ...formData, consentCaseManager: e.target.checked })}
                            className="mt-1 w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <label htmlFor="consent3" className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                                <FileText className="w-5 h-5 text-primary-600" />
                                <span className="font-semibold text-gray-900">Case Manager Assignment</span>
                                <span className="text-red-500 text-sm">*</span>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                I agree to be assigned a dedicated Case Manager who will have access to my case details to provide personalized support.
                            </p>
                        </label>
                    </div>

                    <div className="flex items-start space-x-3 p-4 border-2 border-primary-200 bg-primary-50 rounded-lg">
                        <input
                            type="checkbox"
                            id="consent4"
                            checked={formData.consentCommunication}
                            onChange={(e) => setFormData({ ...formData, consentCommunication: e.target.checked })}
                            className="mt-1 w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <label htmlFor="consent4" className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                                <MessageSquare className="w-5 h-5 text-primary-600" />
                                <span className="font-semibold text-gray-900">Communication Consent</span>
                                <span className="text-red-500 text-sm">*</span>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                I consent to receive communications from ICARE via SMS, WhatsApp, email, and phone calls for appointment reminders, updates, and support.
                            </p>
                        </label>
                    </div>
                </div>

                {/* Optional Consents */}
                <div className="border-t pt-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Optional Consents</h3>
                    <div className="space-y-3">
                        <div className="flex items-start space-x-3 p-4 border border-gray-300 rounded-lg">
                            <input
                                type="checkbox"
                                id="consent5"
                                checked={formData.consentResearch}
                                onChange={(e) => setFormData({ ...formData, consentResearch: e.target.checked })}
                                className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                            />
                            <label htmlFor="consent5" className="flex-1 text-sm text-gray-700">
                                I am willing to share my anonymized case data for research purposes to improve cancer care in India.
                            </label>
                        </div>

                        <div className="flex items-start space-x-3 p-4 border border-gray-300 rounded-lg">
                            <input
                                type="checkbox"
                                id="consent6"
                                checked={formData.consentCSR}
                                onChange={(e) => setFormData({ ...formData, consentCSR: e.target.checked })}
                                className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                            />
                            <label htmlFor="consent6" className="flex-1 text-sm text-gray-700">
                                I am open to being contacted by CSR partners for potential financial adoption support.
                            </label>
                        </div>
                    </div>
                </div>

                {/* Emergency Contact */}
                <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Emergency Contact <span className="text-red-500">*</span>
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input
                                type="text"
                                value={formData.emergencyName}
                                onChange={(e) => setFormData({ ...formData, emergencyName: e.target.value })}
                                placeholder="Full name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Relationship</label>
                            <select
                                value={formData.emergencyRelationship}
                                onChange={(e) => setFormData({ ...formData, emergencyRelationship: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                required
                            >
                                <option value="">Select relationship</option>
                                <option value="spouse">Spouse</option>
                                <option value="parent">Parent</option>
                                <option value="sibling">Sibling</option>
                                <option value="child">Child</option>
                                <option value="friend">Friend</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                            <div className="flex space-x-2">
                                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none">
                                    <option value="+91">+91</option>
                                </select>
                                <input
                                    type="tel"
                                    value={formData.emergencyPhone}
                                    onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                                    placeholder="10-digit mobile number"
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex space-x-4">
                <button
                    type="button"
                    onClick={onBack}
                    className="flex items-center space-x-2 px-6 py-3 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                </button>
                <button
                    type="submit"
                    disabled={!isValid}
                    className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Complete Registration
                </button>
            </div>
        </form>
    )
}
