import { useEffect } from "react";
import socket from "../../components/Socket/socket";
import { PublicRoom } from "./PublicRoom";
import { AdminRoom } from "./AdminRoom";

interface IStatRoomRouterProps {
	setIsConnected: (isConnected: boolean) => void;
	roomName: string;
	userName: string;
}

const StatRoomRouter = (props: IStatRoomRouterProps): JSX.Element => {
	const { setIsConnected, roomName, userName } = props;

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

	const isAdmin = true;

	if (isAdmin) {
		return <AdminRoom />;
	}

	return <PublicRoom />;
};

export default StatRoomRouter;
