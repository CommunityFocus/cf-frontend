import { useContext, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import useWindowSize from "use-window-size-v2";
import { ThemeContext } from "styled-components";
import formatTimestamp from "../../helpers/formatTimestamp";
import {
	StyledBigCircle,
	StyledCenterDiv,
	StyledCircleHold,
	StyledPillCenterDiv,
	StyledTimestamp,
} from "./Timestamp.styled";
import TimerButtons from "../TimerButton/TimerButtons";
import socket from "../Socket/socket";
import { TimerResponseArgs } from "../../../common/types/types";
import { StyledPillButton } from "../TimerButton/TimerButtons.styled";
import { theme } from "../../../common/theme";
import updatePomoCounter from "../../helpers/updatePomoCount";

interface TimestampProps {
	color: string;
	timerMinuteButtons: number[];
	roomName: string;
	isTimerRunningClient: boolean;
	isBreak: boolean;
	isTimerPaused: boolean;
	isLoaded: boolean;
	setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
	setIsTimerPaused: React.Dispatch<React.SetStateAction<boolean>>;
	startCountdown: ({
		durationInSeconds,
		clientTimerStore,
		setTimestamp,
		isTimerPaused,
	}: {
		durationInSeconds: number;
		clientTimerStore: Record<string, ReturnType<typeof setInterval>>;
		setTimestamp: React.Dispatch<React.SetStateAction<number>>;
		isTimerPaused: boolean;
	}) => void;
	setIsTimerRunningClient: React.Dispatch<React.SetStateAction<boolean>>;
	setIsBreak: React.Dispatch<React.SetStateAction<boolean>>;
	setWorkSessions: React.Dispatch<React.SetStateAction<number>>;
	setBreakSessions: React.Dispatch<React.SetStateAction<number>>;
}
export interface ICircleState {
	timeCircle: {
		radius: number;
		rotate: number;
		rotateReverse: number;
		timerMinuteButton: number;
	}[];
}

const Timestamp = (props: TimestampProps): JSX.Element => {
	const {
		color,
		timerMinuteButtons,
		roomName,
		isTimerRunningClient,
		isBreak,
		isTimerPaused,
		isLoaded,
		setIsLoaded,
		setIsTimerPaused,
		startCountdown,
		setIsTimerRunningClient,
		setIsBreak,
		setWorkSessions,
		setBreakSessions,
	} = props;
	const [circleState, setCircleState] = useState<ICircleState>({
		timeCircle: [],
	});
	const [timestamp, setTimestamp] = useState<number>(0);

	const { width, height } = useWindowSize();

	const { themeGroup } = useContext(ThemeContext);

	const {
		workButtonColor,
		workButtonTextColor,
		breakButtonColor,
		breakButtonTextColor,
	} = theme[themeGroup as keyof typeof theme];

	/*
	 * A store of the timer interval for a given client.
	 * This is used to store and clear the interval.
	 *
	 * clientTimerStore ={
	 * 	timer: setInterval(),
	 * }
	 */

	const clientTimerStore: Record<string, ReturnType<typeof setInterval>> = {};

	const buildCircle = (): void => {
		const num = timerMinuteButtons.length; // Number of Square to be generate
		const type = 1;
		const radius = 100; // distance from center

		const start = 270; // shift start from 0
		const slice = (360 * type) / num;

		const items = [];
		let i;
		for (i = 0; i < num; i++) {
			const rotate = slice * i + start;
			const rotateReverse = rotate * -1;

			items.push({
				radius,
				rotate,
				rotateReverse,
				timerMinuteButton: timerMinuteButtons[i],
			});
		}

		setCircleState({
			timeCircle: items,
		});
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

	useEffect(() => {
		buildCircle();
	}, [timerMinuteButtons]);

	const onEndTimer = ({ isBreakMode }: { isBreakMode: boolean }): void => {
		const audio = new Audio("/audio/chirptone.wav");
		audio.play();

		const notification = new Notification(`Community Focus`, {
			body: `Your timer (${
				isBreakMode ? "break" : "work"
			} session) for ${roomName} has ended!`,
			icon: "/favicon.ico",
		});

		notification.onclick = (): void => {
			window.focus();
			notification.close();
		};

		updatePomoCounter({
			roomName,
			updatedPomoCount: 1,
			isBreakCounter: isBreakMode,
			setWorkSessions,
			setBreakSessions,
		});
	};

	useEffect(() => {
		socket.on("timerResponse", onTimerResponse);
		socket.on("endTimer", onEndTimer);

		return () => {
			socket.off("timerResponse", onTimerResponse);
			socket.off("endTimer", onEndTimer);
		};
	}, []);

	useEffect(() => {
		if (!isTimerRunningClient) {
			document.title = "Community Focus";
			return;
		}

		// update the document title, with roomName and timestamp
		document.title = `${formatTimestamp(timestamp)}`;
	}, [isTimerPaused, timestamp, isTimerRunningClient]);

	return (
		<div>
			{width > 300 && height > 530 ? (
				<StyledBigCircle>
					{isLoaded
						? (!isTimerRunningClient || isTimerPaused) && (
								<StyledCircleHold>
									<TimerButtons
										roomName={roomName}
										timerMinuteButtons={timerMinuteButtons}
										circleState={circleState}
										isBreak={isBreak}
									/>
								</StyledCircleHold>
						  )
						: null}
					{isLoaded ? (
						<StyledTimestamp color={color}>
							{formatTimestamp(timestamp)}
						</StyledTimestamp>
					) : (
						<ReactLoading
							type="bubbles"
							color="#fff"
							height={100}
							width={100}
						/>
					)}
				</StyledBigCircle>
			) : (
				<div>
					{isLoaded ? (
						<StyledCenterDiv>
							<StyledTimestamp color={color}>
								{formatTimestamp(timestamp)}
							</StyledTimestamp>
							<StyledPillCenterDiv>
								{!isTimerRunningClient || isTimerPaused
									? timerMinuteButtons.map(
											(timerMinuteButton) => {
												return (
													<StyledPillButton
														key={timerMinuteButton}
														type="button"
														color={
															!isBreak
																? workButtonColor
																: breakButtonColor
														}
														fontColor={
															!isBreak
																? workButtonTextColor
																: breakButtonTextColor
														}
														// eslint-disable-next-line react/jsx-boolean-value
														hasDelete={false}
														// submit on click
														onClick={(
															event
														): void => {
															event.preventDefault();
															const minutes =
																timerMinuteButton *
																60;
															socket.emit(
																"startCountdown",
																{
																	roomName,
																	durationInSeconds:
																		minutes,
																}
															);
														}}
													>
														{timerMinuteButton}
													</StyledPillButton>
												);
											}
									  )
									: null}
							</StyledPillCenterDiv>
						</StyledCenterDiv>
					) : (
						<ReactLoading
							type="bubbles"
							color="#fff"
							height={100}
							width={100}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default Timestamp;
