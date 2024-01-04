import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";
import socket from "../../components/Socket/socket";
import { Centered } from "./PublicRoom.styled";
import Header from "../../components/Header/Header";
import { theme } from "../../../common/theme";
import Footer from "../../components/Footer/Footer";
import ConnectionState from "../../components/ConnectionState/ConnectionState";
import PublicRoomRouter from "./PublicRoomRouter";
import { AdminContext } from "../../../common/common";
import { ITimerRooms } from "../../components/RoomList/RoomList";
import { GlobalStyle } from "../Room/Room.styled";

export interface IPublicRoom {
	isBreak: boolean;
	globalUsersConnected: number;
	isConnected: boolean;
	roomName: string;
	setIsConnected: (isConnected: boolean) => void;
	userName: string;
}

export const PublicRoom = (props: IPublicRoom): JSX.Element => {
	const {
		isBreak,
		globalUsersConnected,
		isConnected,
		roomName,
		userName,
		setIsConnected,
	} = props;
	const [timerRooms, setTimerRooms] = useState<ITimerRooms[]>([]);

	const isAdminMode = useContext<boolean>(AdminContext);

	const onPublicTimers = ({
		roomStats,
	}: {
		roomStats: ITimerRooms[];
	}): void => {
		setTimerRooms(roomStats);
	};

	const { themeGroup } = useContext(ThemeContext);

	const { workBackground, breakBackground } =
		theme[themeGroup as keyof typeof theme];

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
		socket.on("publicTimers", onPublicTimers);

		return () => {
			socket.off("connect", onConnect);
			socket.off("disconnect", onDisconnect);
			socket.off("publicTimers", onPublicTimers);
		};
	}, []);

	return (
		<>
			<Header isBreak={isBreak} />
			<GlobalStyle
				backColor={!isBreak ? workBackground : breakBackground}
			/>
			<Centered>
				<PublicRoomRouter
					isBreak={isBreak}
					globalUsersConnected={globalUsersConnected}
					isConnected={isConnected}
					roomName={roomName}
					isAdminMode={isAdminMode}
					timerRooms={timerRooms}
					setIsConnected={setIsConnected}
					userName={userName}
				/>
			</Centered>
			<Footer
				numUsers={globalUsersConnected}
				isBreak={isBreak}
				connectionStatus={<ConnectionState isConnected={isConnected} />}
			/>
		</>
	);
};
