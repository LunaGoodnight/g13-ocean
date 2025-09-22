import Demo from "@/components/Demo";
import { GameList } from "@/components/GameList";

export default function Home() {
	return (
		<div className="flex flex-col justify-items-center min-h-screen bg-amber-100">
			<GameList />
			<Demo />
		</div>
	);
}
