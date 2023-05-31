const TimerControls = ({
	pauseTimer,
	isTimerPaused,
}: {
	pauseTimer: () => void;
	isTimerPaused: boolean;
}): JSX.Element => {
	return (
		<>
			<p>Paused: {isTimerPaused}</p>
			<button type="button" onClick={pauseTimer}>
				Pause
			</button>
		</>
	);
};

export default TimerControls;
