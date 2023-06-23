import { useState } from "react";

export interface ModalContextInterface {
	isOpen: boolean;
	handleOpen: () => void;
	handleClose: () => void;
	handleToggle: () => void;
}

const useModal = (): ModalContextInterface => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	// const [modalContent, setModalContent] = useState<string>("Modal Content");

	const handleOpen = (): void => {
		setIsOpen(true);
	};

	const handleClose = (): void => {
		setIsOpen(false);
	};

	const handleToggle = (): void => {
		setIsOpen(!isOpen);
	};

	return {
		isOpen,
		handleOpen,
		handleClose,
		handleToggle,
	};
};

export default useModal;
