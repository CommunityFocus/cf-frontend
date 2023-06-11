// Assuming a new user, a name window should appear once they Join a room. They would be asked to input their name themselves or choose from offered. (Choosing from offered is out of scope for this ticket)
// If the user exists aka if the username exists from the browser's local storage:
// don't bring up the name window
// Once in the room, present users the option to change their username on a name change modal and update their local storage with the updated username on submission.

import { useState } from "react";

const ModalToggle = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggle = (): void => {
		return setIsOpen(!isOpen);
	};
	return {
		isOpen,
		toggle,
	};
};

export default ModalToggle;
