import {
    ChartNoAxesColumn,
    PanelsTopLeft,
    LayersPlus,
    Search,
    Zap,
    ChartNoAxesCombined,
    ListTodo,
    Mailbox,
    CirclePercent,
    ChevronDown,
    Gift,
    ChevronsLeft,
} from 'lucide-react';

const navigationItems = [
    {
        label: 'Dashboard',
        icon: PanelsTopLeft,
        active: true,
    },
    {
        label: 'Find New',
        icon: Search,
    },
    {
        label: 'Lists',
        icon: PanelsTopLeft,
    },
    {
        label: 'Templates',
        icon: LayersPlus,
    },
    {
        label: 'Sequences',
        icon: ChartNoAxesCombined,
    },
    {
        label: 'Tasks',
        icon: ListTodo,
    },
    {
        label: 'Inbox',
        icon: Mailbox,
    },
    {
        label: 'Deals',
        icon: CirclePercent,
    },
    {
        label: 'Analytics',
        icon: ChartNoAxesColumn,
    },
];

function Sidebar() {
    return (
        <aside className="fixed inset-y-0 left-0 flex w-48 flex-col border-r border-slate-200 bg-white">
            {/* Logo */}
            <div className="flex h-16 items-center gap-1 px-5">
                <span className="flex items-center gap-1 text-2xl font-bold tracking-tight text-[#0A9B94]">
                    <Zap className="h-4 w-4 fill-current" />
                    crono
                </span>
                <button
                    type="button"
                    aria-label="Collapse sidebar"
                    className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-400"
                >
                    <ChevronsLeft className="h-3 w-3" />
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 pr-3">
                <div className="space-y-1">
                    {navigationItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <button
                                key={item.label}
                                type="button"
                                className={[
                                    'relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                                    item.active
                                        ? 'text-[#0A9B94]'
                                        : 'text-slate-500',
                                ].join(' ')}
                            >
                                {item.active && (
                                    <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r bg-[#0A9B94]" />
                                )}
                                <Icon className="h-4 w-4 shrink-0" />
                                <span className="font-medium">{item.label}</span>
                                {item.label === 'Inbox' && (
                                    <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-sm bg-[#F9BB06] px-1 text-[10px] font-bold text-white">
                                        24
                                    </span>
                                )}
                                {item.label === 'Analytics' && (
                                    <ChevronDown className="ml-auto h-4 w-4 shrink-0" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Trial notice */}
                <div className="relative mx-1 mb-3 overflow-hidden rounded-md bg-[#FFF4CC] px-2 py-2">
                    <p className="relative z-10 text-[16px] font-medium text-slate-800">
                        Trial ends in 2 days
                    </p>
                    <button
                        type="button"
                        className="relative z-10 mt-1 flex items-center gap-1 rounded bg-[#F9BB06] px-1.5 py-1 text-[12px] font-medium text-white"
                    >
                        Upgrade plan
                        <Gift className="h-3 w-3" />
                    </button>
                    <span
                        aria-hidden="true"
                        className="absolute -right-3 -top-4 h-20 w-9 rotate-12 rounded-full border-[3px] border-[#F9BB06]/25"
                    />
                    <span
                        aria-hidden="true"
                        className="absolute -right-5 top-5 h-14 w-8 rotate-35 rounded-full border-[3px] border-[#F9BB06]/25"
                    />
                </div>
            </nav>

            {/* User */}
            <div className="border-t border-slate-200 p-3">
                <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-lg p-2 text-left"
                >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-700">
                        <Zap className="h-4 w-4 shrink-0" />
                    </div>

                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-slate-900">
                            William Robertson
                        </p>

                        <p className="truncate text-xs text-slate-500">
                            Sales
                        </p>
                    </div>

                </button>
            </div>
        </aside>
    );
}

export default Sidebar;