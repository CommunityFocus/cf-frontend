import { useState, useEffect, useContext } from "react";
import ReactGA from "react-ga4";
import { ThemeContext } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useWindowSize from "use-window-size-v2";
import ConnectionState from "../../components/ConnectionState/ConnectionState";
import Timestamp from "../../components/Timestamp/Timestamp";
import shareRoom from "../../helpers/shareRoom";
import startCountdown from "../../helpers/startCountdown";
import { roomName, tracker } from "../../../common/common";
import TimerControls from "../../components/Controls/TimerControls";
import Footer from "../../components/Footer/Footer";
import UserBubbles from "../../components/UserBubbles/UserBubbles";
import {
	UsersInRoomArgs,
	WorkBreakResponseArgs,
} from "../../../common/types/types";
import Header from "../../components/Header/Header";
import { Center, GlobalStyle, StyledDiv } from "./Room.styled";
import WorkBreakButton from "../../components/TimerButton/WorkBreakButton";
import { theme } from "../../../common/theme";
import "react-dropdown/style.css";
import socket from "../../components/Socket/socket";
import ModalContext from "../../components/Modal/ModalContext";
import UsernameContext from "../../components/Username/UsernameContext";
import RoomProps from "./RoomProps";
import ModalComponent from "../../components/Modal/Modal";
import AddTimerModal from "../../components/Modal/AddTimerModal";
import MessageLogs from "../../components/MessageLog/MessageLogs";
import TimerTitle from "../../components/TimerTitle/TimerTitle";
import PomoCounter from "../../components/PomoCounter/PomoCounter";
import { PomoCounterPosition } from "../../components/PomoCounter/PomoCounter.styled";
import TimerForm from "../../components/Controls/TimerForm";
import SettingsModal from "../../components/Modal/SettingsModal";

