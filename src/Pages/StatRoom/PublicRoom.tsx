import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";
import socket from "../../components/Socket/socket";
import { Centered } from "./StatRoom.styled";
import Header from "../../components/Header/Header";
import { GlobalStyle } from "../Room/Room.styled";
import { theme } from "../../../common/theme";
import Footer from "../../components/Footer/Footer";
import ConnectionState from "../../components/ConnectionState/ConnectionState";

import PublicRoomRouter from "./PublicRoomRouter";
import { AdminContext } from "../../../common/common";
import { ITimerRooms } from "../../components/RoomList/RoomList";

export interface IPublicRoom {
	isBreak: boolean;
	globalUsersConnected: number;
	isConnected: boolean;
	roomName: string;
}

export const PublicRoom = (props: IPublicRoom): JSX.Element => {
	const { isBreak, globalUsersConnected, isConnected, roomName } = props;
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

	useEffect(() => {
		socket.on("publicTimers", onPublicTimers);

		return () => {
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
