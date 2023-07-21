import { useEffect, useState } from "react";
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
	const { timestamp, color, timerMinuteButtons, roomName } = props;
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

	return (
		<div>
			<StyledBigCircle>
				<StyledCircleHold>
					<TimerButtons
						roomName={roomName}
						timerMinuteButtons={timerMinuteButtons}
						circleState={circleState}
					/>
					{/* {circleState.timeCircle.map((value, index) => {
						return <Square css={value} num={index + 1} />;
					})} */}
				</StyledCircleHold>
				<StyledTimestamp color={color}>
					{formatTimestamp(timestamp)}
				</StyledTimestamp>
			</StyledBigCircle>
		</div>
	);
};

export default Timestamp;
