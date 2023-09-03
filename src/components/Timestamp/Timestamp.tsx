import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import formatTimestamp from "../../helpers/formatTimestamp";
import {
	StyledBigCircle,
	StyledCircleHold,
	StyledTimestamp,
} from "./Timestamp.styled";
import TimerButtons from "../TimerButton/TimerButtons";
import socket from "../Socket/socket";
import { TimerResponseArgs } from "../../../common/types/types";

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
	} = props;
	const [circleState, setCircleState] = useState<ICircleState>({
		timeCircle: [],
	});
	const [timestamp, setTimestamp] = useState<number>(0);

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

	useEffect(() => {
		// if timestamp gets to 1, then play audio
		if (timestamp === 1) {
			const audio = new Audio("/audio/chirptone.wav");
			audio.play();
		}
	}, [timestamp]);

	useEffect(() => {
		socket.on("timerResponse", onTimerResponse);

		return () => {
			socket.off("timerResponse", onTimerResponse);
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
		</div>
	);
};

export default Timestamp;
