import { useState, useEffect } from "react";
import socket from "./socket";
import ConnectionState from "./ConnectionState";
import Timestamp from "./Timestamp";
import TimerForm from "./TimerForm";
import formatTimestamp from "../helpers/formatTimestamp";
import shareRoom from "../helpers/shareRoom";
import startCountdown from "../helpers/startCountdown";
import { roomName } from "../../common/common";

const Room = (): JSX.Element => {
	const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
	const [timestamp, setTimestamp] = useState<number>(0);
	const [usersInRoom, setUsersInRoom] = useState<number>(0);

	/*
	 * A store of the timer interval for a given client.
	 * This is used to store and clear the interval.
	 *
	 * clientTimerStore ={
	 * 	timer: setInterval(),
	 * }
	 */

	useEffect(() => {
		const clientTimerStore: Record<
			string,
			ReturnType<typeof setInterval>
		> = {};

		const onConnect = (): void => {
			socket.emit("join", roomName);
			socket.emit("timerRequest", { roomName });
			setIsConnected(true);
		};

		const onDisconnect = (): void => {
			setIsConnected(false);
		};

		const onUsersInRoom = (value: string): void => {
			console.log("usersInRoom", value);
			setUsersInRoom(parseInt(value));
		};

		const onTimerResponse = ({
			secondsRemaining,
			isPaused,
		}: {
			secondsRemaining: number;
			isPaused: boolean;
		}): void => {
			console.log("timerResponse", {
				secondsRemaining,
				isPaused,
				clientTimerStore,
			});
			setTimestamp(secondsRemaining);
			startCountdown({
				durationInSeconds: secondsRemaining,
				clientTimerStore,
				setTimestamp,
			});
		};

		socket.on("connect", onConnect);
		socket.on("disconnect", onDisconnect);
		socket.on("timerResponse", onTimerResponse);
		socket.on("usersInRoom", onUsersInRoom);

		return () => {
			socket.off("connect", onConnect);
			socket.off("disconnect", onDisconnect);
			socket.off("timerResponse", onTimerResponse);
			socket.off("usersInRoom", onUsersInRoom);
		};
	}, []);

	useEffect(() => {
		console.log({ timestamp });
		// update the document title, with roomName and timestamp
		document.title = `${formatTimestamp(timestamp)}-${roomName}`;
	}, [timestamp]);

	useEffect(() => {
		console.log("URL", window.location.href);
		console.log("roomId:", roomName);
	}, [isConnected]);

	return (
		<>
			<ConnectionState isConnected={isConnected} />
			<Timestamp timestamp={timestamp} />
			<TimerForm />
			<p>Users in room: {usersInRoom}</p>
			<button type="button" onClick={shareRoom}>
				Share Room
			</button>
		</>
	);
};

export default Room;
