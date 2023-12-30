import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";
import socket from "../../components/Socket/socket";
import { ITimerRooms } from "../../../common/types/types";
import RoomList from "../../components/RoomList/RoomList";
import { Centered } from "./StatRoom.styled";
import Header from "../../components/Header/Header";
import { GlobalStyle } from "../Room/Room.styled";
import { theme } from "../../../common/theme";

export interface IAdminRoom {
	// roomName: string;
	// userName: string;
	// setIsConnected: (isConnected: boolean) => void;
	isBreak: boolean;
}

export const AdminRoom = (props: IAdminRoom): JSX.Element => {
	const { isBreak } = props;
	const [timerRooms, setTimerRooms] = useState<ITimerRooms[]>([]);
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
				<h2>Public Timers</h2>
				<RoomList rooms={timerRooms} isBreak={isBreak} />
			</Centered>
		</>
	);
};
