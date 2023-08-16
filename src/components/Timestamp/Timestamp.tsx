import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import formatTimestamp from "../../helpers/formatTimestamp";
import {
	StyledBigCircle,
	StyledCircleHold,
	StyledTimestamp,
} from "./Timestamp.styled";
import TimerButtons from "../TimerButton/TimerButtons";

interface TimestampProps {
	timestamp: number;
	color: string;
	timerMinuteButtons: number[];
	roomName: string;
	isTimerRunningClient: boolean;
	isBreak: boolean;
	isTimerPaused: boolean;
	isLoaded: boolean;
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
		timestamp,
		color,
		timerMinuteButtons,
		roomName,
		isTimerRunningClient,
		isBreak,
		isTimerPaused,
		isLoaded,
	} = props;
	const [circleState, setCircleState] = useState<ICircleState>({
		timeCircle: [],
	});

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
