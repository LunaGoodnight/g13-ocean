import { GameListClient } from "./GameListClient";

export async function GameList() {
	const data = await fetch("http://localhost:5009/gc/game/list", { cache: "no-store" });
	const result = await data.json();

	console.log({ result });

	return <GameListClient games={result?.Content?.Data || []} />;
}
