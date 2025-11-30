'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Phone, ArrowRight } from 'lucide-react'
import { authAPI } from '@/lib/api'

export default function LoginPage() {
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [phone, setPhone] = useState('')
    const [otp, setOtp] = useState(['', '', '', '', '', ''])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSendOTP = async () => {
        if (phone.length === 10) {
            setLoading(true)
            setError('')
            try {
                await authAPI.sendOTP(phone)
                setStep(2)
            } catch (err: any) {
                setError(err.response?.data?.error || 'Failed to send OTP. Please try again.')
            } finally {
                setLoading(false)
            }
        }
    }

    const handleOTPChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newOtp = [...otp]
            newOtp[index] = value
            setOtp(newOtp)

            if (value && index < 5) {
                const nextInput = document.getElementById(`otp-${index + 1}`)
                nextInput?.focus()
            }
        }
    }

    const handleLogin = async () => {
        const otpCode = otp.join('')
        if (otpCode.length === 6) {
            setLoading(true)
            setError('')
            try {
                await authAPI.login(phone, otpCode)
                router.push('/dashboard')
            } catch (err: any) {
                setError(err.response?.data?.error || 'Invalid OTP. Please try again.')
            } finally {
                setLoading(false)
            }
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full">
                <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-3xl">I</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                    <p className="text-gray-600">Login to access your ICARE account</p>
                </div>

                <div className="card">
                    {step === 1 ? (
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Enter Your Mobile Number</h2>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                                <div className="flex space-x-2">
                                    <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none">
                                        <option value="+91">+91</option>
                                    </select>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                        placeholder="10-digit mobile number"
                                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                        maxLength={10}
                                    />
                                </div>
                            </div>

                            {error && (
                                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                                    {error}
                                </div>
                            )}

                            <button
                                onClick={handleSendOTP}
                                disabled={phone.length !== 10 || loading}
                                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                            >
                                {loading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Phone className="w-5 h-5" />
                                        <span>Send OTP</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>

                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600">
                                    Don't have an account?{' '}
                                    <Link href="/register" className="text-primary-600 hover:underline font-semibold">
                                        Register here
                                    </Link>
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Enter OTP</h2>
                            <p className="text-sm text-gray-600 mb-6">
                                We've sent a 6-digit OTP to +91 {phone}
                            </p>

                            <div className="flex justify-center space-x-3 mb-6">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        id={`otp-${index}`}
                                        type="text"
                                        value={digit}
                                        onChange={(e) => handleOTPChange(index, e.target.value)}
                                        className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 outline-none"
                                        maxLength={1}
                                    />
                                ))}
                            </div>

                            {error && (
                                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                                    {error}
                                </div>
                            )}

                            <button
                                onClick={handleLogin}
                                disabled={otp.join('').length !== 6 || loading}
                                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        <span>Verifying...</span>
                                    </div>
                                ) : (
                                    'Login'
                                )}
                            </button>

                            <div className="mt-4 text-center">
                                <button onClick={() => setStep(1)} className="text-sm text-gray-600 hover:text-primary-600">
                                    Change number
                                </button>
                                <span className="mx-2 text-gray-400">•</span>
                                <button onClick={handleSendOTP} className="text-sm text-primary-600 hover:underline">
                                    Resend OTP
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-6 text-center text-sm text-gray-600">
                    <p>Need help? Call our 24/7 hotline:</p>
                    <a href="tel:1800-XXX-XXXX" className="text-primary-600 font-semibold">
                        1800-XXX-XXXX
                    </a>
                </div>
            </div>
        </div>
    )
}
