"use client";

const LogoutBtn = () => {
	return (
		<button
			type="button"
			className={`
				inline-flex items-center justify-center rounded-full border-4 border-white 
				bg-yellow px-4 py-1 text-md font-medium text-black shadow-sm
			`}
		>
			登出
		</button>
	);
};

export default LogoutBtn;
