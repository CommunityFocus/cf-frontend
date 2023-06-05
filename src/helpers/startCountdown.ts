const startCountdown = ({
	durationInSeconds,
	clientTimerStore,
	setTimestamp,
	isTimerPaused,
}: {
	durationInSeconds: number;
	clientTimerStore: Record<string, ReturnType<typeof setInterval>>;
	setTimestamp: React.Dispatch<React.SetStateAction<number>>;
	isTimerPaused: boolean;
}): void => {
	clearInterval(clientTimerStore.timer);

	/* eslint-disable no-param-reassign */
	if (durationInSeconds <= 0) {
		setTimestamp(durationInSeconds);
		clearInterval(clientTimerStore.timer);
	} else {
		clientTimerStore.timer = setInterval(() => {
			if (!isTimerPaused) {
				durationInSeconds--;
			}
			setTimestamp(durationInSeconds);
		}, 1000);
	}
};

export default startCountdown;
