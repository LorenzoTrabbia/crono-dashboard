import { useEffect, useRef, useState } from 'react';
import { signals } from '../data/signals';

function useSignals() {
    const [visibleSignals, setVisibleSignals] = useState(signals);
    const [activeSignalId, setActiveSignalId] = useState<string | null>(null);
    const actionContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!activeSignalId) {
            return;
        }

        const handleOutsidePointerDown = (event: PointerEvent) => {
            if (!actionContainerRef.current?.contains(event.target as Node)) {
                setActiveSignalId(null);
            }
        };

        document.addEventListener('pointerdown', handleOutsidePointerDown);

        return () => {
            document.removeEventListener('pointerdown', handleOutsidePointerDown);
        };
    }, [activeSignalId]);

    const openSignalActions = (signalId: string) => {
        setActiveSignalId(signalId);
    };

    const removeActiveSignal = () => {
        if (!activeSignalId) {
            return;
        }

        setVisibleSignals((currentSignals) =>
            currentSignals.filter((signal) => signal.id !== activeSignalId),
        );
        setActiveSignalId(null);
    };

    return {
        visibleSignals,
        activeSignalId,
        actionContainerRef,
        openSignalActions,
        removeActiveSignal,
    };
}

export default useSignals;
