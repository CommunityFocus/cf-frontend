import React, { useState } from "react";

const UserNameForm = (): JSX.Element => {
	const [userNameData, setUserNameData] = useState<string>("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setUserNameData(value.toString());
	};

	const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
		event.preventDefault();
		localStorage.setItem("userName", userNameData);
	};

	return (
		<div className="form--container">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					Please enter your username:
					<input
						type="text"
						className="form-control"
						placeholder="Username"
						name="userName"
						onChange={handleChange}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default UserNameForm;
