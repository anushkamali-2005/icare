'use client'

import { useState } from 'react'
import { RegistrationData } from '@/types'
import { ArrowLeft } from 'lucide-react'

interface BasicInfoProps {
    data: Partial<RegistrationData>
    onNext: (data: Partial<RegistrationData>) => void
    onBack: () => void
}

export default function BasicInfo({ data, onNext, onBack }: BasicInfoProps) {
    const [formData, setFormData] = useState({
        fullName: data.fullName || '',
        day: data.dateOfBirth?.day || '',
        month: data.dateOfBirth?.month || '',
        year: data.dateOfBirth?.year || '',
        gender: data.gender || '',
        houseNo: data.address?.houseNo || '',
        street: data.address?.street || '',
        city: data.address?.city || '',
        state: data.address?.state || '',
        pinCode: data.address?.pinCode || '',
        alternatePhone: data.alternatePhone || '',
        email: data.email || '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        onNext({
            fullName: formData.fullName,
            dateOfBirth: {
                day: formData.day,
                month: formData.month,
                year: formData.year,
            },
            gender: formData.gender as any,
            address: {
                houseNo: formData.houseNo,
                street: formData.street,
                city: formData.city,
                state: formData.state,
                pinCode: formData.pinCode,
            },
            alternatePhone: formData.alternatePhone,
            email: formData.email,
        })
    }

    const isValid = formData.fullName && formData.day && formData.month && formData.year && formData.gender && formData.city && formData.state && formData.pinCode

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Tell Us About Yourself</h2>
                <p className="text-gray-600">This information helps us provide personalized support</p>
            </div>

            <div className="space-y-4">
                {/* Full Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="As per government ID"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                        required
                    />
                </div>

                {/* Date of Birth */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                        <select
                            value={formData.day}
                            onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                            required
                        >
                            <option value="">DD</option>
                            {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
                                <option key={d} value={d.toString().padStart(2, '0')}>{d.toString().padStart(2, '0')}</option>
                            ))}
                        </select>
                        <select
                            value={formData.month}
                            onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                            required
                        >
                            <option value="">MM</option>
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, i) => (
                                <option key={i} value={(i + 1).toString().padStart(2, '0')}>{m}</option>
                            ))}
                        </select>
                        <select
                            value={formData.year}
                            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                            required
                        >
                            <option value="">YYYY</option>
                            {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(y => (
                                <option key={y} value={y}>{y}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Gender */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gender <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                            { value: 'male', label: 'Male' },
                            { value: 'female', label: 'Female' },
                            { value: 'other', label: 'Other' },
                            { value: 'prefer-not-to-say', label: 'Prefer not to say' },
                        ].map(option => (
                            <label
                                key={option.value}
                                className={`
                  flex items-center justify-center px-4 py-3 border-2 rounded-lg cursor-pointer transition-all
                  ${formData.gender === option.value ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-gray-300 hover:border-primary-300'}
                `}
                            >
                                <input
                                    type="radio"
                                    name="gender"
                                    value={option.value}
                                    checked={formData.gender === option.value}
                                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                    className="sr-only"
                                />
                                <span className="text-sm font-medium">{option.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Address */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <div className="space-y-3">
                        <input
                            type="text"
                            value={formData.houseNo}
                            onChange={(e) => setFormData({ ...formData, houseNo: e.target.value })}
                            placeholder="House/Flat No., Building Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                        />
                        <input
                            type="text"
                            value={formData.street}
                            onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                            placeholder="Street, Locality"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <input
                                type="text"
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                placeholder="City *"
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                required
                            />
                            <input
                                type="text"
                                value={formData.state}
                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                placeholder="State *"
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                required
                            />
                            <input
                                type="text"
                                value={formData.pinCode}
                                onChange={(e) => setFormData({ ...formData, pinCode: e.target.value.replace(/\D/g, '').slice(0, 6) })}
                                placeholder="PIN Code *"
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Alternate Phone */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Alternate Contact Number
                    </label>
                    <input
                        type="tel"
                        value={formData.alternatePhone}
                        onChange={(e) => setFormData({ ...formData, alternatePhone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                    />
                    <p className="text-sm text-gray-500 mt-1">(Optional, but recommended)</p>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                    />
                    <p className="text-sm text-gray-500 mt-1">(Optional)</p>
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
                    Continue
                </button>
            </div>
        </form>
    )
}
