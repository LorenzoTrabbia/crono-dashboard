import { CheckCircle2, Trash2 } from 'lucide-react';

type SignalActionMenuProps = {
    open: boolean;
    onComplete: () => void;
    onDelete: () => void;
};

function SignalActionMenu({
    open,
    onComplete,
    onDelete,
}: SignalActionMenuProps) {
    if (!open) {
        return null;
    }

    return (
        <div
            role="dialog"
            aria-label="Signal actions"
            className="absolute right-0 top-full z-30 p-1 mt-1 w-42 overflow-hidden rounded-xl border border-[#e4eaf1] bg-white shadow-lg"
        >
            <button
                type="button"
                onClick={onComplete}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-[11px] font-medium text-[#0f1f3d] hover:bg-[#E9F8F8] hover:text-[#0A9B94] hover:cursor-pointer"
            >
                <span>Complete</span>
                <CheckCircle2 className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={onDelete}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-[11px] font-medium text-[#0f1f3d] hover:bg-[#F9E5E5] hover:text-[#D9534F] hover:cursor-pointer"
            >
                <span>Delete</span>
                <Trash2 className="h-4 w-4" />
            </button>
        </div>
    );
}

export default SignalActionMenu;
