import Demo from "@/components/Demo";
import { GameList } from "@/components/GameList";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Home() {
	return (
		<div className="flex flex-col justify-items-center min-h-screen bg-amber-100">
			<GameList />
			<Demo />
		</div>
	);
}
