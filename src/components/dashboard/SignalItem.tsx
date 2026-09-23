import type { Signal } from '../../types/dashboard';
import type { RefObject } from 'react';
import SignalActionMenu from './SignalActionMenu';

type SignalItemProps = {
    signal: Signal;
    onAction: () => void;
    actionOpen: boolean;
    onComplete: () => void;
    onDelete: () => void;
    actionContainerRef?: RefObject<HTMLDivElement | null>;
};

function SignalItem({
    signal,
    onAction,
    actionOpen,
    onComplete,
    onDelete,
    actionContainerRef,
}: SignalItemProps) {
    return (
        <div className="flex min-w-0 items-center gap-3 border-b border-[#e4eaf1] px-3 py-2.5 last:border-b-0">
            <div className="relative h-7 w-7 shrink-0">
                <span className="absolute -left-0.5 top-0 z-10 h-1.5 w-1.5 rounded-full bg-[#F9BB06]" />
                <img
                    src={signal.avatar}
                    alt=""
                    className="h-7 w-7 rounded-full border border-[#D5E0F0] bg-[#182538] object-cover"
                />
            </div>

            <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-semibold text-[#0f1f3d]">
                    {signal.actor}{' '}
                    <span className="font-medium">{signal.description}</span>{' '}
                    {signal.descriptionHighlight && (
                        <>
                            <span className={signal.descriptionHighlightClassName}>
                                {signal.descriptionHighlight}
                            </span>{' '}
                            <span className="font-medium">
                                {signal.descriptionAfterHighlight}
                            </span>
                        </>
                    )}
                </p>
                <div className="mt-0.5 flex min-w-0 items-center gap-1 text-[10px]">
                    <span className={signal.categoryClassName}>{signal.category}</span>
                    {signal.tag && (
                        <span className="rounded bg-[#E9F8F8] px-1 text-[#0A9B94]">
                            {signal.tag}
                        </span>
                    )}
                </div>
            </div>

            <span className="hidden shrink-0 text-[10px] text-[#71809a] sm:block">
                {signal.date}
            </span>
            <div ref={actionContainerRef} className="relative shrink-0">
                <button
                    type="button"
                    onClick={onAction}
                    className="rounded-full bg-[#1AB8B3] px-4 py-1.5 text-[11px] font-medium text-white hover:cursor-pointer"
                >
                    Action
                </button>
                <SignalActionMenu
                    open={actionOpen}
                    onComplete={onComplete}
                    onDelete={onDelete}
                />
            </div>
        </div>
    );
}

export default SignalItem;
