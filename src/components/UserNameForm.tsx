import React from "react";

interface PropInterface {
	userName: string;
	setUserName: (userName: string) => void;
	showModal: boolean;
	setShowModal: (showModal: boolean) => void;
}

const UserNameForm = (props): JSX.Element => {
	const { userName, setUserName, setIsModalOpen } = props;

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		setUserName(event.target.userName.value);
		setIsModalOpen(Boolean(!localStorage.getItem("userName")));
	};
	// remove classNames from return (styled components - see LandingPage styled file)
	return (
		<div>
			{
				<form onSubmit={handleSubmit}>
					<div>
						Username:
						<input
							type="text"
							placeholder="Username"
							name="userName"
							// onChange={handleChange}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			}
		</div>
	);
};

export default UserNameForm;
