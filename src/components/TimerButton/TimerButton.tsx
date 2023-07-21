import { ThemeContext } from "styled-components";
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
}): JSX.Element => {
	const { roomName, value, css, size } = props;

	const { themeGroup } = useContext(ThemeContext);

	const { workButtonColor, workButtonTextColor } =
		theme[themeGroup as keyof typeof theme];

	const clickHandler = (seconds: number): void => {
		const minutes = seconds * 60;
		socket.emit("startCountdown", {
			roomName,
			durationInSeconds: minutes,
		});
	};

	return (
		<StyledTimeButton
			type="button"
			onClick={(): void => clickHandler(value)}
			color={workButtonColor}
			fontColor={workButtonTextColor}
			size={size}
			style={{
				transform: `rotate(${css.rotate}deg) translate(${css.radius}px) rotate(${css.rotateReverse}deg) translate(-25%, -25%)`,
			}}
		>
			{value}
		</StyledTimeButton>
	);
};
export default TimerButton;
