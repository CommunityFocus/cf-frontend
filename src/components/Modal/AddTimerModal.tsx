import { useEffect } from "react";
import AddTimerButton from "../TimerButton/AddTimerButton";

interface AddTimerModalProps {
	timerMinuteButtons: number[];
	setIsTimerAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isTimerAddModalOpen: boolean;
	isBreak: boolean;
	updateTimerButtons: ({
		timerButtons,
		isBreak,
	}: {
		timerButtons: number[];
		isBreak: boolean;
	}) => void;
}
const AddTimerModal = (props: AddTimerModalProps): JSX.Element => {
	const {
		timerMinuteButtons,
		setIsTimerAddModalOpen,
		isTimerAddModalOpen,
		isBreak,
		updateTimerButtons,
	} = props;

	useEffect(() => {
		if (isTimerAddModalOpen) {
			document.getElementById("AddTimerInput")?.focus();
		}
	}, [isTimerAddModalOpen]);
	return (
		<div>
			<AddTimerButton
				timerMinuteButtons={timerMinuteButtons}
				setIsTimerAddModalOpen={setIsTimerAddModalOpen}
				isBreak={isBreak}
				updateTimerButtons={updateTimerButtons}
			/>
		</div>
	);
};

export default AddTimerModal;
