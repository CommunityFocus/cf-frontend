import socket from "../Socket/socket";

interface WorkBreakButtonProps {
	roomName: string;
	isBreak: boolean;
}

const WorkBreakButton = ({
	roomName,
	isBreak,
}: WorkBreakButtonProps): JSX.Element => {
	const onClickHandler = (): void => {
		if (!isBreak) {
			socket.emit("breakTimer", {
				userName: "name-functionality-is-yet-to-be-implemented",
				roomName,
			});
		} else if (isBreak) {
			socket.emit("workTimer", {
				userName: "name-functionality-is-yet-to-be-implemented",
				roomName,
			});
		}
	};

	return (
		<button type="button" onClick={onClickHandler}>
			{isBreak ? "Start working" : "Take a break"}
		</button>
	);
};

export default WorkBreakButton;
