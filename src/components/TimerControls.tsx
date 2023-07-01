import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import { PlayButton, PauseButton, ResetButton } from "./TimerControls.styled";

const TimerControls = ({
	pauseTimer,
	isTimerPaused,
	resetTimer,
}: {
	pauseTimer: () => void;
	isTimerPaused: boolean;
	resetTimer: () => void;
}): JSX.Element => {
	return (
		<>
			{isTimerPaused ? (
				<PlayButton onClick={pauseTimer}>
					<FaRegPlayCircle className="fa-icon" />
				</PlayButton>
			) : (
				<PauseButton onClick={pauseTimer}>
					<FaRegPauseCircle />
				</PauseButton>
			)}

			<ResetButton type="button" onClick={resetTimer} />
		</>
	);
};

export default TimerControls;
