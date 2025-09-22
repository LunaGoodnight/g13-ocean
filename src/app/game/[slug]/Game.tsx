"use client";

import { tempMapping } from "@/components/GameListClient";
import { useState } from "react";

const mockGame = "https://gc.devkbbgame.com/game/slot02/?buyfreespin=true&account=854_test747";
export function Game({ slug }: { slug: string }) {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div className="relative h-[30vh] w-full z-10">
			{/*<div className="absolute top-0 bg-gradient-to-b from-black to-transparent h-[10vh] z-10 pointer-events-none w-full"></div>*/}
			{isLoading && (
				<div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-900">
					<div className="flex flex-col items-center gap-4">
						<div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-600 border-t-amber-500"></div>
						<p className="text-gray-400 animate-pulse">Loading Game...</p>
					</div>
				</div>
			)}
			<iframe
				onLoad={() => {
					setTimeout(() => {
						setIsLoading(false);
					}, 500);
				}}
				src={tempMapping[slug] ?? mockGame}
				className={`h-full w-full transition-opacity duration-500 ${
					isLoading ? "opacity-0" : "opacity-100"
				}`}
				title="game"
			/>
		</div>
	);
}
