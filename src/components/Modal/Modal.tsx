import StyledUsernameModal from "./Modal.styled";
import { StyledButton } from "./UsernameModal.styled";

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
	StyledUsernameModal.setAppElement("#root");

	return (
		<StyledUsernameModal
			isOpen={isModalOpen}
			onRequestClose={(): void => {
				setIsModalOpen(false);
			}}
		>
			{children}
			<StyledButton
				type="button"
				onClick={(): void => setIsModalOpen(false)}
			>
				Close
			</StyledButton>
		</StyledUsernameModal>
	);
};

export default ModalComponent;
