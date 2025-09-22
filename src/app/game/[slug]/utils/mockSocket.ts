interface JackpotResponse {
	event: string;
	data: {
		jackpotId: number;
		jackpotAmount: number;
	};
}

type Listener = (data: JackpotResponse) => void;

class MockSocket {
	private listeners: Map<string, Set<Listener>> = new Map();
	private intervalId: NodeJS.Timeout | null = null;
 	private currentValue = 331724.5;
	private incrementMin = 0.1;
	private incrementMax = 50.5;
	private jackpotId = 361;

	constructor() {
		this.startEmitting();
	}

	private startEmitting() {
		this.intervalId = setInterval(() => {
			const increment =
				Math.random() * (this.incrementMax - this.incrementMin) + this.incrementMin;
			this.currentValue += increment;

			this.emit("JACKPOT_AMOUNT_CHANGE", {
				event: "JACKPOT_AMOUNT_CHANGE",
				data: {
					jackpotId: this.jackpotId,
					jackpotAmount: this.currentValue
				}
			});
		}, 100);
	}

	private formatNumber(num: number): string {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(num);
	}

	on(event: string, callback: Listener) {
		if (!this.listeners.has(event)) {
			this.listeners.set(event, new Set());
		}
		this.listeners.get(event)?.add(callback);
	}

	off(event: string, callback?: Listener) {
		if (callback) {
			this.listeners.get(event)?.delete(callback);
		} else {
			this.listeners.delete(event);
		}
	}

	private emit(event: string, data: JackpotResponse) {
		const eventListeners = this.listeners.get(event);
		if (eventListeners) {
			eventListeners.forEach((listener) => listener(data));
		}
	}

	disconnect() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
		this.listeners.clear();
	}
}

const mockSocket = new MockSocket();
export default mockSocket;