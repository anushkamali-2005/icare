'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PhoneVerification from '@/components/registration/PhoneVerification'
import BasicInfo from '@/components/registration/BasicInfo'
import MedicalFinancialInfo from '@/components/registration/MedicalFinancialInfo'
import Consent from '@/components/registration/Consent'
import ProgressIndicator from '@/components/registration/ProgressIndicator'
import { RegistrationData } from '@/types'

const steps = [
    { number: 1, title: 'Verification', component: PhoneVerification },
    { number: 2, title: 'Basic Info', component: BasicInfo },
    { number: 3, title: 'Medical Info', component: MedicalFinancialInfo },
    { number: 4, title: 'Consent', component: Consent },
]

export default function RegisterPage() {
    const router = useRouter()
    const [currentStep, setCurrentStep] = useState(1)
    const [registrationData, setRegistrationData] = useState<Partial<RegistrationData>>({
        countryCode: '+91',
        language: 'en',
    })

    const handleNext = (data: Partial<RegistrationData>) => {
        setRegistrationData({ ...registrationData, ...data })

        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1)
        } else {
            // Final step - submit registration
            handleSubmit({ ...registrationData, ...data })
        }
    }

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handleSubmit = async (data: Partial<RegistrationData>) => {
        try {
            // TODO: Call API to register user
            console.log('Registration data:', data)

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))

            // Redirect to success page
            router.push('/register/success')
        } catch (error) {
            console.error('Registration failed:', error)
        }
    }

    const CurrentStepComponent = steps[currentStep - 1].component

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
            <div className="container-custom">
                <div className="max-w-2xl mx-auto">
                    {/* Progress Indicator */}
                    <ProgressIndicator currentStep={currentStep} steps={steps} />

                    {/* Step Content */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mt-8">
                        <CurrentStepComponent
                            data={registrationData}
                            onNext={handleNext}
                            onBack={handleBack}
                        />
                    </div>

                    {/* Help Text */}
                    <div className="mt-6 text-center text-sm text-gray-600">
                        <p>Need help? Call our hotline: <a href="tel:1800-XXX-XXXX" className="text-primary-600 font-semibold">1800-XXX-XXXX</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
