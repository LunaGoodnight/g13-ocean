// 只有 web mode 才有 Login Page
import { AccountList } from "@/app/login/AccountList";

export default async function LoginPage() {
	return (
		<div>
			<AccountList />
		</div>
	);
}
