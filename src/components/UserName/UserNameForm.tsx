import React, { useState } from "react";

const UserNameForm = (): JSX.Element => {
	const [userNameData, setUserNameData] = useState<string>("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setUserNameData(value.toString());
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		localStorage.setItem("userName", userNameData);
	};
	// remove classNames from return (styled components - see LandingPage styled file)
	return (
		<form onSubmit={handleSubmit}>
			<div>
				Please enter your username:
				<input
					type="text"
					placeholder="Username"
					name="userName"
					onChange={handleChange}
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default UserNameForm;
