import DashboardHeader from '@/components/dashboard/DashboardHeader'
import CaseSummary from '@/components/dashboard/CaseSummary'
import FinancialOverview from '@/components/dashboard/FinancialOverview'
import Appointments from '@/components/dashboard/Appointments'
import DocumentsSnapshot from '@/components/dashboard/DocumentsSnapshot'
import ActivityTimeline from '@/components/dashboard/ActivityTimeline'
import CaseManagerCard from '@/components/dashboard/CaseManagerCard'
import QuickActions from '@/components/dashboard/QuickActions'

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardHeader />

            <div className="container-custom py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Sidebar - Quick Actions */}
                    <div className="lg:col-span-3 space-y-6">
                        <QuickActions />
                        <CaseManagerCard />
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-6 space-y-6">
                        <CaseSummary />
                        <FinancialOverview />
                        <Appointments />
                        <DocumentsSnapshot />
                    </div>

                    {/* Right Sidebar - Timeline */}
                    <div className="lg:col-span-3">
                        <ActivityTimeline />
                    </div>
                </div>
            </div>
        </div>
    )
}
