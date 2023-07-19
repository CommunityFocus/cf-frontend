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
	console.log({ roomName, timerMinuteButtons, circleState });
	return (
		<ButtonContainer>
			{circleState.timeCircle.map(
				({ timerMinuteButton, radius, rotate, rotateReverse }) => (
					<TimerButton
						key={timerMinuteButton}
						roomName={roomName}
						value={timerMinuteButton}
						css={{ radius, rotate, rotateReverse }}
					/>
				)
			)}
		</ButtonContainer>
	);
};

export default TimerButtons;
