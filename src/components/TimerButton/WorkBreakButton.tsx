import { AiOutlineCoffee } from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";
import socket from "../Socket/socket";
import { StyledWorkBreakButtonDiv } from "./TimerButtons.styled";

interface WorkBreakButtonProps {
	roomName: string;
	isBreak: boolean;
	isTimerRunningClient: boolean;
	isTimerPaused: boolean;
	isLoaded: boolean;
}

const WorkBreakButton = ({
	roomName,
	isBreak,
	isTimerRunningClient,
	isTimerPaused,
	isLoaded,
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

	return !isBreak ? (
		<StyledWorkBreakButtonDiv
			onClick={onClickHandler}
			show={(isLoaded && !isTimerRunningClient) || isTimerPaused}
		>
			<AiOutlineCoffee size={30} />
			<span>Take a Break</span>
		</StyledWorkBreakButtonDiv>
	) : (
		<StyledWorkBreakButtonDiv
			onClick={onClickHandler}
			show={(isLoaded && !isTimerRunningClient) || isTimerPaused}
		>
			<MdOutlineWork size={30} />
			<span>Do some Work</span>
		</StyledWorkBreakButtonDiv>
	);
};

export default WorkBreakButton;
