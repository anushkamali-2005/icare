'use client'

import { Phone, MapPin, IndianRupee, Clock, CheckCircle } from 'lucide-react'

export default function TestBookingPage() {
    const tests = [
        {
            id: 1,
            name: 'Mammography',
            description: 'X-ray imaging of the breast to detect breast cancer',
            indication: 'Women aged 40-65, family history of breast cancer',
            priceRange: '₹800 - ₹2,000',
            duration: '15-30 minutes',
            preparation: 'Avoid deodorant, powder, or lotion on the day of test'
        },
        {
            id: 2,
            name: 'Pap Smear',
            description: 'Test to detect cervical cancer and precancerous conditions',
            indication: 'Women aged 21-65',
            priceRange: '₹500 - ₹1,500',
            duration: '10-20 minutes',
            preparation: 'Avoid intercourse 48 hours before test, not during menstruation'
        },
        {
            id: 3,
            name: 'PSA Test (Prostate)',
            description: 'Blood test to measure prostate-specific antigen levels',
            indication: 'Men aged 50+, family history of prostate cancer',
            priceRange: '₹600 - ₹1,200',
            duration: '5-10 minutes',
            preparation: 'No special preparation required'
        },
        {
            id: 4,
            name: 'LDCT (Low-Dose CT Scan)',
            description: 'Imaging test to detect lung cancer in early stages',
            indication: 'Smokers aged 50-80, heavy smoking history',
            priceRange: '₹4,000 - ₹10,000',
            duration: '10-15 minutes',
            preparation: 'Remove metal objects, may need to fast for 4 hours'
        },
        {
            id: 5,
            name: 'Colonoscopy',
            description: 'Examination of the colon to detect colorectal cancer',
            indication: 'Adults aged 45+, family history of colorectal cancer',
            priceRange: '₹3,000 - ₹8,000',
            duration: '30-60 minutes',
            preparation: 'Bowel preparation required (laxatives), fasting'
        }
    ]

    const centers = [
        {
            id: 1,
            name: 'Tata Memorial Hospital',
            location: 'Parel, Mumbai',
            address: 'Dr. Ernest Borges Marg, Parel East, Mumbai - 400012',
            phone: '+91-22-2417-7000',
            tests: ['Mammography', 'Pap Smear', 'PSA Test', 'LDCT', 'Colonoscopy'],
            accreditation: 'NABL, NABH',
            timings: 'Mon-Sat: 8:00 AM - 6:00 PM'
        },
        {
            id: 2,
            name: 'Kokilaben Dhirubhai Ambani Hospital',
            location: 'Andheri, Mumbai',
            address: 'Rao Saheb Achutrao Patwardhan Marg, Four Bungalows, Andheri West, Mumbai - 400053',
            phone: '+91-22-4269-6969',
            tests: ['Mammography', 'Pap Smear', 'PSA Test', 'LDCT', 'Colonoscopy'],
            accreditation: 'NABL, NABH, JCI',
            timings: 'Mon-Sun: 24/7'
        },
        {
            id: 3,
            name: 'Nanavati Hospital',
            location: 'Vile Parle, Mumbai',
            address: 'SV Road, Vile Parle West, Mumbai - 400056',
            phone: '+91-22-2626-7777',
            tests: ['Mammography', 'Pap Smear', 'PSA Test', 'LDCT'],
            accreditation: 'NABL, NABH',
            timings: 'Mon-Sat: 7:00 AM - 8:00 PM'
        },
        {
            id: 4,
            name: 'Apollo Hospital',
            location: 'Navi Mumbai',
            address: 'Plot No. 13, Parsik Hill Road, Sector 23, CBD Belapur, Navi Mumbai - 400614',
            phone: '+91-22-3982-3982',
            tests: ['Mammography', 'Pap Smear', 'PSA Test', 'LDCT', 'Colonoscopy'],
            accreditation: 'NABL, NABH, JCI',
            timings: 'Mon-Sun: 24/7'
        },
        {
            id: 5,
            name: 'Lilavati Hospital',
            location: 'Bandra, Mumbai',
            address: 'A-791, Bandra Reclamation, Bandra West, Mumbai - 400050',
            phone: '+91-22-2640-0000',
            tests: ['Mammography', 'Pap Smear', 'PSA Test', 'LDCT', 'Colonoscopy'],
            accreditation: 'NABL, NABH',
            timings: 'Mon-Sun: 24/7'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold mb-2">Diagnostic Test Booking</h1>
                    <p className="text-xl opacity-90">Book cancer screening tests at trusted diagnostic centers</p>
                </div>
            </div>

            <div className="container-custom py-12">
                {/* Tests Catalog */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Screening Tests</h2>
                    <div className="space-y-6">
                        {tests.map(test => (
                            <div key={test.id} className="card">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{test.name}</h3>
                                        <p className="text-gray-600 mb-4">{test.description}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-purple-600">{test.priceRange}</div>
                                        <div className="text-sm text-gray-500">Price Range</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <div className="font-semibold text-gray-900 text-sm">Recommended For:</div>
                                            <div className="text-sm text-gray-600">{test.indication}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <div className="font-semibold text-gray-900 text-sm">Duration:</div>
                                            <div className="text-sm text-gray-600">{test.duration}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <div className="font-semibold text-gray-900 text-sm">Preparation:</div>
                                            <div className="text-sm text-gray-600">{test.preparation}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Diagnostic Centers */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Partner Diagnostic Centers</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {centers.map(center => (
                            <div key={center.id} className="card">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{center.name}</h3>
                                        <div className="flex items-center space-x-2 mb-2">
                                            {center.accreditation.split(', ').map(acc => (
                                                <span key={acc} className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                                                    {acc}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-4">
                                    <div className="flex items-start space-x-3">
                                        <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <div className="font-semibold text-gray-900">{center.location}</div>
                                            <div className="text-sm text-gray-600">{center.address}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Phone className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                        <div>
                                            <div className="font-semibold text-gray-900">Call to Book</div>
                                            <a href={`tel:${center.phone}`} className="text-purple-600 hover:text-purple-700 font-medium">
                                                {center.phone}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Clock className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                        <div>
                                            <div className="font-semibold text-gray-900">Timings</div>
                                            <div className="text-sm text-gray-600">{center.timings}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t pt-4">
                                    <div className="font-semibold text-gray-900 mb-2">Tests Available:</div>
                                    <div className="flex flex-wrap gap-2">
                                        {center.tests.map(test => (
                                            <span key={test} className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">
                                                {test}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href={`tel:${center.phone}`}
                                    className="btn-primary w-full mt-4 flex items-center justify-center space-x-2"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>Call to Book Appointment</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Info Box */}
                <div className="card bg-blue-50 border-2 border-blue-200 mt-12">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">How to Book</h3>
                    <ol className="space-y-3">
                        <li className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                            <div>
                                <div className="font-semibold text-blue-900">Choose your test</div>
                                <div className="text-sm text-blue-700">Select the screening test you need from the list above</div>
                            </div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                            <div>
                                <div className="font-semibold text-blue-900">Select a diagnostic center</div>
                                <div className="text-sm text-blue-700">Choose a center based on location and convenience</div>
                            </div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                            <div>
                                <div className="font-semibold text-blue-900">Call to book your appointment</div>
                                <div className="text-sm text-blue-700">Contact the center directly to schedule your test</div>
                            </div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                            <div>
                                <div className="font-semibold text-blue-900">Visit the center on your appointment date</div>
                                <div className="text-sm text-blue-700">Bring your ID proof and follow preparation instructions</div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}
