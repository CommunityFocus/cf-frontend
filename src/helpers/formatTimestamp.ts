function formatTimestamp(timeRemaining: number) {
	const hours = Math.floor((timeRemaining % (60 * 60 * 99)) / (60 * 60));
	const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
	const seconds = Math.floor((timeRemaining % 60));
	const padZeros = (num: number) => num.toString().padStart(2, '0');
	const timestamp = `${padZeros(hours)}:${padZeros(minutes)}:${padZeros(seconds)}`;
	return timestamp;
}

export default formatTimestamp;

