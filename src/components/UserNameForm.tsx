import React from "react";

interface PropInterface {
	setUserName: (userName: string) => void;
	setIsModalOpen: (isShowModal: boolean) => void;
}

const UserNameForm = (props: PropInterface): JSX.Element => {
	const { setUserName, setIsModalOpen } = props;

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		setUserName(event.target.userName.value);
		setIsModalOpen(Boolean(!localStorage.getItem("userName")));
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				Username:
				<input type="text" placeholder="Username" name="userName" />
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default UserNameForm;
