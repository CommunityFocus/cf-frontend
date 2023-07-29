import { createContext } from "react";

interface ModalContextProps {
	isUsernamModalOpen: boolean;
	setIsUsernameModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default createContext({} as ModalContextProps);
