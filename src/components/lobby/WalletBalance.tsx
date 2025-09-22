"use client";

const WalletBalance = () => {
	const balance = 242767.82;
	const formattedBalance = new Intl.NumberFormat("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(balance);

	return (
		<div className="inline-flex">
			<div className="flex items-center gap-3 rounded-full border border-white/30 bg-gradient-to-r px-4 py-2 shadow-[0_8px_14px_rgba(179,86,12,0.35)]">
				<div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/35 shadow-inner">
					<img src="images/money.png" alt="Wallet balance" />
				</div>
				<span className="text-xl font-semibold tracking-wide text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.45)]">
					{formattedBalance}
				</span>
			</div>
		</div>
	);
};

export default WalletBalance;
