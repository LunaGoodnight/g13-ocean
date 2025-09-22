export const User = () => {
	return (
		<div className="flex items-center justify-center gap-10 p-10">
			<div className="rounded-full overflow-hidden w-[10vh] h-[10vh]">
				<img
					className="w-full"
					src="/images/user/user_default.jpg"
					alt="Picture of the user"
					// width={200}
					// height={200}
					// priority={true}
					// width={500} automatically provided
					// height={500} automatically provided
					// blurDataURL="data:..." automatically provided
					// placeholder="blur" // Optional blur-up while loading
				/>
			</div>
			<div className="text-zinc-900 text-3xl">天龍網咖：機器９５２７</div>
		</div>
	);
};
