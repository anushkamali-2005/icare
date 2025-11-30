'use client'

import { useState } from 'react'
import { RegistrationData } from '@/types'
import { ArrowLeft, Upload } from 'lucide-react'

interface MedicalFinancialInfoProps {
    data: Partial<RegistrationData>
    onNext: (data: Partial<RegistrationData>) => void
    onBack: () => void
}

export default function MedicalFinancialInfo({ data, onNext, onBack }: MedicalFinancialInfoProps) {
    const [formData, setFormData] = useState({
        status: data.status || '',
        cancerType: data.cancerType || '',
        stage: data.stage || '',
        diagnosisDay: data.diagnosisDate?.day || '',
        diagnosisMonth: data.diagnosisDate?.month || '',
        diagnosisYear: data.diagnosisDate?.year || '',
        hospital: data.hospital || '',
        annualIncome: data.annualIncome || '',
        hasPMJAY: data.hasPMJAY || '',
        pmjayCardNumber: data.pmjayCardNumber || '',
        hasInsurance: data.hasInsurance || '',
        insuranceProvider: data.insuranceProvider || '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        onNext({
            status: formData.status as any,
            cancerType: formData.cancerType,
            stage: formData.stage,
            diagnosisDate: formData.diagnosisDay ? {
                day: formData.diagnosisDay,
                month: formData.diagnosisMonth,
                year: formData.diagnosisYear,
            } : undefined,
            hospital: formData.hospital,
            annualIncome: formData.annualIncome as any,
            hasPMJAY: formData.hasPMJAY as any,
            pmjayCardNumber: formData.pmjayCardNumber,
            hasInsurance: formData.hasInsurance as any,
            insuranceProvider: formData.insuranceProvider,
        })
    }

    const showMedicalFields = ['diagnosed', 'undergoing-treatment', 'post-treatment'].includes(formData.status)
    const isValid = formData.status && formData.annualIncome && formData.hasPMJAY

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Medical & Financial Information</h2>
                <p className="text-gray-600">This helps us connect you with the right support and funding</p>
            </div>

            <div className="space-y-6">
                {/* Current Status */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                        Current Status <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                        {[
                            { value: 'suspected', label: 'Suspected cancer (not yet diagnosed)' },
                            { value: 'diagnosed', label: 'Diagnosed with cancer' },
                            { value: 'undergoing-treatment', label: 'Currently undergoing treatment' },
                            { value: 'post-treatment', label: 'Post-treatment / Follow-up' },
                            { value: 'caregiver', label: 'Caregiver / Family member' },
                        ].map(option => (
                            <label
                                key={option.value}
                                className={`
                  flex items-center px-4 py-3 border-2 rounded-lg cursor-pointer transition-all
                  ${formData.status === option.value ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-300'}
                `}
                            >
                                <input
                                    type="radio"
                                    name="status"
                                    value={option.value}
                                    checked={formData.status === option.value}
                                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                    className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                                />
                                <span className="ml-3 text-sm font-medium text-gray-700">{option.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Medical Details (conditional) */}
                {showMedicalFields && (
                    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Cancer Type</label>
                            <select
                                value={formData.cancerType}
                                onChange={(e) => setFormData({ ...formData, cancerType: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none bg-white"
                            >
                                <option value="">Select cancer type</option>
                                <option value="breast">Breast Cancer</option>
                                <option value="cervical">Cervical Cancer</option>
                                <option value="oral">Oral Cancer</option>
                                <option value="lung">Lung Cancer</option>
                                <option value="colorectal">Colorectal Cancer</option>
                                <option value="prostate">Prostate Cancer</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Stage (if known)</label>
                            <select
                                value={formData.stage}
                                onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none bg-white"
                            >
                                <option value="">Select stage</option>
                                <option value="I">Stage I</option>
                                <option value="II">Stage II</option>
                                <option value="III">Stage III</option>
                                <option value="IV">Stage IV</option>
                                <option value="unknown">Unknown</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Date of Diagnosis</label>
                            <div className="grid grid-cols-3 gap-3">
                                <select
                                    value={formData.diagnosisDay}
                                    onChange={(e) => setFormData({ ...formData, diagnosisDay: e.target.value })}
                                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none bg-white"
                                >
                                    <option value="">DD</option>
                                    {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
                                        <option key={d} value={d.toString().padStart(2, '0')}>{d.toString().padStart(2, '0')}</option>
                                    ))}
                                </select>
                                <select
                                    value={formData.diagnosisMonth}
                                    onChange={(e) => setFormData({ ...formData, diagnosisMonth: e.target.value })}
                                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none bg-white"
                                >
                                    <option value="">MM</option>
                                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, i) => (
                                        <option key={i} value={(i + 1).toString().padStart(2, '0')}>{m}</option>
                                    ))}
                                </select>
                                <select
                                    value={formData.diagnosisYear}
                                    onChange={(e) => setFormData({ ...formData, diagnosisYear: e.target.value })}
                                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none bg-white"
                                >
                                    <option value="">YYYY</option>
                                    {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(y => (
                                        <option key={y} value={y}>{y}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Current Hospital / Treating Doctor</label>
                            <input
                                type="text"
                                value={formData.hospital}
                                onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                                placeholder="Hospital name or doctor name (optional)"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none bg-white"
                            />
                        </div>
                    </div>
                )}

                {/* Financial Information */}
                <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Information</h3>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Annual Household Income <span className="text-red-500">*</span>
                            </label>
                            <div className="space-y-2">
                                {[
                                    { value: 'below-2l', label: 'Below ₹2 lakh (BPL)' },
                                    { value: '2-5l', label: '₹2-5 lakh' },
                                    { value: '5-10l', label: '₹5-10 lakh' },
                                    { value: '10-20l', label: '₹10-20 lakh' },
                                    { value: 'above-20l', label: 'Above ₹20 lakh' },
                                ].map(option => (
                                    <label
                                        key={option.value}
                                        className={`
                      flex items-center px-4 py-3 border-2 rounded-lg cursor-pointer transition-all
                      ${formData.annualIncome === option.value ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-300'}
                    `}
                                    >
                                        <input
                                            type="radio"
                                            name="income"
                                            value={option.value}
                                            checked={formData.annualIncome === option.value}
                                            onChange={(e) => setFormData({ ...formData, annualIncome: e.target.value })}
                                            className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                                        />
                                        <span className="ml-3 text-sm font-medium text-gray-700">{option.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Do you have PM-JAY (Ayushman Bharat) card? <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { value: 'yes', label: 'Yes' },
                                    { value: 'no', label: 'No' },
                                    { value: 'dont-know', label: "Don't know" },
                                ].map(option => (
                                    <label
                                        key={option.value}
                                        className={`
                      flex items-center justify-center px-4 py-3 border-2 rounded-lg cursor-pointer transition-all
                      ${formData.hasPMJAY === option.value ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-gray-300 hover:border-primary-300'}
                    `}
                                    >
                                        <input
                                            type="radio"
                                            name="pmjay"
                                            value={option.value}
                                            checked={formData.hasPMJAY === option.value}
                                            onChange={(e) => setFormData({ ...formData, hasPMJAY: e.target.value })}
                                            className="sr-only"
                                        />
                                        <span className="text-sm font-medium">{option.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {formData.hasPMJAY === 'yes' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">PM-JAY Card Number</label>
                                <input
                                    type="text"
                                    value={formData.pmjayCardNumber}
                                    onChange={(e) => setFormData({ ...formData, pmjayCardNumber: e.target.value })}
                                    placeholder="Enter 14-digit card number"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">Do you have health insurance?</label>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { value: 'yes', label: 'Yes' },
                                    { value: 'no', label: 'No' },
                                ].map(option => (
                                    <label
                                        key={option.value}
                                        className={`
                      flex items-center justify-center px-4 py-3 border-2 rounded-lg cursor-pointer transition-all
                      ${formData.hasInsurance === option.value ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-gray-300 hover:border-primary-300'}
                    `}
                                    >
                                        <input
                                            type="radio"
                                            name="insurance"
                                            value={option.value}
                                            checked={formData.hasInsurance === option.value}
                                            onChange={(e) => setFormData({ ...formData, hasInsurance: e.target.value })}
                                            className="sr-only"
                                        />
                                        <span className="text-sm font-medium">{option.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {formData.hasInsurance === 'yes' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Provider</label>
                                <input
                                    type="text"
                                    value={formData.insuranceProvider}
                                    onChange={(e) => setFormData({ ...formData, insuranceProvider: e.target.value })}
                                    placeholder="e.g., HDFC Ergo, Star Health"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Document Upload */}
                <div className="border-t pt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Documents (Optional)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-400 transition-colors cursor-pointer">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <p className="text-sm text-gray-600 mb-1">Drag & drop or click to upload</p>
                        <p className="text-xs text-gray-500">Medical reports, prescriptions, ID proofs</p>
                        <p className="text-xs text-gray-400 mt-2">Supported: PDF, JPG, PNG (Max 10MB each)</p>
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
                    Continue
                </button>
            </div>
        </form>
    )
}
