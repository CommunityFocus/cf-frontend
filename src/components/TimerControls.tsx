import ResetButton from "./TimerControls.styled";

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
			<button type="button" onClick={pauseTimer}>
				{isTimerPaused ? "Resume" : "Pause"}
			</button>

			<ResetButton type="button" onClick={resetTimer}></ResetButton>
		</>
	);
};

export default TimerControls;
