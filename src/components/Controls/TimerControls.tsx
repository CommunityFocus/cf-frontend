import { FaRegPauseCircle, FaRegPlayCircle } from "react-icons/fa";
import { LuTimerReset } from "react-icons/lu";
import ReactGA from "react-ga4";

import {
	StyledAddTimerIcon,
	StyledButtonRow,
	StyledReopenIcon,
	StyledSettingsIcon,
	StyledShareIcon,
} from "./TimerControls.styled";
import WorkBreakButton from "../TimerButton/WorkBreakButton";

interface TimerControlProps {
	pauseTimer: () => void;
	isTimerPaused: boolean;
	resetTimer: () => void;
	shareRoom: () => void;
	isLoaded: boolean;
	isTimerRunningClient: boolean;
	roomName: string;
	isBreak: boolean;
	setIsTimerAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	showWorkButtonOnMobile: boolean;
	iconColor: string;
	setIsSettingsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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
	showWorkButtonOnMobile,
	iconColor,
	setIsSettingsModalOpen,
}: TimerControlProps): JSX.Element => {
	return (
		<StyledButtonRow show={isLoaded} iconColor={iconColor}>
			{isTimerRunningClient &&
				(isTimerPaused ? (
					<FaRegPlayCircle
						size={30}
						onClick={(): void => {
							pauseTimer();

							// react ga
							ReactGA.event({
								category: "Timer",
								action: "Resume Timer",
							});
						}}
						data-tooltip-id="my-tooltip"
						data-tooltip-content="Resume the Timer"
						data-tooltip-place="top"
					/>
				) : (
					<FaRegPauseCircle
						size={30}
						onClick={(): void => {
							pauseTimer();

							// react ga
							ReactGA.event({
								category: "Timer",
								action: "Pause Timer",
							});
						}}
						data-tooltip-id="my-tooltip"
						data-tooltip-content="Pause the Timer"
						data-tooltip-place="top"
					/>
				))}

			<LuTimerReset
				type="button"
				onClick={(): void => {
					resetTimer();

					// react ga
					ReactGA.event({
						category: "Timer",
						action: "Reset Timer",
					});
				}}
				size={30}
				data-tooltip-id="my-tooltip"
				data-tooltip-content="Reset the Timer to the original previously set time"
				data-tooltip-place="top"
			/>
			<StyledShareIcon
				onClick={(): void => {
					shareRoom();

					// react ga
					ReactGA.event({
						category: "Timer",
						action: "Share Timer",
					});
				}}
				size={30}
				data-tooltip-id="my-tooltip"
				data-tooltip-content="Share the timer with friends!"
				data-tooltip-place="top"
			/>

			<StyledAddTimerIcon
				type="button"
				onClick={(): void => {
					setIsTimerAddModalOpen(true);

					// react ga
					ReactGA.event({
						category: "Timer",
						action: "Add Timer",
					});
				}}
				size="30px"
				data-tooltip-id="my-tooltip"
				data-tooltip-content="Add or remove a timer to the roon"
				data-tooltip-place="top"
			/>

			<StyledSettingsIcon
				size="30px"
				onClick={(): void => {
					setIsSettingsModalOpen(true);

					// react ga
					ReactGA.event({
						category: "Timer",
						action: "Settings",
					});
				}}
				data-tooltip-id="my-tooltip"
				data-tooltip-content="Settings"
				data-tooltip-place="top"
			/>

			{showWorkButtonOnMobile ? (
				<WorkBreakButton
					roomName={roomName}
					isBreak={isBreak}
					isTimerRunningClient={isTimerRunningClient}
					isTimerPaused={isTimerPaused}
					isLoaded={isLoaded}
					isMobile={!showWorkButtonOnMobile}
					iconColor={iconColor}
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

						// react ga
						ReactGA.event({
							category: "Timer",
							action: "Open in a popup window",
						});
					}}
					size="30px"
					data-tooltip-id="my-tooltip"
					data-tooltip-content="Open in a popup window"
					data-tooltip-place="top"
				/>
			)}
		</StyledButtonRow>
	);
};

export default TimerControls;
