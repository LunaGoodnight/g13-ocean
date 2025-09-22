import Demo from "@/components/Demo";
import { GameList } from "@/components/GameList";
import MachineFooter from "@/components/lobby/MachineFooter";
import { permanentRedirect } from "next/navigation";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

async function fetchCurrentDevice() {
	// TODO: return device type, backend should create dedicated method, initially set to "machine", otherwise "web"
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

	// Use layout or template to determine device layout
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
