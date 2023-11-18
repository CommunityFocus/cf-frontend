import { ThemeContext } from "styled-components";
import ReactGA from "react-ga4";
import { useContext } from "react";
import socket from "../Socket/socket";
import { StyledTimeButton } from "./TimerButtons.styled";
import { theme } from "../../../common/theme";

const TimerButton = (props: {
	size: number;
	roomName: string;
	value: number;
	css: {
		radius: number;
		rotate: number;
		rotateReverse: number;
	};
	isBreak: boolean;
}): JSX.Element => {
	const { roomName, value, css, size, isBreak } = props;

	const { themeGroup } = useContext(ThemeContext);

	const {
		workButtonColor,
		workButtonTextColor,
		breakButtonColor,
		breakButtonTextColor,
	} = theme[themeGroup as keyof typeof theme];

	const clickHandler = (seconds: number): void => {
		const minutes = seconds * 60;
		socket.emit("startCountdown", {
			roomName,
			durationInSeconds: minutes,
		});

		ReactGA.event({
			category: "Timer Button",
			action: "Click",
			label: `${seconds} minutes`,
		});
	};

	return (
		<StyledTimeButton
			type="button"
			onClick={(): void => {
				clickHandler(value);

				// react ga
				ReactGA.event({
					category: "Timer Button",
					action: "Click",
					label: `${value} minutes`,
				});
			}}
			color={!isBreak ? workButtonColor : breakButtonColor}
			fontColor={!isBreak ? workButtonTextColor : breakButtonTextColor}
			size={size}
			style={{
				transform: `rotate(${css.rotate}deg) translate(${css.radius}px) rotate(${css.rotateReverse}deg) translate(-25%, -25%)`,
			}}
			data-tooltip-id="my-tooltip"
			data-tooltip-content={`Start a ${value} minute timer`}
			data-tooltip-place="top"
		>
			{value}
		</StyledTimeButton>
	);
};
export default TimerButton;
