const startCountdown = ({
	durationInSeconds,
	clientTimerStore,
	setTimestamp,
}: {
	durationInSeconds: number;
	clientTimerStore: Record<string, ReturnType<typeof setInterval>>;
	setTimestamp: React.Dispatch<React.SetStateAction<number>>;
}): void => {
	clearInterval(clientTimerStore.timer);

	/* eslint-disable no-param-reassign */
	clientTimerStore.timer = setInterval(() => {
		if (durationInSeconds <= 0) {
			setTimestamp(durationInSeconds);
			clearInterval(clientTimerStore.timer);
		} else {
			durationInSeconds--;
			setTimestamp(durationInSeconds);
		}
	}, 1000);
};

export default startCountdown;
