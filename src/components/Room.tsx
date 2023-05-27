import { useState, useEffect } from "react";
import socket from "./socket";
import ConnectionState from "./ConnectionState";
import Timestamp from "./Timestamp";
import TimerForm from "./TimerForm";
import formatTimestamp from "../helpers/formatTimestamp";
import startCountdown from "../helpers/startTimer";

const Room = (): JSX.Element => {
	const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
	const [timestamp, setTimestamp] = useState<number>(0);
	const [usersInRoom, setUsersInRoom] = useState<number>(0);

	/*
	 * clientTimerStore ={
	 * 	timer: setInterval(),
	 * }
	 */
	const clientTimerStore: Record<string, ReturnType<typeof setInterval>> = {};

	useEffect(() => {
		const roomName = window.location.href.split("/")[3];

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
		document.title = `${formatTimestamp(timestamp)}-${
			window.location.href.split("/")[3]
		}`;
	}, [timestamp]);

	useEffect(() => {
		console.log("URL", window.location.href);
		console.log("roomId:", window.location.href.split("/")[3]);
	}, [isConnected]);

	return (
		<>
			<ConnectionState isConnected={isConnected} />
			<Timestamp timestamp={timestamp} />
			<TimerForm />
			<p>Users in room: {usersInRoom}</p>
		</>
	);
};

export default Room;
