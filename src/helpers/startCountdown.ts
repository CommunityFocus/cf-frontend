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
	if (durationInSeconds <= 0) {
		setTimestamp(0);
	} else {
		clientTimerStore.timer = setInterval(() => {
			durationInSeconds--;
			setTimestamp(durationInSeconds);
			if (durationInSeconds <= 0) {
				clearInterval(clientTimerStore.timer);
			}
		}, 1000);
	}
};

export default startCountdown;
