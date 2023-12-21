import { useEffect, useState } from "react";
import socket from "../../components/Socket/socket";
import { ITimerRooms } from "../../../common/types/types";

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
		<div>
			{timerRooms.map((timerRoom: ITimerRooms) => {
				return (
					<div>
						<p>room: {timerRoom.room}</p>
						<p>Number of people: {timerRoom.numUsers}</p>
						<p>
							users in the room:
							{timerRoom.userList.map((user: string) => {
								return <div>{user}</div>;
							})}
						</p>
					</div>
				);
			})}
		</div>
	);
};