export interface UsersInRoomArgs {
	numUsers: number;
	userList: string[];
}

export interface TimerResponseArgs {
	secondsRemaining: number;
	isPaused: boolean;
}

export interface WorkBreakResponseArgs {
	userName: string;
	isBreakMode: boolean;
}
