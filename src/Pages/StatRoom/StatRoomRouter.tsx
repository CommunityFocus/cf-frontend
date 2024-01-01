import { useEffect } from "react";
import socket from "../../components/Socket/socket";
import { PublicRoom } from "./PublicRoom";

interface IStatRoomRouterProps {
	setIsConnected: (isConnected: boolean) => void;
	roomName: string;
	userName: string;
	isBreak: boolean;
	globalUsersConnected: number;
	isConnected: boolean;
}

const StatRoomRouter = (props: IStatRoomRouterProps): JSX.Element => {
	const {
		setIsConnected,
		roomName,
		userName,
		isBreak,
		globalUsersConnected,
		isConnected,
	} = props;

	const onConnect = (): void => {
		socket.emit("join", { roomName, userName: userName || "defaultUser" });
		setIsConnected(true);
	};

	const onDisconnect = (): void => {
		setIsConnected(false);
	};

	useEffect(() => {
		socket.on("connect", onConnect);
		socket.on("disconnect", onDisconnect);

		return () => {
			socket.off("connect", onConnect);
			socket.off("disconnect", onDisconnect);
		};
	}, []);

	return (
		<PublicRoom
			isBreak={isBreak}
			globalUsersConnected={globalUsersConnected}
			isConnected={isConnected}
			roomName={roomName}
		/>
	);
};

export default StatRoomRouter;
