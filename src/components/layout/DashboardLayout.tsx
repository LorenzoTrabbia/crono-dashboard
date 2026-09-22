import RepliesCard from "../dashboard/RepliesCard";
import TodaysTasks from "../dashboard/TodaysTasks";
import WelcomeCard from "../dashboard/WelcomeCard";
import Sidebar from "./Sidebar";

function DashboardLayout() {
    return (
        <div className="min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Content */}
            <main className="ml-48 min-h-screen p-4">
                <div className="grid min-w-0 grid-cols-[1.96fr_1fr] gap-2">
                    {/* Welcome + Replies */}
                    <div className="grid min-w-0 grid-cols-2 gap-2">
                        <WelcomeCard />
                        <RepliesCard />
                    </div>

                    {/* Performance */}
                    <div className="row-span-2 min-w-0 rounded-xl border border-slate-200 bg-white">
                        {/* Performance */}
                    </div>

                    {/* Today's Tasks */}
                    <div className="min-w-0">
                        <TodaysTasks />
                    </div>

                    {/* Signals */}
                    <div className="min-h-82.5 min-w-0 rounded-xl border border-slate-200 bg-white">
                        {/* Signals */}
                    </div>

                    {/* Onboarding */}
                    <div className="min-h-82.5 min-w-0 rounded-xl border border-slate-200 bg-white">
                        {/* Onboarding */}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default DashboardLayout;