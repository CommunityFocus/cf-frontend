import React from "react";

interface PropInterface {
	userName: string;
	setUserName: (userName: string) => void;
	showModal: boolean;
	setShowModal: (showModal: boolean) => void;
}

const UserNameForm = (props): JSX.Element => {
	// const [userNameData, setUserNameData] = useState<string>("");
	const { userName, setUserName, showModal, setShowModal } = props;

	// * does handle change need to be here if we have a submit button?
	// const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
	// 	const { value } = event.target;
	// 	setUserName(value);
	// };

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		setUserName(event.target.userName.value);
	};
	// remove classNames from return (styled components - see LandingPage styled file)
	return (
		<div>
			{showModal ? (
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
			) : null}
		</div>
	);
};

export default UserNameForm;
