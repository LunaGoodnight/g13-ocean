import { QRCode } from "./QrCode";

async function fetchCurrentDevice() {
	// TODO: 返回裝置"device""，後端創建專門獲取的方法，一開始放在機台內，獲取返回"machine"，其餘保持"web"
	const device: string = "machine";
	return device;
}

export default async function Layout({ children }: { children: React.ReactNode }) {
	const device = await fetchCurrentDevice();

	if (device === "machine") {
		// 機器會有兩個div，上下不同區塊
		return (
			<main
				id="machine"
				className="flex flex-col justify-items-center min-h-screen p-8 gap-2 bg-amber-100"
			>
				{/* Upper Area */}
				<div className="h-1/2">
					<QRCode />
				</div>

				{/* Main Area */}
				<div className="h-1/2">{children} </div>
			</main>
		);
	}

	return (
		<main
			id="web"
			className="flex flex-col justify-items-center min-h-screen p-8 gap-2 bg-amber-100"
		>
			{children}
			<span className="text-black">Web</span>
		</main>
	);
}
