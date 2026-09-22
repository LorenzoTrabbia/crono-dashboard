import {
    BriefcaseBusiness,
    Euro,
    Info,
    ListTodo,
    Pencil,
    User,
    Video,
} from 'lucide-react';

const kpis = [
    {
        label: 'Contacts engaged',
        value: '0',
        target: '500',
        icon: User,
        color: '#3284F4',
        progress: '0%',
    },
    {
        label: 'Companies engaged',
        value: '0',
        target: '500',
        icon: BriefcaseBusiness,
        color: '#536FF0',
        progress: '50%',
    },
    {
        label: 'Activities',
        value: '1000',
        target: '2000',
        icon: ListTodo,
        color: '#9747FF',
        progress: '50%',
    },
    {
        label: 'Meetings',
        value: '20',
        target: '30',
        icon: Video,
        color: '#E9B400',
        progress: '50%',
    },
    {
        label: 'Deals',
        value: '100',
        target: '200',
        icon: ListTodo,
        color: '#E94BC0',
        progress: '50%',
    },
    {
        label: 'Pipeline',
        value: '50K',
        target: '100K',
        icon: Euro,
        color: '#13A77A',
        progress: '50%',
    },
];

function PerformanceCard() {
    return (
        <div className="rounded-xl border border-[#e4eaf1] bg-white p-3">
            <div className="flex items-center justify-between px-1">
                <h2 className="text-[13px] font-semibold text-[#0f1f3d]">
                    May's performance
                </h2>

                <button
                    type="button"
                    className="flex items-center gap-1 text-[12px] font-medium text-[#0A9B94]"
                >
                    <span>Edit KPIs</span>
                    <Pencil className="h-3.5 w-3.5" />
                </button>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2">
                {kpis.map((kpi) => {
                    const Icon = kpi.icon;

                    return (
                        <div
                            key={kpi.label}
                            className="rounded-lg border border-[#dfe6ef] px-2 py-1.5"
                        >
                            <div className="flex items-center justify-between gap-1 text-[11px] font-medium text-[#7A8395]">
                                <span className="truncate">{kpi.label}</span>
                                {kpi.label === 'Contacts engaged' && (
                                    <Info size={14} className='hover:cursor-pointer hover:text-black' />
                                )}
                            </div>

                            <div className="mt-2 flex items-center gap-1 text-[14px] leading-none">
                                <Icon
                                    className="h-4 w-4 shrink-0"
                                    style={{ color: kpi.color }}
                                />
                                <span style={{ color: kpi.color }}>{kpi.value}</span>
                                <span className="text-[#AAB5C6]">/{kpi.target}</span>
                            </div>

                            <div className="mt-1.5 h-0.5 rounded-full bg-[#E9EEF5]">
                                <div
                                    className="h-full rounded-full"
                                    style={{
                                        width: kpi.progress,
                                        backgroundColor: kpi.color,
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default PerformanceCard;