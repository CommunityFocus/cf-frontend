import React, { useContext, ReactNode } from "react";
import useModal, {
	ModalContextInterface,
} from "../../components/hooks/useModal";

const ModalContext = React.createContext<ModalContextInterface | null>(null);

export const useModalContext = () => {
	return useContext(ModalContext);
};

type Props = {
	children: JSX.Element | ReactNode;
};

const ModalProviderContext = ({ children }: Props): JSX.Element => {
	const modal = useModal();
	return (
		<ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
	);
};

export default ModalProviderContext;
