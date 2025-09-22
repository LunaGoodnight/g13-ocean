
export interface IGameProps {
	Id: number;
	Name: string;
	Code: string;
	Position: number;
	CoverPhoto: null | string;
	Provider: string;
	GameType: string;
	Icon: string;
	VipLimit: string;
	JackpotId: number;
	JackpotAmount: number;
	JackpotType: number;
	JackpotHittingAmount: number;
	NeedReloadImg: number;
	IsInGameInvitation: number;
	IsMultiGameConsole: number;
	Status: string;
	WalletType: number;
	AvailableForMachine: number;
	IsStreaming: number;
}
