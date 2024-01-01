import { useEffect } from "react";
import ChangeTimerTitle from "../TimerTitle/ChangeTimerTitle";

interface TitleModalProps {
	isTitleModalOpen: boolean;
	setIsTitleModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isBreak: boolean;
}
const TitleModal = (props: TitleModalProps): JSX.Element => {
	const { isTitleModalOpen, setIsTitleModalOpen, isBreak } = props;

	useEffect(() => {
		if (isTitleModalOpen) {
			document.getElementById("title-input")?.focus();
		}
	}, [isTitleModalOpen]);
	return (
		<div>
			<ChangeTimerTitle
				setIsTitleModalOpen={setIsTitleModalOpen}
				isBreak={isBreak}
			/>
		</div>
	);
};

export default TitleModal;
