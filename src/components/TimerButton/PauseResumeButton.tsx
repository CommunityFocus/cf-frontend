import { FaRegPauseCircle, FaRegPlayCircle } from "react-icons/fa";
import { PauseButton, ResumeButton } from "./TimerControls.styled";

interface IPauseResumeButtonProps {
	pauseTimer: () => void;
	isTimerPaused: boolean;
}

const PauseResumeButton = ({
	pauseTimer,
	isTimerPaused,
}: IPauseResumeButtonProps): JSX.Element => {
	return isTimerPaused ? (
		<ResumeButton onClick={pauseTimer}>
			<FaRegPlayCircle />
		</ResumeButton>
	) : (
		<PauseButton onClick={pauseTimer}>
			<FaRegPauseCircle />
		</PauseButton>
	);
};

export default PauseResumeButton;
