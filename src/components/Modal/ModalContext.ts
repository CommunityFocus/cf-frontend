import { createContext } from "react";

interface ModalContextProps {
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default createContext({} as ModalContextProps);
