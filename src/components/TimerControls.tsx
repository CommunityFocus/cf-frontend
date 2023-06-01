const TimerControls = ({
	pauseTimer,
	isTimerPaused,
}: {
	pauseTimer: () => void;
	isTimerPaused: boolean;
}): JSX.Element => {
	return (
		<button type="button" onClick={pauseTimer}>
			{isTimerPaused ? "Resume" : "Pause"}
		</button>
	);
};

export default TimerControls;