const Room = (props: RoomProps): JSX.Element => {
	const {
		globalUsersConnected,
		isBreak,
		setIsBreak,
		isConnected,
		setIsConnected,
	} = props;
	// ask for notification permission
	Notification.requestPermission();

	const { width, height } = useWindowSize();
	const showWorkButtonOnMobile = width < 300 || height < 530;
	const [usersInRoom, setUsersInRoom] = useState<number>(0);
	const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
	const [userListInRoom, setUserListInRoom] = useState<string[]>([]);
	const [workTimerMinuteButtons, setWorkTimerMinuteButtons] = useState<
		number[]
	>([]);
	const [breakTimerMinuteButtons, setBreakTimerMinuteButtons] = useState<
		number[]
	>([]);
	const [isTimerRunningClient, setIsTimerRunningClient] =
		useState<boolean>(false);

	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [isTimerAddModalOpen, setIsTimerAddModalOpen] =
		useState<boolean>(false);

	const [isSettingsModalOpen, setIsSettingsModalOpen] =
		useState<boolean>(false);

	const [isPublicRoom, setIsPublicRoom] = useState<boolean>(false);

	const [messageList, setMessageList] = useState<
		{ message: string; userName: string; date: Date }[]
	>([]);

	const [workSessions, setWorkSessions] = useState<number>(
		Number(
			JSON.parse(localStorage.getItem(roomName) || "{}").workSessions
		) || 0
	);
	const [breakSessions, setBreakSessions] = useState<number>(
		Number(
			JSON.parse(localStorage.getItem(roomName) || "{}").breakSessions
		) || 0
	);

	const { themeGroup } = useContext(ThemeContext);
	const { setIsUsernameModalOpen } = useContext(ModalContext);
	const { userName } = useContext(UsernameContext);

	const { workBackground, breakBackground, workGrey } =
		theme[themeGroup as keyof typeof theme];

	const pauseTimer = (): void => {
		socket.emit("pauseCountdown", { roomName });
	};

	const resetTimer = (): void => {
		socket.emit("resetCountdown", { roomName });
	};

	const updateTimerButtons = ({
		timerButtons,
		// eslint-disable-next-line @typescript-eslint/no-shadow
		isBreak,
	}: {
		timerButtons: number[];
		isBreak: boolean;
	}): void => {
		socket.emit("updateTimerButtons", {
			roomName,
			timerButtons,
			isBreak,
		});
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

	const onWorkBreakResponse = ({
		isBreakMode,
	}: WorkBreakResponseArgs): void => {
		setIsBreak(isBreakMode);
	};

	const onMessageLog = (message: {
		messageLog: string;
		date: Date;
	}): void => {
		setMessageList((prev) => [
			...prev,
			{
				message: message.messageLog,
				userName: userName || "Anonymous",
				date: message.date,
			},
		]);
	};

	useEffect(() => {
		tracker.setMetadata("roomName", roomName);
		ReactGA.send({
			hitType: "pageview",
			page: `/${roomName}`,
			userID: userName,
		});
	}, []);

	const onMessageLogArray = (message: {
		messageHistory: { message: string; userName: string; date: Date }[];
	}): void => {
		setMessageList(message.messageHistory);
	};

	const onTimerButtons = ({
		workTimerButtons,
		breakTimerButtons,
	}: {
		workTimerButtons: number[];
		breakTimerButtons: number[];
	}): void => {
		setWorkTimerMinuteButtons(workTimerButtons);
		setBreakTimerMinuteButtons(breakTimerButtons);
	};

	const ontogglePublicUpdate = ({
		isPublic,
	}: {
		isPublic: boolean;
	}): void => {
		setIsPublicRoom(isPublic);
	};

	useEffect(() => {
		socket.on("connect", onConnect);
		socket.on("disconnect", onDisconnect);
		socket.on("usersInRoom", onUsersInRoom);
		socket.on("workBreakResponse", onWorkBreakResponse);
		socket.on("messageLog", onMessageLog);
		socket.on("messageLogArray", onMessageLogArray);
		socket.on("timerButtons", onTimerButtons);
		socket.on("togglePublicUpdate", ontogglePublicUpdate);

		return () => {
			socket.off("connect", onConnect);
			socket.off("disconnect", onDisconnect);
			socket.off("usersInRoom", onUsersInRoom);
			socket.off("workBreakResponse", onWorkBreakResponse);
			socket.off("messageLog", onMessageLog);
			socket.off("messageLogArray", onMessageLogArray);
			socket.off("timerButtons", onTimerButtons);
		};
	}, []);

	useEffect(() => {
		if (!userName) {
			setIsUsernameModalOpen(true);
		}
	}, [userName, setIsUsernameModalOpen]);

	return (
		<>
			<Header isBreak={isBreak} />
			<GlobalStyle
				backColor={!isBreak ? workBackground : breakBackground}
			/>
			<StyledDiv>
				<Center>
					<TimerTitle
						isLoaded={isLoaded}
						workGrey={workGrey}
						isBreak={isBreak}
						isPublicRoom={isPublicRoom}
					/>

					<Timestamp
						color={workGrey}
						roomName={roomName}
						timerMinuteButtons={
							isBreak
								? breakTimerMinuteButtons
								: workTimerMinuteButtons
						}
						isTimerRunningClient={isTimerRunningClient}
						isBreak={isBreak}
						isTimerPaused={isTimerPaused}
						isLoaded={isLoaded}
						setIsLoaded={setIsLoaded}
						setIsTimerPaused={setIsTimerPaused}
						startCountdown={startCountdown}
						setIsTimerRunningClient={setIsTimerRunningClient}
						setIsBreak={setIsBreak}
						setWorkSessions={setWorkSessions}
						setBreakSessions={setBreakSessions}
					/>

					<TimerControls
						pauseTimer={pauseTimer}
						isTimerPaused={isTimerPaused}
						resetTimer={resetTimer}
						shareRoom={shareRoom}
						isLoaded={isLoaded}
						isTimerRunningClient={isTimerRunningClient}
						setIsTimerAddModalOpen={setIsTimerAddModalOpen}
						roomName={roomName}
						isBreak={isBreak}
						showWorkButtonOnMobile={showWorkButtonOnMobile}
						iconColor={workGrey}
						setIsSettingsModalOpen={setIsSettingsModalOpen}
					/>

					{!showWorkButtonOnMobile && (
						<WorkBreakButton
							roomName={roomName}
							isBreak={isBreak}
							isTimerPaused={isTimerPaused}
							isTimerRunningClient={isTimerRunningClient}
							isLoaded={isLoaded}
							isMobile={!showWorkButtonOnMobile}
							iconColor={workGrey}
						/>
					)}
					<TimerForm isLoaded={isLoaded} />
				</Center>

				<MessageLogs messageList={messageList} />

				<ToastContainer theme="dark" pauseOnFocusLoss />
				<UserBubbles userListInRoom={userListInRoom} />

				<PomoCounterPosition>
					<PomoCounter
						workSessions={workSessions}
						breakSessions={breakSessions}
						setWorkSessions={setWorkSessions}
						setBreakSessions={setBreakSessions}
					/>
				</PomoCounterPosition>

				<ModalComponent
					isModalOpen={isTimerAddModalOpen}
					setIsModalOpen={setIsTimerAddModalOpen}
				>
					<AddTimerModal
						timerMinuteButtons={
							isBreak
								? breakTimerMinuteButtons
								: workTimerMinuteButtons
						}
						isBreak={isBreak}
						updateTimerButtons={updateTimerButtons}
						setIsTimerAddModalOpen={setIsTimerAddModalOpen}
						isTimerAddModalOpen={isTimerAddModalOpen}
					/>
				</ModalComponent>

				<ModalComponent
					isModalOpen={isSettingsModalOpen}
					setIsModalOpen={setIsSettingsModalOpen}
				>
					<SettingsModal
						roomName={roomName}
						isPublicRoom={isPublicRoom}
					/>
				</ModalComponent>

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
