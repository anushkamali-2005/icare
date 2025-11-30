'use client'

import { useState } from 'react'
import { RegistrationData } from '@/types'

interface PhoneVerificationProps {
    data: Partial<RegistrationData>
    onNext: (data: Partial<RegistrationData>) => void
    onBack: () => void
}

export default function PhoneVerification({ data, onNext }: PhoneVerificationProps) {
    const [phone, setPhone] = useState(data.phone || '')
    const [language, setLanguage] = useState(data.language || 'en')
    const [agreedToTerms, setAgreedToTerms] = useState(false)
    const [showOTP, setShowOTP] = useState(false)
    const [otp, setOtp] = useState(['', '', '', '', '', ''])
    const [isLoading, setIsLoading] = useState(false)

    const handleSendOTP = async () => {
        if (!phone || phone.length !== 10 || !agreedToTerms) return

        setIsLoading(true)
        // TODO: Call API to send OTP
        await new Promise(resolve => setTimeout(resolve, 1000))
        setIsLoading(false)
        setShowOTP(true)
    }

    const handleOTPChange = (index: number, value: string) => {
        if (value.length > 1) return

        const newOTP = [...otp]
        newOTP[index] = value
        setOtp(newOTP)

        // Auto-focus next input
        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`)
            nextInput?.focus()
        }
    }

    const handleVerifyOTP = async () => {
        const otpValue = otp.join('')
        if (otpValue.length !== 6) return

        setIsLoading(true)
        // TODO: Call API to verify OTP
        await new Promise(resolve => setTimeout(resolve, 1000))
        setIsLoading(false)

        onNext({
            phone,
            countryCode: '+91',
            language,
            otp: otpValue,
        })
    }

    if (showOTP) {
        return (
            <div className="space-y-6">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Verify Your Mobile Number</h2>
                    <p className="text-gray-600">
                        We've sent a 6-digit code to<br />
                        <span className="font-semibold text-gray-900">+91 {phone}</span>
                    </p>
                </div>

                <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
                    <div className="flex justify-center space-x-3">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                id={`otp-${index}`}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleOTPChange(index, e.target.value)}
                                className="w-14 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                            />
                        ))}
                    </div>
                </div>

                <button
                    onClick={handleVerifyOTP}
                    disabled={otp.join('').length !== 6 || isLoading}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? 'Verifying...' : 'Verify'}
                </button>

                <div className="text-center space-y-2">
                    <p className="text-sm text-gray-600">
                        Didn't receive code? <button className="text-primary-600 font-semibold hover:underline">Resend OTP</button> (60s)
                    </p>
                    <button
                        onClick={() => setShowOTP(false)}
                        className="text-sm text-gray-600 hover:text-primary-600 font-medium"
                    >
                        Change Mobile Number
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-3xl">I</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to ICARE</h2>
                <p className="text-gray-600">Let's get you started with your cancer care journey</p>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex space-x-2">
                        <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none">
                            <option value="+91">+91</option>
                        </select>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                            placeholder="Enter 10-digit mobile number"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                        />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">We'll send you a verification code</p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Language Preference</label>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                    >
                        <option value="en">English</option>
                        <option value="hi">हिंदी (Hindi)</option>
                        <option value="bn">বাংলা (Bengali)</option>
                        <option value="te">తెలుగు (Telugu)</option>
                        <option value="mr">मराठी (Marathi)</option>
                        <option value="ta">தமிழ் (Tamil)</option>
                    </select>
                </div>

                <div className="flex items-start space-x-2">
                    <input
                        type="checkbox"
                        id="terms"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-700">
                        I agree to ICARE's{' '}
                        <a href="/terms" className="text-primary-600 hover:underline">Terms of Service</a>
                        {' '}and{' '}
                        <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>
                    </label>
                </div>
            </div>

            <button
                onClick={handleSendOTP}
                disabled={!phone || phone.length !== 10 || !agreedToTerms || isLoading}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? 'Sending...' : 'Send OTP'}
            </button>

            <div className="text-center">
                <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="/login" className="text-primary-600 font-semibold hover:underline">Login</a>
                </p>
            </div>
        </div>
    )
}
