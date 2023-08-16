import { useEffect } from "react";
import AddTimerButton from "../TimerButton/AddTimerButton";

interface AddTimerModalProps {
	timerMinuteButtons: number[];
	setTimerMinuteButtons: React.Dispatch<React.SetStateAction<number[]>>;
	setIsTimerAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isTimerAddModalOpen: boolean;
}
const AddTimerModal = (props: AddTimerModalProps): JSX.Element => {
	const {
		timerMinuteButtons,
		setTimerMinuteButtons,
		setIsTimerAddModalOpen,
		isTimerAddModalOpen,
	} = props;

	useEffect(() => {
		if (isTimerAddModalOpen) {
			// focus on the input when the modal opens
			document.getElementById("AddTimerInput")?.focus();
		}
	}, [isTimerAddModalOpen]);
	return (
		<div>
			<AddTimerButton
				timerMinuteButtons={timerMinuteButtons}
				setTimerMinuteButtons={setTimerMinuteButtons}
				setIsTimerAddModalOpen={setIsTimerAddModalOpen}
			/>
		</div>
	);
};

export default AddTimerModal;
