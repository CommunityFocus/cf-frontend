import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";
import socket from "../../components/Socket/socket";
import { ITimerRooms } from "../../../common/types/types";
import RoomList from "../../components/RoomList/RoomList";
import { Centered, StyledTitle } from "./StatRoom.styled";
import Header from "../../components/Header/Header";
import { GlobalStyle } from "../Room/Room.styled";
import { theme } from "../../../common/theme";
import Footer from "../../components/Footer/Footer";
import ConnectionState from "../../components/ConnectionState/ConnectionState";

export interface IPublicRoom {
	isBreak: boolean;
	globalUsersConnected: number;
	isConnected: boolean;
}

export const PublicRoom = (props: IPublicRoom): JSX.Element => {
	const { isBreak, globalUsersConnected, isConnected } = props;
	const [timerRooms, setTimerRooms] = useState<ITimerRooms[]>([]);
	const onPublicTimers = ({
		roomStats,
	}: {
		roomStats: ITimerRooms[];
	}): void => {
		setTimerRooms(roomStats);
	};

	const { themeGroup } = useContext(ThemeContext);

	const { workBackground, breakBackground, workGrey } =
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
				<StyledTitle color={workGrey}>Public Timers</StyledTitle>
				<RoomList rooms={timerRooms} isBreak={isBreak} />
			</Centered>
			<Footer
				numUsers={globalUsersConnected}
				isBreak={isBreak}
				connectionStatus={<ConnectionState isConnected={isConnected} />}
			/>
		</>
	);
};
