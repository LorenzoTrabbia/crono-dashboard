import {
    BriefcaseBusiness,
    CheckSquare,
    Link2,
    Target,
    UserRoundPlus,
} from 'lucide-react';

const onboardingItems = [
    {
        label: 'Integrations Setup',
        duration: '5 min',
        icon: Link2,
        iconClassName: 'bg-[#DDF5F4] text-[#0A9B94]',
    },
    {
        label: 'Add new Contact',
        duration: '5 min',
        icon: BriefcaseBusiness,
        iconClassName: 'bg-[#DCEEFF] text-[#458FF5]',
    },
    {
        label: 'Create your first sequence',
        duration: '10 min',
        icon: Target,
        iconClassName: 'bg-[#FCE5F7] text-[#D840C3]',
    },
    {
        label: 'Add contacts to sequence',
        duration: '5 min',
        icon: UserRoundPlus,
        iconClassName: 'bg-[#FFF3D3] text-[#E5AD00]',
    },
    {
        label: 'Run your first task',
        duration: '10 min',
        icon: CheckSquare,
        iconClassName: 'bg-[#E8DFFF] text-[#8754E8]',
    },
];

function OnboardingCard() {
    return (
        <div className="rounded-xl border border-[#e4eaf1] bg-white p-3">
            <h2 className="px-1 text-[13px] font-semibold text-[#0f1f3d]">
                Onboarding
            </h2>

            <div className="mt-1">
                {onboardingItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.label}
                            className={[
                                'flex h-15.5 items-center gap-3 px-1',
                                index > 0 ? 'border-t border-[#e4eaf1]' : '',
                            ].join(' ')}
                        >
                            <div
                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${item.iconClassName}`}
                            >
                                <Icon className="h-4 w-4" />
                            </div>
                            <span className="min-w-0 flex-1 truncate text-[12px] font-semibold text-[#0f1f3d]">
                                {item.label}
                            </span>
                            <span className="text-[12px] text-[#71809a]">
                                {item.duration}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default OnboardingCard;