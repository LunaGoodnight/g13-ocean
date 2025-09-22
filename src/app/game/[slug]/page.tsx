import { Game } from "@/app/game/[slug]/Game";

import { Nav } from "@/app/game/[slug]/Nav";
import { PrizePoolSectionWithCountUp } from "@/app/game/[slug]/PrizePoolSectionWithCountUp";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	return (
		<div className="min-h-full">
			<PrizePoolSectionWithCountUp />
			<Game slug={slug} />
			<Nav />
		</div>
	);
}
