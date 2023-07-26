import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConnectionState from "../ConnectionState/ConnectionState";
import Timestamp from "../Timestamp/Timestamp";
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
import Header from "../Header/Header";
import {
	Center,
	GlobalStyle,
	StyledDiv,
	StyledWorkBreakBanner,
} from "./Room.styled";
import WorkBreakButton from "../TimerButton/WorkBreakButton";
import { theme } from "../../../common/theme";
import "react-dropdown/style.css";
import AddTimerButton from "../TimerButton/AddTimerButton";
import socket from "../Socket/socket";
import ModalContext from "../Modal/ModalContext";
import UsernameContext from "../Username/UsernameContext";

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

	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	const { themeGroup } = useContext(ThemeContext);
	const { setIsModalOpen } = useContext(ModalContext);
	const { userName } = useContext(UsernameContext);

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
		socket.emit("join", { roomName, userName: userName || "defaultUser" });
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
	}: TimerResponseArgs): void => {
		setIsLoaded(true);
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
	};

	// eslint-disable-next-line no-shadow
	const onWorkBreakResponse = ({
		userNameFromServer,
		isBreakMode,
	}: WorkBreakResponseArgs): void => {
		setIsBreak(isBreakMode);

		console.log("isBreak", { userNameFromServer, isBreakMode });
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
		// update the document title, with roomName and timestamp
		document.title = `${formatTimestamp(timestamp)}`;
	}, [isTimerPaused, timestamp]);

	useEffect(() => {
		if (!userName) {
			setIsModalOpen(true);
		}
	}, [userName, setIsModalOpen]);

	return (
		<>
			<Header isBreak={isBreak} />
			<GlobalStyle
				backColor={!isBreak ? workBackground : breakBackground}
			/>
			<StyledDiv>
				<Center>
					<StyledWorkBreakBanner color={workGrey} isLoaded={isLoaded}>
						{isBreak
							? "Time for a break!"
							: "Let's get some work done!"}
					</StyledWorkBreakBanner>

					<Timestamp
						timestamp={timestamp}
						color={workGrey}
						roomName={roomName}
						timerMinuteButtons={timerMinuteButtons}
						isTimerRunningClient={isTimerRunningClient}
						isBreak={isBreak}
						isTimerPaused={isTimerPaused}
						isLoaded={isLoaded}
					/>
					<AddTimerButton
						timerMinuteButtons={timerMinuteButtons}
						setTimerMinuteButtons={setTimerMinuteButtons}
					/>

					<TimerControls
						pauseTimer={pauseTimer}
						isTimerPaused={isTimerPaused}
						resetTimer={resetTimer}
						shareRoom={shareRoom}
						isLoaded={isLoaded}
						isTimerRunningClient={isTimerRunningClient}
					/>

					<WorkBreakButton
						roomName={roomName}
						isBreak={isBreak}
						isTimerPaused={isTimerPaused}
						isTimerRunningClient={isTimerRunningClient}
						isLoaded={isLoaded}
					/>
				</Center>
				<ToastContainer theme="dark" pauseOnFocusLoss />
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
