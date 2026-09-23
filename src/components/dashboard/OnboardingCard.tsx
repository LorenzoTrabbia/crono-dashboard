import { onboardingItems } from '../../data/onboarding';

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