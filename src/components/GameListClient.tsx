"use client";

import { imageHostPrefix } from "@/constants/common";
import { IGameProps } from "@/types/game";
import { useRouter } from "next/navigation";

export const tempMapping: Record<string, string> = {
	"748": "https://gc.devkbbgame.com/game/slot02/?buyfreespin=true&account=854_test747",
	"273": "https://gate.stage1.bng.games/op/site-asia-bng-games/game.html?wl=demo&token=3b0a72a8-945f-11f0-933f-3e200e9f0b47&game=278&lang=zh&sound=1&platform=desktop&ts=1758179718&title=%E7%8C%AA%E5%AE%9D%E5%A4%A7%E7%9B%97&exit_url=https%3A%2F%2Fasia.bng.games%2Fgame%2Fsticky_piggy%2F&cashier_url=",
	"620": "https://gate.stage1.bng.games/op/site-asia-bng-games/game.html?wl=demo&token=65db66ae-945f-11f0-933f-3e200e9f0b47&game=391&lang=zh&sound=1&platform=desktop&ts=1758179790&title=%E5%B9%B8%E8%BF%90%E5%B8%81%E5%A4%A7%E4%BA%A8&exit_url=https%3A%2F%2Fasia.bng.games%2Fgame%2Flucky_penny%2F&cashier_url=",
	"361": "https://static-r2-sg-stage.newreels.tech/aux/games/aux_b/runner/index.html?gameName=lady_fortune&game=lady_fortune&exit_url=https%3A%2F%2Fasia.bng.games%2Fgame%2Flady_fortune%2F&key=3e24b2fc-9462-11f0-933f-3e200e9f0b47&lang=zh&wl=demo&server_url=https%3A%2F%2Fplaypoint.newreels.tech%2Fb%2Fserver&currency=FUN&platform=mob&autoplay_mode=advanced&promo_widget=1&quickspin=1&logo=bng&show_currency=1&in_game_lobby_url=https%3A%2F%2Fplaypoint.newreels.tech%2Flobby&in_game_lobby=0&send_logout_onbeforeunload=false&burger=2&ui_skin=bng&sound=1",
};

export function GameListClient({ games }: { games: IGameProps[] }) {
	const router = useRouter();

	const onGameClick = ({ Id }: { Id: number }) => {
		router.push(`/game/${Id}`);
	};

	return (
		<div className="flex flex-wrap justify-center gap-5 h-[82vh] overflow-scroll p-10">
			{games.map((item: IGameProps) => {
				const { Id, Provider, Code } = item;
				return (
					<div
						key={Id}
						className="w-1/5"
						onClick={() => onGameClick({ Id })}
						style={{ cursor: "pointer" }}
					>
						<img
							src={`${imageHostPrefix}/game/${Provider}/${Code.toLowerCase()}_zh.webp`}
							alt="game"
						/>
					</div>
				);
			})}
		</div>
	);
}
