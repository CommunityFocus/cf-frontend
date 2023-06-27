import { useState, useEffect, useMemo } from "react";
import socket from "./socket";
import ConnectionState from "./ConnectionState";
import Timestamp from "./Timestamp";
import TimerForm from "./TimerForm";
import formatTimestamp from "../helpers/formatTimestamp";
import shareRoom from "../helpers/shareRoom";
import startCountdown from "../helpers/startCountdown";
import { roomName } from "../../common/common";
import TimerButtons from "./TimerButton/TimerButtons";
import TimerControls from "./TimerControls";
import Footer from "./Footer";
import UserBubbles from "./UserBubbles/UserBubbles";
import { TimerResponseArgs, UsersInRoomArgs } from "../../common/types/types";
import Header from "./Header/Header";
import { Center, GlobalStyle, StyledDiv } from "./Room.styled";
import WorkBreakButton from "./TimerButton/WorkBreakButton";
import UpdateLogs from "./UpdateLog/UpdateLogs";

const Room = (props: { globalUsersConnected: number }): JSX.Element => {
	const { globalUsersConnected } = props;
	const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
	const [timestamp, setTimestamp] = useState<number>(0);
	const [usersInRoom, setUsersInRoom] = useState<number>(0);
	const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
	const [userListInRoom, setUserListInRoom] = useState<string[]>([]);
	const [updateLogList, setUpdateLogList] = useState<
		Array<{
			message: string;
			user: string;
			time: Date;
		}>
	>([]);
	// TODO: include setBreak in the destructured array of useState hook which includes 'isBreak'
	// TODO: setBreak should set the state after receiving response from the server
	const [isBreak] = useState<boolean>(false);

	// use memo to avoid re-rendering the UpdateLogs component unless the updateLogList changes
	const memoizedUpdateLogs = useMemo(
		() => <UpdateLogs logs={updateLogList} />,
		[updateLogList]
	);

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
	}: TimerResponseArgs): void => {
		setTimestamp(secondsRemaining);

		setIsTimerPaused(isPaused);

		startCountdown({
			durationInSeconds: secondsRemaining,
			clientTimerStore,
			setTimestamp,
			isTimerPaused: isPaused,
		});
	};

	const onUpdateLog = ({
		message,
		user,
		time,
	}: {
		message: string;
		user: string;
		time: Date;
	}): void => {
		// push the new log to the updateLogList
		// setUpdateLogList((prev) => [...prev].concat({ message, user, time }));
		setUpdateLogList((prev) => [...prev, { message, user, time }]);
		console.log("2", { updateLogList });
	};

	const onUpdateLogHistory = ({
		updateLog,
	}: {
		updateLog: Array<{ message: string; user: string; time: Date }>;
	}): void => {
		// console.log({ updateLog });

		setUpdateLogList([...updateLog]);

		console.log("1", { updateLogList });
	};

	useEffect(() => {
		socket.on("connect", onConnect);
		socket.on("disconnect", onDisconnect);
		socket.on("timerResponse", onTimerResponse);
		socket.on("usersInRoom", onUsersInRoom);
		socket.on("updateLog", onUpdateLog);
		socket.on("updateLogHistory", onUpdateLogHistory);

		return () => {
			socket.off("connect", onConnect);
			socket.off("disconnect", onDisconnect);
			socket.off("timerResponse", onTimerResponse);
			socket.off("usersInRoom", onUsersInRoom);
			socket.off("updateLog", onUpdateLog);
			socket.off("updateLogHistory", onUpdateLogHistory);
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

	// useEffect(() => {}, [updateLogList]);

	return (
		<>
			<Header />
			<StyledDiv>
				<GlobalStyle />
				{memoizedUpdateLogs}
				<Center>
					<ConnectionState isConnected={isConnected} />
					<Timestamp timestamp={timestamp} />
					<TimerButtons roomName={roomName} />
					<WorkBreakButton roomName={roomName} isBreak={isBreak} />
					<TimerControls
						pauseTimer={pauseTimer}
						isTimerPaused={isTimerPaused}
						resetTimer={resetTimer}
					/>
					<TimerForm />
					<p>Users in room: {usersInRoom}</p>
					<button type="button" onClick={shareRoom}>
						Share Room
					</button>
				</Center>
				<UserBubbles userListInRoom={userListInRoom} />
				<Footer numUsers={globalUsersConnected} />
			</StyledDiv>
		</>
	);
};

export default Room;
