import buttonSize from "../../helpers/buttonSize";
import { ICircleState } from "../Timestamp/Timestamp";
import TimerButton from "./TimerButton";
import { ButtonContainer } from "./TimerButtons.styled";

interface TimerButtonsProps {
	roomName: string;
	timerMinuteButtons: number[];
	circleState: ICircleState;
}

const TimerButtons = (props: TimerButtonsProps): JSX.Element => {
	const { roomName, timerMinuteButtons, circleState } = props;
	
	return (
		<ButtonContainer>
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
		</ButtonContainer>
	);
};

export default TimerButtons;
