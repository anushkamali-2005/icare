export interface RegistrationData {
    // Step 1: Phone Verification
    phone: string
    countryCode: string
    language: string
    otp?: string

    // Step 2: Basic Info
    fullName: string
    dateOfBirth: {
        day: string
        month: string
        year: string
    }
    gender: 'male' | 'female' | 'other' | 'prefer-not-to-say'
    address: {
        houseNo: string
        street: string
        city: string
        state: string
        pinCode: string
    }
    alternatePhone?: string
    email?: string

    // Step 3: Medical & Financial Info
    status: 'suspected' | 'diagnosed' | 'undergoing-treatment' | 'post-treatment' | 'caregiver'
    cancerType?: string
    stage?: string
    diagnosisDate?: {
        day: string
        month: string
        year: string
    }
    hospital?: string
    annualIncome: 'below-2l' | '2-5l' | '5-10l' | '10-20l' | 'above-20l'
    hasPMJAY: 'yes' | 'no' | 'dont-know'
    pmjayCardNumber?: string
    hasInsurance: 'yes' | 'no'
    insuranceProvider?: string
    documents?: File[]

    // Step 4: Consent
    consentDataCollection: boolean
    consentDataSharing: boolean
    consentCaseManager: boolean
    consentCommunication: boolean
    consentResearch?: boolean
    consentCSR?: boolean
    emergencyContact: {
        name: string
        relationship: string
        phone: string
    }
}

export interface User {
    id: string
    caseId: string
    phone: string
    email?: string
    fullName: string
    role: 'patient' | 'caregiver' | 'case-manager' | 'admin'
    createdAt: string
}

export interface CaseManager {
    id: string
    name: string
    photo?: string
    phone: string
    email: string
    availableHours: string
}
