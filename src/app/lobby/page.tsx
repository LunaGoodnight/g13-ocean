import Demo from "@/components/Demo";
import { GameList } from "@/components/GameList";
import MachineFooter from "@/components/lobby/MachineFooter";
import { permanentRedirect } from "next/navigation";

async function fetchCurrentDevice() {
	// TODO: 返回裝置"device""，後端創建專門獲取的方法，一開始放在機台內，獲取返回"machine"，其餘保持"web"
	const device: string = "machine";
	return device;
}

// Device Lobby Page
export default async function LobbyPage() {
	const device = await fetchCurrentDevice();

	// TODO: implement the fetch token methods
	const hasToken = true;
	if (!hasToken) {
		if (device === "web") {
			permanentRedirect("/login");
		}
		if (device === "machine") {
			permanentRedirect("/lobby");
		}
	}

	// 使用layout或template來決定裝置用的版型
	return (
		<>
			<GameList />
			<Demo />
			<div className="fixed left-0 bottom-0 w-full">
				<MachineFooter />
			</div>
		</>
	);
}
