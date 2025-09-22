import { NextRequest, NextResponse } from "next/server";

const middleware = async (req: NextRequest) => {
	const url = req.nextUrl;
	const { pathname } = url;

	// TODO: 創建獲取token和判斷token方法
	const hasToken = true;
	const hasDeviceToken = true;

	// 判斷裝置token來決定跳轉到哪。
	if (pathname === "/") {
		// 若存在任一 token，將根路徑請求導向 /lobby，否則導向 /login。
		// 如果有改device token，那麼就是跳到lobby。
		// 沒有device token，代表是手機端要判斷是否有登入
		const target = hasDeviceToken || hasToken ? "/lobby" : "/login";
		return NextResponse.redirect(new URL(target, url));
	}

	// 當token過期時，讓hasToken變成false，middleware要跳轉回lobby或是login
	if (!hasToken) {
		const target = hasDeviceToken ? "lobby" : "login";
		return NextResponse.redirect(new URL(target, url));
	}

	return NextResponse.next();
};

export default middleware;
