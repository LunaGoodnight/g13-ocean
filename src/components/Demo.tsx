import { User } from "@/components/User";
import { QRCode } from "@/app/lobby/QrCode";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

async function fetchServerInfo() {
	try {
		const apiUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:5009";
		const data = await fetch(`${apiUrl}/`, {
			cache: "no-store"
		});

		if (!data.ok) {
			throw new Error(`API responded with status: ${data.status}`);
		}

		return await data.json();
	} catch (error) {
		console.error("Failed to fetch server info:", error);
		return null;
	}
}

export default async function Demo() {
	const result = await fetchServerInfo();

	return (
		<div className='flex align-bottom justify-center'>
			<User />
			<QRCode />
		</div>
	);
}
