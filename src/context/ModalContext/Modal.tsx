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
	children: JSX.Element | ReactNode;
};

const ModalProvider = ({ children }: Props): JSX.Element => {
	const modal = useModal();
	return (
		<ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
	);
};

export default ModalProvider;
