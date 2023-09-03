import { useState } from "react";
import ValidationInput from "../Modal/ValidationInput";
import { StyledButton } from "../Button/Button";
import { StyledDiv, StyledGap, StyledTitle } from "./AddTimerButton.styled";

interface AddTimerButtonProps {
	timerMinuteButtons: number[];
	setIsTimerAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isBreak: boolean;
	updateTimerButtons: ({
		timerButtons,
		isBreak,
	}: {
		timerButtons: number[];
		isBreak: boolean;
	}) => void;
}
const AddTimerButton = (props: AddTimerButtonProps): JSX.Element => {
	const {
		timerMinuteButtons,
		setIsTimerAddModalOpen,
		isBreak,
		updateTimerButtons,
	} = props;

	const [minuteValue, setMinuteValue] = useState<number | null>(null);

	const onSubmit = (
		e:
			| React.FormEvent<HTMLFormElement>
			| React.KeyboardEvent<HTMLInputElement>
			| React.MouseEvent<HTMLButtonElement>
	): void => {
		e.preventDefault();
		const input = document.getElementById(
			"AddTimerInput"
		) as HTMLInputElement;

		const newTimer = parseInt(input.value);
		// remove duplicates
		const ascendingTimers = [...timerMinuteButtons, newTimer]
			.sort((a, b) => a - b)
			.filter((value, index, array) => array.indexOf(value) === index);
		// add timer to list of timers
		updateTimerButtons({
			timerButtons: ascendingTimers,
			isBreak,
		});
		setIsTimerAddModalOpen(false);
	};

	const inputValidation = (input: string): string | false => {
		if (parseInt(input) < 1) {
			return "Timer must be at least 1 minute long";
		}
		if (parseInt(input) > 1000) {
			return "Timer must be less than 1000 minutes long";
		}
		if (Number.isNaN(parseInt(input))) {
			return "Value must be a number";
		}

		if (parseInt(input) < 0) {
			return "Value cannot be negative";
		}

		if (input.includes(".")) {
			return "Value cannot be a decimal";
		}

		if (input.includes(" ")) {
			return "Value cannot contain spaces";
		}

		if (/[^0-9]/.test(input)) {
			return "Value cannot contain special characters";
		}
		// check if the timer already exists
		if (timerMinuteButtons.includes(parseInt(input))) {
			return "Timer already exists. Choose a different value";
		}

		return false;
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<StyledDiv>
					<StyledTitle>{`Add a ${
						!isBreak ? "Work" : "Break"
					} Timer`}</StyledTitle>
					<StyledGap>
						<ValidationInput
							type="number"
							id="AddTimerInput"
							placeholder="Enter number of minutes"
							value={`${minuteValue}`}
							onChange={(event): void => {
								setMinuteValue(parseInt(event.target.value));
							}}
							validationText={inputValidation(`${minuteValue}`)}
							onKeyDown={(event): void => {
								if (event.key === "Enter") {
									onSubmit(event);
								}
							}}
						/>
						<StyledButton
							type="submit"
							disabled={
								inputValidation(`${minuteValue}`) !== false
							}
						>
							Add Timer
						</StyledButton>
					</StyledGap>
				</StyledDiv>
			</form>
		</div>
	);
};

export default AddTimerButton;
