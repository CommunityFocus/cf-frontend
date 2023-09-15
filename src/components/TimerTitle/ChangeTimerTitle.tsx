import { useState } from "react";
import socket from "../Socket/socket";
import { roomName } from "../../../common/common";
import {
	StyledModalButton,
	StyledTitle,
	StyledTitleModalContainer,
} from "./ChangeTimerTitle.styled";
import ValidationInput from "../Modal/ValidationInput";

interface ChangeTimerTitleProps {
	isBreak: boolean;
	setIsTitleModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangeTimerTitle = (props: ChangeTimerTitleProps): JSX.Element => {
	const { isBreak, setIsTitleModalOpen } = props;
	const [inputValue, setInputValue] = useState<string>("");

	const inputValidation = (input: string): string | false => {
		// Alphanumeric characters, spaces, underscores, dash, period, comma, colon, semicolon, apostrophe, question mark, exclamation point, and parentheses
		const regex = /^[a-zA-Z0-9 _.,:;'()?!-]*$/;
		if (input.length === 0) {
			return "Please enter a title";
		}
		if (input.length > 75) {
			return "Title is too long";
		}
		if (!regex.test(input)) {
			return "Invalid characters";
		}

		return false;
	};

	const submitHandler = (event: React.MouseEvent | React.FormEvent): void => {
		event.preventDefault();
		if (inputValidation(inputValue) === false) {
			socket.emit("updateTitle", {
				roomName,
				title: inputValue,
			});
		}
		setIsTitleModalOpen(false);
	};

	return (
		<StyledTitleModalContainer>
			<StyledTitle>{`Change the ${
				isBreak ? "break" : "work"
			} title for the room`}</StyledTitle>
			<ValidationInput
				type="text"
				placeholder="Enter the new title"
				value={inputValue}
				id="title-input"
				onChange={(event): void => {
					setInputValue(event.target.value);
				}}
				validationText={inputValidation(inputValue)}
				// when you hit enter, it will submit the form
				onKeyDown={(
					event: React.KeyboardEvent<HTMLInputElement>
				): void => {
					if (
						inputValidation(inputValue) === false &&
						event.key === "Enter"
					) {
						submitHandler(
							event as React.MouseEvent | React.FormEvent
						);
					}
				}}
			/>
			<StyledModalButton
				type="button"
				onClick={submitHandler}
				disabled={inputValidation(inputValue) !== false}
			>
				Save Title
			</StyledModalButton>
		</StyledTitleModalContainer>
	);
};

export default ChangeTimerTitle;
