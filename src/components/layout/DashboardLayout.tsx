import OnboardingCard from "../dashboard/OnboardingCard";
import PerformanceCard from "../dashboard/PerformanceCard";
import RepliesCard from "../dashboard/RepliesCard";
import SignalsCard from "../dashboard/SignalsCard";
import TodaysTasksCard from "../dashboard/TodaysTasksCard";
import WelcomeCard from "../dashboard/WelcomeCard";
import Sidebar from "./Sidebar";

function DashboardLayout() {
    return (
        <div className="min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Content */}
            <main className="ml-48 min-h-screen p-4">
                <div className="grid h-[calc(100vh-2rem)] min-h-0 min-w-0 grid-rows-[auto_auto_minmax(0,2fr)] grid-cols-[1.96fr_1fr] gap-2">
                    {/* Welcome + Replies */}
                    <div className="grid min-w-0 grid-cols-2 gap-2">
                        <WelcomeCard />
                        <RepliesCard />
                    </div>

                    {/* Performance */}
                    <div className="row-span-2 min-w-0">
                        <PerformanceCard />
                    </div>

                    {/* Today's Tasks */}
                    <div className="min-w-0">
                        <TodaysTasksCard />
                    </div>

                    {/* Signals */}
                    <div className="min-h-0 min-w-0">
                        <SignalsCard />
                    </div>

                    {/* Onboarding */}
                    <div className="min-h-0 min-w-0">
                        <OnboardingCard />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default DashboardLayout;