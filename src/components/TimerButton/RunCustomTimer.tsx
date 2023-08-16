import { useEffect, useState } from "react";
import socket from "../Socket/socket";
import { StyledButton } from "../Button/Button";
import {
	StyledContainerDiv,
	StyledCustomTimerInputDiv,
	StyledInputLabelDiv,
	StyledValidationInput,
} from "./RunCustomTimer.styled";
import { StyledTitle } from "./AddTimerButton.styled";

interface RunCustomTimerProps {
	roomName: string;
	setIsTimerAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RunCustomTimer = (props: RunCustomTimerProps): JSX.Element => {
	const { roomName, setIsTimerAddModalOpen } = props;
	const [customTimerMinValue, setCustomTimerMinValue] = useState<number>(0);
	const [customTimerSecValue, setCustomTimerSecValue] = useState<number>(0);
	const [customTimerValue, setCustomTimerValue] = useState<number>(0);

	const clickHandler = (seconds: number): void => {
		socket.emit("startCountdown", {
			roomName,
			durationInSeconds: seconds,
		});
	};

	useEffect(() => {
		// if seconds is greater than 59, add 1 to minutes and subtract 60 from seconds
		if (customTimerSecValue > 59) {
			setCustomTimerMinValue(customTimerMinValue + 1);
			setCustomTimerSecValue(customTimerSecValue - 60);
		}

		setCustomTimerValue(customTimerMinValue * 60 + customTimerSecValue);
	}, [customTimerMinValue, customTimerSecValue]);

	const inputValidationMinute = (input: string): string | false => {
		if (parseInt(input) < 0) {
			return "Value cannot be negative";
		}

		if (input.includes(".")) {
			return "Value cannot be a decimal";
		}

		if (input.includes(" ")) {
			return "Value cannot contain spaces";
		}

		if (Number.isNaN(parseInt(input))) {
			return "Value must be a number";
		}

		// value cant be above 999999
		if (parseInt(input) > 999998) {
			return "Value is too large, please enter a smaller number";
		}

		return false;
	};

	const inputValidationSecond = (input: string): string | false => {
		if (parseInt(input) < 0) {
			return "Value cannot be negative";
		}

		if (input.includes(".")) {
			return "Value cannot be a decimal";
		}

		if (input.includes(" ")) {
			return "Value cannot contain spaces";
		}

		if (Number.isNaN(parseInt(input))) {
			return "Value must be a number";
		}

		// value cant be above 59
		if (parseInt(input) > 60) {
			return "Value is too large, please enter a smaller number";
		}

		return false;
	};

	return (
		<StyledContainerDiv>
			<StyledTitle>Add a Custom Timer</StyledTitle>
			<StyledCustomTimerInputDiv>
				<StyledInputLabelDiv>
					<StyledValidationInput
						type="number"
						id="customTimerMinValue"
						placeholder="Minutes"
						value={`${customTimerMinValue}`}
						onChange={(e): void =>
							setCustomTimerMinValue(parseInt(e.target.value))
						}
						validationText={inputValidationMinute(
							`${customTimerMinValue}`
						)}
						onKeyDown={(): void => {}}
					/>
					Min
				</StyledInputLabelDiv>
				<StyledInputLabelDiv>
					<StyledValidationInput
						type="number"
						id="customTimerSecValue"
						placeholder="Seconds"
						value={`${customTimerSecValue}`}
						onChange={(e): void =>
							setCustomTimerSecValue(parseInt(e.target.value))
						}
						validationText={inputValidationSecond(
							`${customTimerSecValue}`
						)}
						onKeyDown={(): void => {}}
					/>
					Secs
				</StyledInputLabelDiv>
			</StyledCustomTimerInputDiv>
			<StyledButton
				type="button"
				onClick={(): void => {
					clickHandler(customTimerValue);
					setIsTimerAddModalOpen(false);
				}}
				disabled={
					inputValidationMinute(`${customTimerMinValue}`) !== false ||
					inputValidationSecond(`${customTimerSecValue}`) !== false ||
					customTimerValue === 0
				}
			>
				Run Timer
			</StyledButton>
		</StyledContainerDiv>
	);
};

export default RunCustomTimer;
