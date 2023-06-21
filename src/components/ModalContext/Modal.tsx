// Assuming a new user, a name window should appear once they Join a room. They would be asked to input their name themselves or choose from offered. (Choosing from offered is out of scope for this ticket)
// If the user exists aka if the username exists from the browser's local storage:
// don't bring up the name window
// Once in the room, present users the option to change their username on a name change modal and update their local storage with the updated username on submission.

// ? Things to do:
// ?  Form for username input
// ?  Modal on joining a room
// ?  validation of username input?
// ?  On submission of username input, update local storage with the new username
// ?  on submission, should route to the room page
import React, { useContext, ReactNode } from "react";
import useModal, { ModalContextInterface } from "./useModal";

const ModalContext = React.createContext<ModalContextInterface | null>(null);

export const useModalContext = () => {
	return useContext(ModalContext);
};

type Props = {
	children: ReactNode;
};

const ModalProvider = ({ children }: Props) => {
	const modal = useModal();
	return (
		<ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
	);
};

export default ModalProvider;
