import React, { useState } from "react";
import socket from "../Socket/socket";
import { roomName } from "../../../common/common";
import { StyledRowDiv, TimerFormContainer } from "./TimerControls.styled";
import { StyledButton } from "../Button/Button";
import ValidationInput from "../Modal/ValidationInput";

interface TimerFormProps {
	isLoaded: boolean;
}

const TimerForm = (props: TimerFormProps): JSX.Element => {
	const { isLoaded } = props;
	const [value, setValue] = useState<string>("");
	const [debugMode, setDebugMode] = useState<boolean>(false);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();

		socket.emit("startCountdown", {
			roomName,
			durationInSeconds: parseInt(value),
		});
	};

	// eslint-disable-next-line
	// @ts-ignore
	window.magic = (): void => {
		setDebugMode(true);
		console.log("Magic mode enabled");
	};

	const inputValidation = (input: string): string | false => {
		const parsedInput = parseInt(input);

		if (parsedInput < 0) {
			return "Please enter a positive number";
		}

		if (parsedInput > 999999999999) {
			return "Please enter a number less than 999999999999";
		}

		return false;
	};

	return (
		<TimerFormContainer isVisibile={debugMode} isLoaded={isLoaded}>
			<form onSubmit={onSubmit}>
				<StyledRowDiv>
					<ValidationInput
						type="number"
						id="custom-timer"
						placeholder="Enter a custom timer duration"
						value={value}
						validationText={inputValidation(value)}
						onChange={(e): void => setValue(e.target.value)}
						onKeyDown={(): void => {}}
					/>

					<StyledButton
						type="submit"
						disabled={inputValidation(value) !== false}
					>
						Submit
					</StyledButton>
				</StyledRowDiv>
			</form>
		</TimerFormContainer>
	);
};

export default TimerForm;
