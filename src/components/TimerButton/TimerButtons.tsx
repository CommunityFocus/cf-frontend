import buttonSize from "../../helpers/buttonSize";
import { ICircleState } from "../Timestamp/Timestamp";
import TimerButton from "./TimerButton";

interface TimerButtonsProps {
	roomName: string;
	timerMinuteButtons: number[];
	circleState: ICircleState;
}

const TimerButtons = (props: TimerButtonsProps): JSX.Element => {
	const { roomName, timerMinuteButtons, circleState } = props;

	return (
		<>
			{circleState.timeCircle.map(
				({ timerMinuteButton, radius, rotate, rotateReverse }) => (
					<TimerButton
						key={timerMinuteButton}
						roomName={roomName}
						value={timerMinuteButton}
						size={buttonSize({
							buttonList: timerMinuteButtons,
							currentButton: timerMinuteButton,
						})}
						css={{ radius, rotate, rotateReverse }}
					/>
				)
			)}
		</>
	);
};

export default TimerButtons;
