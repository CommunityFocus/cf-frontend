import ReactGA from "react-ga4";
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
				onClick={(): void => {
					setIsModalOpen(false);

					// react ga
					ReactGA.event({
						category: "Modal",
						action: "Click",
						label: "Close Modal",
					});
				}}
			>
				Close
			</StyledModalButton>
		</StyledModal>
	);
};

export default ModalComponent;
