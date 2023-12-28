import { useEffect, useState } from "react";
import socket from "../../components/Socket/socket";
import { ITimerRooms } from "../../../common/types/types";
import RoomList from "../../components/RoomList/RoomList";
import { Centered } from "./StatRoom.styled";

export interface IAdminRoom {
	setIsConnected: (isConnected: boolean) => void;
	roomName: string;
	userName: string;
}

export const AdminRoom = (): JSX.Element => {
	const [timerRooms, setTimerRooms] = useState<ITimerRooms[]>([]);
	const onPublicTimers = ({
		roomStats,
	}: {
		roomStats: ITimerRooms[];
	}): void => {
		setTimerRooms(roomStats);
	};

	useEffect(() => {
		socket.on("publicTimers", onPublicTimers);

		return () => {
			socket.off("publicTimers", onPublicTimers);
		};
	}, []);

	return (
		<Centered>
			<RoomList rooms={timerRooms} />
		</Centered>
	);
};
