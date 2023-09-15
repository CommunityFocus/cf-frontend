import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import socket from "../Socket/socket";
import { StyledWorkBreakBanner } from "../Room/Room.styled";
import {
	TitleEditButtonPosition,
	TitleEditEmojiSize,
} from "./TimerTitle.styled";
import ModalComponent from "../Modal/Modal";
import TitleModal from "../Modal/TitleModal";

interface TimerTitleProps {
	isLoaded: boolean;
	workGrey: string;
	isBreak: boolean;
}

const TimerTitle = (props: TimerTitleProps): JSX.Element => {
	const { isLoaded, workGrey, isBreak } = props;
	const [timerTitle, setTimerTitle] = useState<string>("");
	const [isTitleModalOpen, setIsTitleModalOpen] = useState<boolean>(false);

	useEffect(() => {
		socket.on("updatedTitle", ({ title }) => {
			setTimerTitle(title);
		});

		return () => {
			socket.off("updatedTitle");
		};
	}, []);

	return (
		<>
			<TitleEditButtonPosition>
				<StyledWorkBreakBanner color={workGrey} isLoaded={isLoaded}>
					{timerTitle || (isBreak ? "Break" : "Work")}
				</StyledWorkBreakBanner>
				<TitleEditEmojiSize color={workGrey} isLoaded={isLoaded}>
					<FiEdit onClick={(): void => setIsTitleModalOpen(true)} />
				</TitleEditEmojiSize>
			</TitleEditButtonPosition>
			<ModalComponent
				isModalOpen={isTitleModalOpen}
				setIsModalOpen={setIsTitleModalOpen}
			>
				<TitleModal
					isTitleModalOpen={isTitleModalOpen}
					setIsTitleModalOpen={setIsTitleModalOpen}
					isBreak={isBreak}
				/>
			</ModalComponent>
		</>
	);
};

export default TimerTitle;
