// Assuming a new user, a name window should appear once they Join a room. They would be asked to input their name themselves or choose from offered. (Choosing from offered is out of scope for this ticket)
// If the user exists aka if the username exists from the browser's local storage:
// don't bring up the name window
// Once in the room, present users the option to change their username on a name change modal and update their local storage with the updated username on submission.

// ? Things to do:
// todo: user joins the room --> then if localStorage is empty --> Modal dialog pops up
// todo: user joins the room --> if localStorage has username already --> Modal dialog doesn't pop up
// todo: on Landing Page don't show user name modal
// todo: use react-modal npm package and try shit out

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
