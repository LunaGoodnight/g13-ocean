"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import mockSocket from "@/app/game/[slug]/utils/mockSocket";

interface JackpotResponse {
	event: string;
	data: {
		jackpotId: number;
		jackpotAmount: number;
	};
}

export const PrizePoolSectionWithCountUp = () => {
	const [prizePool, setPrizePool] = useState(331724.5);
	const previousValue = useRef(331724.5);

	useEffect(() => {
		mockSocket.on("JACKPOT_AMOUNT_CHANGE", (response: JackpotResponse) => {
			previousValue.current = prizePool;
			setPrizePool(response.data.jackpotAmount);
		});

		return () => {
			mockSocket.off("JACKPOT_AMOUNT_CHANGE");
		};
	}, [prizePool]);

	return (
		<div className="relative bg-[url('/images/purpleSky.webp')] bg-cover bg-center h-[60vh] w-full flex flex-col justify-center items-center gap-4">
			<div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />
			<div className="z-10 flex flex-col justify-center items-center gap-4">
				<h2 className="text-2xl font-bold text-amber-100">綜合獎池</h2>
				<div className="bg-amber-900 p-5">
					<div className="text-6xl font-bold text-orange-500 tabular-nums">
						$
						<CountUp
							start={previousValue.current}
							end={prizePool}
							duration={1.8}
							separator=","
							decimals={2}
							preserveValue={true}
						/>
					</div>
				</div>
				<h2 className="text-2xl font-bold text-amber-100">組合獎池</h2>
				<div className="bg-amber-900 p-5">
					<div className="text-6xl font-bold text-orange-500 tabular-nums">
						$
						<CountUp
							start={previousValue.current}
							end={prizePool}
							duration={1.8}
							separator=","
							decimals={2}
							preserveValue={true}
						/>
					</div>
				</div>
				<h2 className="text-2xl font-bold text-amber-100">特別獎池</h2>
				<div className="bg-amber-900 p-5">
					<div className="text-6xl font-bold text-orange-500 tabular-nums">
						$
						<CountUp
							start={previousValue.current}
							end={prizePool}
							duration={1.8}
							separator=","
							decimals={2}
							preserveValue={true}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
