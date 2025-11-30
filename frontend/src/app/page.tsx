import Hero from '@/components/landing/Hero'
import Statistics from '@/components/landing/Statistics'
import EightPillars from '@/components/landing/EightPillars'
import HowItWorks from '@/components/landing/HowItWorks'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <Statistics />
            <EightPillars />
            <HowItWorks />
            <Footer />
        </main>
    )
}
