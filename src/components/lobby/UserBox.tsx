"use client";

import MemberCardBtn from "../popup/member/MemberCardBtn";

const UserBox = () => {
	return (
		<div className="flex flex-row items-center gap-4">
			<div className="h-24 w-24 overflow-hidden rounded-full">
				<img
					width={96}
					height={96}
					className="h-full w-full object-cover"
					src="/images/user/user_default.jpg"
					alt=""
				/>
			</div>
			<div className="flex flex-col">
				<div>新竹爆肝工程師</div>
				<div className="">
					<MemberCardBtn />
				</div>
			</div>
		</div>
	);
};

export default UserBox;
