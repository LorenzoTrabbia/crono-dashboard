function WelcomeCard() {
    return (
        <div className="rounded-xl border border-[#e4eaf1] bg-white p-5">
            <h2 className="text-[20px] font-bold leading-6 tracking-[-0.02em] text-[#0f1f3d]">
                Welcome Alex,
            </h2>

            <p className="mt-2 max-w-82.5 text-[13px] leading-5 text-[#71809a]">
                Here's your performance overview where you can track your daily and
                monthly KPIs
            </p>
        </div>
    );
}

export default WelcomeCard;