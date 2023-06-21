import React, { useState } from "react";

const UserNameForm = (): JSX.Element => {
	const [userNameData, setUserNameData] = useState({
		userName: "",
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setUserNameData((prevUserNameData) => ({
			...prevUserNameData,
			[name]: value,
		}));
	};
	const handleSubmit = (event: React.FormEvent): void => {
		event.preventDefault();
		localStorage.setItem("userName", userNameData);
		// ? validation needed for form submission
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
