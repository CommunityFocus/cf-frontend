// import { useContext } from 'react'

const UserNameModal = (): JSX.Element => {
	// const { isOpen, handleClose } = useModalContext();
	const storedUserName = localStorage.getItem("userName");

	return (
		<h3>
			This is a test modal. This is the current user: {storedUserName}
		</h3>
	);
};

export default UserNameModal;
