interface RoomProps {
	globalUsersConnected: number;
	isBreak: boolean;
	setIsBreak: React.Dispatch<React.SetStateAction<boolean>>;
	isConnected: boolean;
	setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
}

export default RoomProps;
