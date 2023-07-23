import { FaRegPauseCircle, FaRegPlayCircle } from "react-icons/fa";
import { LuTimerReset } from "react-icons/lu";
import { BsFillShareFill } from "react-icons/bs";
import StyledButtonRow from "./TimerControls.styled";

const TimerControls = ({
	pauseTimer,
	isTimerPaused,
	resetTimer,
	shareRoom,
	isLoaded,
	isTimerRunningClient,
}: {
	pauseTimer: () => void;
	isTimerPaused: boolean;
	resetTimer: () => void;
	shareRoom: () => void;
	isLoaded: boolean;
	isTimerRunningClient: boolean;
}): JSX.Element => {
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
			<BsFillShareFill
				onClick={shareRoom}
				size={30}
				data-tooltip-id="my-tooltip"
				data-tooltip-content="Share the timer with friends!"
				data-tooltip-place="top"
			/>
		</StyledButtonRow>
	);
};

export default TimerControls;
