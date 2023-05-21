function formatTimestamp(timeRemaining: number) {
	const hours = Math.floor(timeRemaining / (60 * 60));
	const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
	const seconds = Math.floor((timeRemaining % 60));
	const padZeros = (num: number) => num.toString().padStart(2, '0');

	// Sheds "HH:" when duration is under 1 hour (3600 seconds)
	if (timeRemaining > 3600) {
		return `${padZeros(hours)}:${padZeros(minutes)}:${padZeros(seconds)}`;
	} else {
		return `${padZeros(minutes)}:${padZeros(seconds)}`
	}
}

export default formatTimestamp;
