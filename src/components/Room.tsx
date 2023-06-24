import { useState, useEffect } from "react";
import Modal from "react-modal";
import socket from "./socket";
import ConnectionState from "./ConnectionState";
import Timestamp from "./Timestamp";
import TimerForm from "./TimerForm";
import formatTimestamp from "../helpers/formatTimestamp";
import shareRoom from "../helpers/shareRoom";
import startCountdown from "../helpers/startCountdown";
import { roomName } from "../../common/common";
import TimerButtons from "./TimerButton/TimerButtons";
import WelcomeMessage from "./WelcomeMessage";
import TimerControls from "./TimerControls";
import Footer from "./Footer";
import UserNameForm from "./UserNameForm";

// import useModal from "../context/ModalContext/useModal";

const Room = (): JSX.Element => {
	const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
	const [timestamp, setTimestamp] = useState<number>(0);
	const [usersInRoom, setUsersInRoom] = useState<number>(0);
	const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);

	// * Local Storage State Management
	const [userName, setUserName] = useState<string>(
		JSON.parse(localStorage.getItem("userName") as string) || ""
	);

	const [isModalOpen, setIsModalOpen] = useState<boolean>(userName === "");
	/*
	 * A store of the timer interval for a given client.
	 * This is used to store and clear the interval.
	 *
	 * clientTimerStore ={
	 * 	timer: setInterval(),
	 * }
	 */

	// * On change of userName changes -> local storage sets username key with userName value
	useEffect(() => {
		localStorage.setItem("userName", JSON.stringify(userName));
		if (userName === "") {
			setIsModalOpen(true);
		}
	}, [userName]);

	const pauseTimer = (): void => {
		socket.emit("pauseCountdown", { roomName });
	};

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
			setTimestamp(secondsRemaining);

			setIsTimerPaused(isPaused);

			startCountdown({
				durationInSeconds: secondsRemaining,
				clientTimerStore,
				setTimestamp,
				isTimerPaused: isPaused,
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
		console.log({ timestamp, isTimerPaused });
		// update the document title, with roomName and timestamp
		document.title = `${formatTimestamp(timestamp)}-${roomName}`;
	}, [isTimerPaused, timestamp]);

	useEffect(() => {
		console.log("URL", window.location.href);
		console.log("roomId:", roomName);
	}, [isConnected]);

	return (
		<>
			<button onClick={() => setIsModalOpen(true)} type="button">
				Change Username
			</button>
			<Modal isOpen={isModalOpen}>
				<p>this is a modal</p>
				<UserNameForm
					userName={userName}
					setUserName={setUserName}
					setIsModalOpen={setIsModalOpen}
				/>
			</Modal>
			<WelcomeMessage name={userName} />
			<ConnectionState isConnected={isConnected} />
			<Timestamp timestamp={timestamp} />
			<TimerButtons roomName={roomName} />
			<TimerControls
				pauseTimer={pauseTimer}
				isTimerPaused={isTimerPaused}
			/>
			<TimerForm />
			<p>Users in room: {usersInRoom}</p>
			<button type="button" onClick={shareRoom}>
				Share Room
			</button>
			<Footer numUsers={5} />
		</>
	);
};

export default Room;
