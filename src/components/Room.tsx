import { useState, useEffect } from "react";
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
import UserNameFormModal from "./Modal/UserNameFormModal";
import ModalProviderContext, {
	useModalContext,
} from "../context/ModalContext/ModalContext";
// import useModal from "../context/ModalContext/useModal";

const Room = (): JSX.Element => {
	const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
	const [timestamp, setTimestamp] = useState<number>(0);
	const [usersInRoom, setUsersInRoom] = useState<number>(0);
	const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(false);
	const formModal = useModalContext();
	// const openModal = () => {
	// 	setShowModal((prev) => !prev);
	// };

	// * Local Storage State Management
	const [userName, setUserName] = useState(
		JSON.parse(localStorage.getItem("userName")) || ""
	);

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
		<ModalProviderContext>
			<UserNameFormModal
				openModal={openModal}
				userName={userName}
				setUserName={setUserName}
				showModal={showModal}
				setShowModal={setShowModal}
			/>
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
		</ModalProviderContext>
	);
};

export default Room;
