import { AlertTriangle, ChevronRight } from 'lucide-react';

const taskGroups = [
    [
        {
            label: 'Overdue',
            count: '3',
            className: 'bg-[#FFE9E9] text-[#ED4C5E]',
        },
    ],
    [
        {
            label: 'Pending Manual',
            count: '10',
            className: 'bg-[#FEF3D2] text-[#C69812]',
        },
        {
            label: 'Pending Auto',
            count: '20',
            className: 'bg-[#EAF1FB] text-[#3B85E8]',
            error: true,
        },
    ],
    [
        {
            label: 'Completed',
            count: '8',
            className: 'bg-[#E8F5D9] text-[#1A9D6E]',
        },
    ],
];

function TodaysTasksCard() {
    return (
        <div className="rounded-xl border border-[#e4eaf1] bg-white p-3">
            <div className="flex items-center justify-between px-1">
                <h2 className="text-[13px] font-semibold text-[#0f1f3d]">Today's Tasks</h2>
            </div>

            <div className="mt-2 flex items-stretch gap-2">
                {taskGroups.map((group, groupIndex) => (
                    <div key={group[0].label} className="contents">
                        <div
                            className={[
                                'flex min-w-0 flex-1 gap-2',
                                group.length === 2 ? 'flex-2' : '',
                            ].join(' ')}
                        >
                            {group.map((task) => (
                                <div
                                    key={task.label}
                                    className={`relative flex h-19 min-w-0 flex-1 flex-col justify-between rounded-xl px-3 py-3 ${task.className}`}
                                >
                                    {task.error && (
                                        <span className="absolute right-2 top-1.5 flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[9px] font-medium text-[#F04455]">
                                            1 error
                                            <AlertTriangle className="h-3 w-3" />
                                        </span>
                                    )}

                                    <span className="text-[21px] font-medium leading-none">
                                        {task.count}
                                    </span>
                                    <div className="flex min-w-0 items-center justify-between gap-1">
                                        <span className="truncate text-[12px] font-medium text-[#34415A]">
                                            {task.label}
                                        </span>
                                        {task.label !== 'Completed' && (
                                            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#8190A8]" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {groupIndex < taskGroups.length - 1 && (
                            <div className="w-px shrink-0 bg-[#e4eaf1]" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodaysTasksCard