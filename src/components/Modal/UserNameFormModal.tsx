import {
	StyledContainerModal,
	OpenTestModal,
} from "./UserNameFormModal.styled";
import UserNameForm from "../UserNameForm";

const UserNameFormModal = (props) => {
	const { openModal, userName, setUserName, showModal, setShowModal } = props;
	console.log(props);
	return (
		<StyledContainerModal>
			<OpenTestModal onClick={openModal}>Open Test Modal</OpenTestModal>
			<UserNameForm
				userName={userName}
				setUserName={setUserName}
				showModal={showModal}
				setShowModal={setShowModal}
			/>
		</StyledContainerModal>
	);
};

export default UserNameFormModal;
