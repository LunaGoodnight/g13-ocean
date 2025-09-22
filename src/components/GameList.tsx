import { GameListClient } from "./GameListClient";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

async function fetchGameList() {
	try {
		const apiUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:5009";
		const data = await fetch(`${apiUrl}/gc/game/list`, {
			cache: "no-store"
		});

		if (!data.ok) {
			throw new Error(`API responded with status: ${data.status}`);
		}

		const result = await data.json();
		console.log({ result });

		return result?.Content?.Data || [];
	} catch (error) {
		console.error("Failed to fetch game list:", error);
		return [];
	}
}

export async function GameList() {
	const games = await fetchGameList();

	return <GameListClient games={games} />;
}
