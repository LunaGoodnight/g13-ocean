import { User } from "@/components/User";
import { QRCode } from "@/app/lobby/QrCode";

export default async function Demo() {
	const data = await fetch("http://localhost:5009/", { cache: "no-store" });
	const result = await data.json()
	return (
		<div className='flex align-bottom justify-center'>
			<User />
			<QRCode />
		</div>
	);
}
