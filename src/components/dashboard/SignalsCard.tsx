import SignalItem from './SignalItem';
import useSignals from '../../hooks/useSignals';

function SignalsCard() {
    const {
        visibleSignals,
        activeSignalId,
        actionContainerRef,
        openSignalActions,
        removeActiveSignal,
    } = useSignals();

    return (
        <>
            <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-[#e4eaf1] bg-white">
                <div className="px-3 py-2">
                    <div className="flex items-center gap-2">
                        <h2 className="text-[13px] font-semibold text-[#0f1f3d]">Signals</h2>
                        <span className="rounded-full bg-[#F9BB06] px-2 py-0.5 text-[10px] font-semibold text-white">
                            {visibleSignals.length}
                        </span>
                    </div>
                    <p className="mt-1 text-[12px] text-[#71809a]">
                        Never miss a single opportunity: check out your top signals from your 1st-degree LinkedIn connections.
                    </p>
                </div>
                <div className="min-h-0 flex-1 overflow-y-auto">
                    {visibleSignals.map((signal) => (
                        <SignalItem
                            key={signal.id}
                            signal={signal}
                            onAction={() => openSignalActions(signal.id)}
                            actionOpen={activeSignalId === signal.id}
                            onComplete={removeActiveSignal}
                            onDelete={removeActiveSignal}
                            actionContainerRef={
                                activeSignalId === signal.id ? actionContainerRef : undefined
                            }
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default SignalsCard;