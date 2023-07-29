import StyledModal from "./Modal.styled";
import { StyledModalButton } from "./UsernameModal.styled";

interface ModalProps {
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	children: React.ReactNode;
}

const ModalComponent = ({
	isModalOpen,
	setIsModalOpen,
	children,
}: ModalProps): JSX.Element => {
	StyledModal.setAppElement("#root");

	return (
		<StyledModal
			isOpen={isModalOpen}
			onRequestClose={(): void => {
				setIsModalOpen(false);
			}}
		>
			{children}
			<StyledModalButton
				type="button"
				onClick={(): void => setIsModalOpen(false)}
			>
				Close
			</StyledModalButton>
		</StyledModal>
	);
};

export default ModalComponent;
