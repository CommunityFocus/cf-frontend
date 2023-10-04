interface UpdatePomoCountProps {
	roomName: string;
	updatedPomoCount: number;
	isBreakCounter: boolean;
	setWorkSessions: React.Dispatch<React.SetStateAction<number>>;
	setBreakSessions: React.Dispatch<React.SetStateAction<number>>;
}
export default (props: UpdatePomoCountProps): void => {
	const {
		roomName,
		updatedPomoCount,
		isBreakCounter,
		setWorkSessions,
		setBreakSessions,
	} = props;

	const currentPomoCount = isBreakCounter
		? Number(
				Number(
					JSON.parse(localStorage.getItem(roomName) || "{}")
						.breakSessions
				) || 0
		  )
		: Number(
				JSON.parse(localStorage.getItem(roomName) || "{}")
					.workSessions || 0
		  );

	// if updatedPomoCount is 0, then reset the pomo count, if its 1, then increment the pomo count by 1, else do nothing
	if (updatedPomoCount === 0) {
		if (isBreakCounter) {
			localStorage.setItem(
				roomName,
				JSON.stringify({
					...JSON.parse(localStorage.getItem(roomName) || "{}"),
					breakSessions: 0,
				})
			);
			setBreakSessions(0);
		} else {
			localStorage.setItem(
				roomName,
				JSON.stringify({
					...JSON.parse(localStorage.getItem(roomName) || "{}"),
					workSessions: 0,
				})
			);
			setWorkSessions(0);
		}
	} else if (updatedPomoCount === 1) {
		const newPomoCount = currentPomoCount + 1;
		if (isBreakCounter) {
			localStorage.setItem(
				roomName,
				JSON.stringify({
					...JSON.parse(localStorage.getItem(roomName) || "{}"),
					breakSessions: newPomoCount,
				})
			);
			setBreakSessions(newPomoCount);
		} else {
			localStorage.setItem(
				roomName,
				JSON.stringify({
					...JSON.parse(localStorage.getItem(roomName) || "{}"),
					workSessions: newPomoCount,
				})
			);
			setWorkSessions(newPomoCount);
		}
	}
};
