const startCountdown = ({
	durationInSeconds,
	clientTimerStore,
	setTimestamp,
}) => {
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