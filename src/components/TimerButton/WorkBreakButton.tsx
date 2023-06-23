import { useState } from "react";
import socket from "../socket";

const WorkBreakButton = ({ roomName }: { roomName: string }): JSX.Element => {
	// It may be needed to fetch from the server whether the user is on a break or not.
	// The default isBreak state below is just a placeholder for now.
	const [isBreak, setBreak] = useState(false);

	const onClickHandler = (): void => {
		// const userName = localStorage.getItem('');
		if (!isBreak) {
			socket.emit("breakTimer", {
				userName: "name-functionality-is-yet-to-be-implemented",
				roomName,
			});
			setBreak(true);
		} else if (isBreak) {
			socket.emit("workTimer", {
				userName: "name-functionality-is-yet-to-be-implemented",
				roomName,
			});
			setBreak(false);
		}
	};

	return (
		<button type="button" onClick={onClickHandler}>
			{isBreak ? "Start working" : "Take a break"}
		</button>
	);
};

export default WorkBreakButton;
