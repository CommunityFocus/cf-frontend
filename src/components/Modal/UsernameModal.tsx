import { useEffect, useState } from "react";
import {
	StyledModalButton,
	StyledTitle,
	StyledUsernameModalContainer,
} from "./UsernameModal.styled";
import ValidationInput from "./ValidationInput";
import socket from "../Socket/socket";
import { roomName } from "../../../common/common";

interface UsernameModalProps {
	userName: string;
	setUserName: (userName: string) => void;
	setIsUsernameModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isUsernamModalOpen: boolean;
}
const UsernameModal = (props: UsernameModalProps): JSX.Element => {
	const {
		userName,
		setUserName,
		setIsUsernameModalOpen,
		isUsernamModalOpen,
	} = props;
	const [inputValue, setInputValue] = useState<string>("");

	const inputValidation = (input: string): string | false => {
		if (input.length < 1) {
			return "Username must be at least 1 character long";
		}
		if (input.length > 20) {
			return "Username must be less than 20 characters long";
		}
		// make sure there are characters other than spaces
		if (input.trim().length < 1) {
			return "Username must contain at least one non-space character";
		}
		// make sure there are no spaces at the beginning or end
		if (input.trim().length !== input.length) {
			return "Username cannot start or end with a space";
		}

		// make sure there are no special characters but make sure spaces are allowed
		if (/[^a-zA-Z0-9 ]/.test(input) || /[\s]{2,}/.test(input)) {
			return "Username cannot contain special characters";
		}

		return false;
	};

	const submitHandler = (event: React.MouseEvent | React.FormEvent): void => {
		event.preventDefault();
		if (inputValidation(inputValue) === false && inputValue !== userName) {
			setUserName(inputValue);
			localStorage.setItem("userName", inputValue);
			socket.emit("changeUsername", {
				roomName,
				userName: inputValue,
			});
		}
		setIsUsernameModalOpen(false);
	};

	useEffect(() => {
		if (isUsernamModalOpen) {
			// focus on the input when the modal opens
			document.getElementById("username-input")?.focus();
		}
	}, [isUsernamModalOpen]);

	return (
		<StyledUsernameModalContainer>
			<StyledTitle>{`Change your username from "${
				userName || "Guest"
			}"`}</StyledTitle>
			<ValidationInput
				type="text"
				placeholder="Enter your new username"
				value={inputValue}
				id="username-input"
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
				Save username
			</StyledModalButton>
		</StyledUsernameModalContainer>
	);
};

export default UsernameModal;
