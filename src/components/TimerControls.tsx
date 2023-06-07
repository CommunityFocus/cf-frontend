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

			<button type="button" onClick={resetTimer}>
				Reset
			</button>
		</>
	);
};

export default TimerControls;
