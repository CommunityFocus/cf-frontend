import { FaRegPauseCircle, FaRegPlayCircle } from "react-icons/fa";
import { LuTimerReset } from "react-icons/lu";
import { BsFillShareFill } from "react-icons/bs";
import StyledButtonRow from "./TimerControls.styled";

const TimerControls = ({
	pauseTimer,
	isTimerPaused,
	resetTimer,
	shareRoom,
}: {
	pauseTimer: () => void;
	isTimerPaused: boolean;
	resetTimer: () => void;
	shareRoom: () => void;
}): JSX.Element => {
	return (
		<StyledButtonRow>
			{isTimerPaused ? (
				<FaRegPlayCircle size={30} onClick={pauseTimer} />
			) : (
				<FaRegPauseCircle size={30} onClick={pauseTimer} />
			)}

			<LuTimerReset type="button" onClick={resetTimer} size={30} />
			<BsFillShareFill onClick={shareRoom} size={30} />
		</StyledButtonRow>
	);
};

export default TimerControls;
