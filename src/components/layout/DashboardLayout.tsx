function DashboardLayout() {
    return (
        <div className="min-h-screen">
            {/* Sidebar */}
            <aside className="fixed inset-y-0 left-0 w-48 border-r border-slate-200 bg-white">
                {/* Sidebar content */}
            </aside>

            {/* Content */}
            <main className="ml-48 min-h-screen px-4 pb-4 pt-2">
                <div className="grid min-w-0 grid-cols-[1.96fr_1fr] gap-4">

                    {/* Main column */}
                    <section className="min-w-0 space-y-2">

                        {/* Welcome + Replies */}
                        <div className="grid grid-cols-2 gap-2">
                            <div className="min-h-28 rounded-xl border border-slate-200 bg-white">
                                {/* Welcome */}
                            </div>

                            <div className="min-h-28 rounded-xl border border-slate-200 bg-white">
                                {/* Replies */}
                            </div>
                        </div>

                        {/* Today's Tasks */}
                        <div className="min-h-29.5 rounded-xl border border-slate-200 bg-white">
                            {/* Today's Tasks */}
                        </div>

                        {/* Signals */}
                        <div className="min-h-82.5 rounded-xl border border-slate-200 bg-white">
                            {/* Signals */}
                        </div>

                    </section>

                    {/* Right column */}
                    <section className="min-w-0 space-y-2">

                        {/* Performance */}
                        <div className="min-h-58.75 rounded-xl border border-slate-200 bg-white">
                            {/* Performance */}
                        </div>

                        {/* Onboarding */}
                        <div className="min-h-82.5 rounded-xl border border-slate-200 bg-white">
                            {/* Onboarding */}
                        </div>

                    </section>

                </div>
            </main>
        </div>
    );
}

export default DashboardLayout;