import type { NextConfig } from "next";

const nextConfig: NextConfig = {

	async redirects() {
		return [
			// 裝置路由驗證：只允許 'web' 和 'machine' 作為有效的 device 參數
			// 使用負向前瞻正則表達式 (?!web|machine) 匹配任何不是 web 或 machine 的值
			// 當訪問無效的 device 路由時（如 /mobile/lobby, /desktop/lobby），自動重定向到 /web/lobby
			// {
			// 	source: "/:device((?!web|machine).*)/lobby",
			// 	destination: "/web/lobby",
			// 	permanent: false,
			// },
		];
	},
};

export default nextConfig;
