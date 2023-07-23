import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
// import { Helmet } from "react-helmet";
import socket from "../Socket/socket";
import ConnectionState from "../ConnectionState/ConnectionState";
import Timestamp from "../Timestamp/Timestamp";
import TimerForm from "../Controls/TimerForm";
import formatTimestamp from "../../helpers/formatTimestamp";
import shareRoom from "../../helpers/shareRoom";
import startCountdown from "../../helpers/startCountdown";
import { roomName } from "../../../common/common";
import TimerControls from "../Controls/TimerControls";
import Footer from "../Footer/Footer";
import UserBubbles from "../UserBubbles/UserBubbles";
import {
	TimerResponseArgs,
	UsersInRoomArgs,
	WorkBreakResponseArgs,
} from "../../../common/types/types";
import { Center, GlobalStyle, StyledDiv } from "./Room.styled";
import Header from "../Header/Header";
import WorkBreakButton from "../TimerButton/WorkBreakButton";
import { theme } from "../../../common/theme";
import "react-dropdown/style.css";
import AddTimerButton from "../TimerButton/AddTimerButton";
import { PercentIcon, PercentRemaining } from "../PercentIcon/PercentList";

const Room = (props: {
	globalUsersConnected: number;
	isBreak: boolean;
	setIsBreak: React.Dispatch<React.SetStateAction<boolean>>;
	isConnected: boolean;
	setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
	const {
		globalUsersConnected,
		isBreak,
		setIsBreak,
		isConnected,
		setIsConnected,
	} = props;

	const [timestamp, setTimestamp] = useState<number>(0);
	const [usersInRoom, setUsersInRoom] = useState<number>(0);
	const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
	const [userListInRoom, setUserListInRoom] = useState<string[]>([]);
	const [timerMinuteButtons, setTimerMinuteButtons] = useState<number[]>([
		1, 5, 10, 15, 20, 25, 30,
	]);
	const [isTimerRunningClient, setIsTimerRunningClient] =
		useState<boolean>(false);

	let clientOriginalDuration = 0;

	const [percentComplete, setPercentComplete] = useState<number>(0);
	// TODO: include setBreak in the destructured array of useState hook which includes 'isBreak'
	// TODO: setBreak should set the state after receiving response from the server

	const { themeGroup } = useContext(ThemeContext);

	const { workBackground, breakBackground, workGrey } =
		theme[themeGroup as keyof typeof theme];

	/*
	 * A store of the timer interval for a given client.
	 * This is used to store and clear the interval.
	 *
	 * clientTimerStore ={
	 * 	timer: setInterval(),
	 * }
	 */

	const clientTimerStore: Record<string, ReturnType<typeof setInterval>> = {};

	const pauseTimer = (): void => {
		socket.emit("pauseCountdown", { roomName });
	};

	const resetTimer = (): void => {
		socket.emit("resetCountdown", { roomName });
	};

	const onConnect = (): void => {
		socket.emit("join", roomName);
		socket.emit("timerRequest", { roomName });
		setIsConnected(true);
	};

	const onDisconnect = (): void => {
		setIsConnected(false);
	};

	const onUsersInRoom = ({ numUsers, userList }: UsersInRoomArgs): void => {
		setUsersInRoom(numUsers);
		setUserListInRoom(userList);
	};

	const onTimerResponse = ({
		secondsRemaining,
		isPaused,
		isTimerRunning,
		isBreakMode,
		originalDuration,
	}: TimerResponseArgs): void => {
		setTimestamp(secondsRemaining);

		setIsTimerPaused(isPaused);

		startCountdown({
			durationInSeconds: secondsRemaining,
			clientTimerStore,
			setTimestamp,
			isTimerPaused: isPaused,
		});

		setIsTimerRunningClient(isTimerRunning);

		setIsBreak(isBreakMode);

		clientOriginalDuration = originalDuration;
		setPercentComplete(
			PercentRemaining({
				secondsRemaining,
				originalDuration: clientOriginalDuration,
			}) || 0
		);

		console.log("onTimerResponse", {
			secondsRemaining,
			isPaused,
			isTimerRunning,
		});
	};

	// eslint-disable-next-line no-shadow
	const onWorkBreakResponse = ({
		userName,
		isBreakMode,
	}: WorkBreakResponseArgs): void => {
		setIsBreak(isBreakMode);
		console.log("isBreak", { userName, isBreakMode });
	};

	useEffect(() => {
		socket.on("connect", onConnect);
		socket.on("disconnect", onDisconnect);
		socket.on("timerResponse", onTimerResponse);
		socket.on("usersInRoom", onUsersInRoom);
		socket.on("workBreakResponse", onWorkBreakResponse);

		return () => {
			socket.off("connect", onConnect);
			socket.off("disconnect", onDisconnect);
			socket.off("timerResponse", onTimerResponse);
			socket.off("usersInRoom", onUsersInRoom);
			socket.off("workBreakResponse", onWorkBreakResponse);
		};
	}, []);

	useEffect(() => {
		console.log({ timestamp, isTimerPaused });
		// update the document title, with roomName and timestamp
		document.title = `${formatTimestamp(timestamp)}`;
	}, [isTimerPaused, timestamp]);

	useEffect(() => {
		console.log("URL", window.location.href);
		console.log("roomId:", roomName);
	}, [isConnected]);



	return (
		<>

			<Header isBreak={isBreak} />
			<GlobalStyle
				backColor={!isBreak ? workBackground : breakBackground}
			/>
			<StyledDiv>
				<Center>
					<Timestamp
						timestamp={timestamp}
						color={workGrey}
						roomName={roomName}
						timerMinuteButtons={timerMinuteButtons}
						isTimerRunningClient={isTimerRunningClient}
						isBreak={isBreak}
					/>
					<AddTimerButton
						timerMinuteButtons={timerMinuteButtons}
						setTimerMinuteButtons={setTimerMinuteButtons}
					/>
					<WorkBreakButton roomName={roomName} isBreak={isBreak} />
					<TimerControls
						pauseTimer={pauseTimer}
						isTimerPaused={isTimerPaused}
						resetTimer={resetTimer}
					/>
					<TimerForm />

					<button type="button" onClick={shareRoom}>
						Share Room
					</button>
				</Center>
				<UserBubbles userListInRoom={userListInRoom} />
				<Footer
					numUsers={globalUsersConnected}
					isBreak={isBreak}
					usersInRoom={usersInRoom}
					connectionStatus={
						<ConnectionState isConnected={isConnected} />
					}
				/>
			</StyledDiv>
		</>
	);
};

export default Room;
