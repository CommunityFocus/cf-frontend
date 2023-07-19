import { ThemeContext } from "styled-components";
import { useContext } from "react";
import buttonSize from "../../helpers/buttonSize";
import socket from "../Socket/socket";
import { StyledTimeButton } from "./TimerButtons.styled";
import { theme } from "../../../common/theme";

const TimerButton = (props: {
	roomName: string;
	value: number;
}): JSX.Element => {
	const { roomName, value } = props;

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

	const size = buttonSize(value);

	return (
		<StyledTimeButton
			type="button"
			onClick={(): void => clickHandler(value)}
			color={workButtonColor}
			fontColor={workButtonTextColor}
			size={size}
		>
			{value}
		</StyledTimeButton>
	);
};
export default TimerButton;
