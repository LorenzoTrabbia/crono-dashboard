import { ChevronRight, Mailbox } from 'lucide-react';
import { avatars } from '../../data/replies';

function RepliesCard() {
    return (
        <div className="rounded-xl border border-[#e4eaf1] bg-white p-3">
            {/* Header */}
            <div className="flex items-center justify-between px-1">
                <h2 className="text-[13px] font-semibold text-[#0f1f3d]">
                    Replies
                </h2>

                <button
                    type="button"
                    className="flex items-center gap-1 text-[12px] font-medium text-[#0A9B94]"
                >
                    <span>Open inbox</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                </button>
            </div>

            {/* Content */}
            <div className="mt-2 flex h-16 items-center justify-between rounded-lg bg-[#E9F8F8] px-4">
                <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CEEDED]">
                        <Mailbox className="h-5 w-5 text-[#0A9B94]" />
                    </div>

                    <span className="text-[30px] font-medium leading-none tracking-[-0.03em] text-[#3f4c63]">
                        24
                    </span>
                </div>

                <div className="flex items-center">
                    {avatars.map((avatar, index) => (
                        <div
                            key={avatar.alt}
                            className={[
                                'flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-[#D5E0F0] bg-white',
                                index > 0 ? '-ml-2' : '',
                            ].join(' ')}
                        >
                            <img
                                src={avatar.src}
                                alt={avatar.alt}
                                className={[
                                    'h-full w-full object-contain',
                                    avatar.imageClassName,
                                ].join(' ')}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RepliesCard;