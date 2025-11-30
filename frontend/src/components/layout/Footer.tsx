import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">I</span>
                            </div>
                            <span className="text-2xl font-bold text-white">ICARE</span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed mb-4">
                            India's first integrated cancer care ecosystem providing comprehensive support from prevention to survivorship.
                        </p>
                        <div className="flex space-x-3">
                            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary-400 transition-colors">Our Services</Link></li>
                            <li><Link href="/symptom-checker" className="hover:text-primary-400 transition-colors">Symptom Checker</Link></li>
                            <li><Link href="/hospital-finder" className="hover:text-primary-400 transition-colors">Find Hospital</Link></li>
                            <li><Link href="/screening-locator" className="hover:text-primary-400 transition-colors">Screening Camps</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/faq" className="hover:text-primary-400 transition-colors">FAQs</Link></li>
                            <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/partners" className="hover:text-primary-400 transition-colors">Partner With Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <div className="font-semibold text-white">Hotline</div>
                                    <a href="tel:1800-XXX-XXXX" className="hover:text-primary-400 transition-colors">1800-XXX-XXXX</a>
                                    <div className="text-xs text-gray-500">24/7 Support</div>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <div className="font-semibold text-white">Email</div>
                                    <a href="mailto:support@icare.in" className="hover:text-primary-400 transition-colors">support@icare.in</a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <div className="font-semibold text-white">Address</div>
                                    <div className="text-gray-400">New Delhi, India</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <div>
                        © 2025 ICARE. All rights reserved.
                    </div>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <span>🔒 ABDM Compliant</span>
                        <span>•</span>
                        <span>✓ Data Secure</span>
                        <span>•</span>
                        <span>Made with ❤️ in India</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
