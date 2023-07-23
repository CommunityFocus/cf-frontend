import buttonSize from "../../helpers/buttonSize";
import { ICircleState } from "../Timestamp/Timestamp";
import TimerButton from "./TimerButton";

interface TimerButtonsProps {
	roomName: string;
	timerMinuteButtons: number[];
	circleState: ICircleState;
	isBreak: boolean;
}

const TimerButtons = (props: TimerButtonsProps): JSX.Element => {
	const { roomName, timerMinuteButtons, circleState, isBreak } = props;

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
						isBreak={isBreak}
					/>
				)
			)}
		</>
	);
};

export default TimerButtons;
