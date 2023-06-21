import { useState } from "react";

export interface ModalContextInterface {
	isOpen: boolean;
	handleOpen: () => void;
	handleClose: () => void;
	handleToggle: () => void;
}

const useModal = (): ModalContextInterface => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleToggle = () => {
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
