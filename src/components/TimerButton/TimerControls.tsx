import { ResetButton } from "./TimerControls.styled";
import PauseResumeButton from "./PauseResumeButton";

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
			{/* {isTimerPaused ? (
				<ResumeButton onClick={pauseTimer}>
					<FaRegPlayCircle />
				</ResumeButton>
			) : (
				<PauseButton onClick={pauseTimer}>
					<FaRegPauseCircle />
				</PauseButton>
			)} */}

			<PauseResumeButton
				pauseTimer={pauseTimer}
				isTimerPaused={isTimerPaused}
			/>

			<ResetButton type="button" onClick={resetTimer} />
		</>
	);
};

export default TimerControls;
