import { FaRegPauseCircle, FaRegPlayCircle } from "react-icons/fa";
import { LuTimerReset } from "react-icons/lu";
import useWindowSize from "use-window-size-v2";
import {
	StyledAddTimerIcon,
	StyledButtonRow,
	StyledReopenIcon,
	StyledShareIcon,
} from "./TimerControls.styled";
import WorkBreakButton from "../TimerButton/WorkBreakButton";

const TimerControls = ({
	pauseTimer,
	isTimerPaused,
	resetTimer,
	shareRoom,
	isLoaded,
	isTimerRunningClient,
	setIsTimerAddModalOpen,
	roomName,
	isBreak,
}: {
	pauseTimer: () => void;
	isTimerPaused: boolean;
	resetTimer: () => void;
	shareRoom: () => void;
	isLoaded: boolean;
	isTimerRunningClient: boolean;
	roomName: string;
	isBreak: boolean;
	setIsTimerAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
	const { width, height } = useWindowSize();

	return (
		<StyledButtonRow show={isLoaded}>
			{isTimerRunningClient &&
				(isTimerPaused ? (
					<FaRegPlayCircle
						size={30}
						onClick={pauseTimer}
						data-tooltip-id="my-tooltip"
						data-tooltip-content="Resume the Timer"
						data-tooltip-place="top"
					/>
				) : (
					<FaRegPauseCircle
						size={30}
						onClick={pauseTimer}
						data-tooltip-id="my-tooltip"
						data-tooltip-content="Pause the Timer"
						data-tooltip-place="top"
					/>
				))}

			<LuTimerReset
				type="button"
				onClick={resetTimer}
				size={30}
				data-tooltip-id="my-tooltip"
				data-tooltip-content="Reset the Timer to the original previously set time"
				data-tooltip-place="top"
			/>
			<StyledShareIcon
				onClick={shareRoom}
				size={30}
				data-tooltip-id="my-tooltip"
				data-tooltip-content="Share the timer with friends!"
				data-tooltip-place="top"
			/>

			<StyledAddTimerIcon
				type="button"
				onClick={(): void => setIsTimerAddModalOpen(true)}
				size="30px"
			/>

			{width < 300 || height < 530 ? (
				<WorkBreakButton
					roomName={roomName}
					isBreak={isBreak}
					isTimerRunningClient={isTimerRunningClient}
					isTimerPaused={isTimerPaused}
					isLoaded={isLoaded}
					hasText={false}
				/>
			) : (
				<StyledReopenIcon
					type="button"
					onClick={(): void => {
						window.open(
							window.location.href,
							"minimode",
							"resizable,width=480=height=575"
						);
					}}
					size="30px"
				/>
			)}
		</StyledButtonRow>
	);
};

export default TimerControls;
