export interface UsersInRoomArgs {
	numUsers: number;
	userList: string[];
}

export interface TimerResponseArgs {
	secondsRemaining: number;
	isPaused: boolean;
	isTimerRunning: boolean;
	isBreakMode: boolean;
	originalDuration: number;
}

export interface WorkBreakResponseArgs {
	userName: string;
	isBreakMode: boolean;
}
