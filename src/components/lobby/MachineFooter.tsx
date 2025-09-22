"use client";

import LogoutBtn from "../LogoutBtn";
import MachineActivityBtn from "../popup/activity/MachineActivityBtn";
import MachineBulltinBtn from "../popup/bulltin/MachineBulltinBtn";
import MachineLeaderBoardBtn from "../popup/leaderboard/MachineLeaderBoardBtn";
import MachineTaskBtn from "../popup/task/MachineTaskBtn";
import UserBox from "./UserBox";
import WalletBalance from "./WalletBalance";

const MachineFooter = () => {
	return (
		<div className="flex w-full flex-row items-center justify-between p-2 bg-amber-400">
			<div className="flex flex-row items-center">
				<UserBox />
				<WalletBalance />
			</div>

			<div className="flex flex-row gap-2">
				<MachineLeaderBoardBtn />
				<MachineActivityBtn />
				<MachineBulltinBtn />
				<MachineTaskBtn />

				<div className="pl-2">
					<LogoutBtn />
				</div>
			</div>
		</div>
	);
};

export default MachineFooter;
