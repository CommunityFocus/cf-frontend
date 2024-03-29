export interface UsersInRoomArgs {
	numUsers: number;
	userList: string[];
}

export interface TimerResponseArgs {
	secondsRemaining: number;
	isPaused: boolean;
	isTimerRunning: boolean;
	isBreakMode: boolean;
}

export interface WorkBreakResponseArgs {
	userNameFromServer: string;
	isBreakMode: boolean;
}
