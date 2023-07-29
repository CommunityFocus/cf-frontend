import StyledModal from "./Modal.styled";
import { StyledModalButton } from "./UsernameModal.styled";

interface ModalProps {
	isUsernamModalOpen: boolean;
	setIsUsernameModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	children: React.ReactNode;
}

const ModalComponent = ({
	isUsernamModalOpen,
	setIsUsernameModalOpen,
	children,
}: ModalProps): JSX.Element => {
	StyledModal.setAppElement("#root");

	return (
		<StyledModal
			isOpen={isUsernamModalOpen}
			onRequestClose={(): void => {
				setIsUsernameModalOpen(false);
			}}
		>
			{children}
			<StyledModalButton
				type="button"
				onClick={(): void => setIsUsernameModalOpen(false)}
			>
				Close
			</StyledModalButton>
		</StyledModal>
	);
};

export default ModalComponent;
