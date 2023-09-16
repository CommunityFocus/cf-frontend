import React, { useEffect, useState } from "react";
import socket from "../Socket/socket";
import { roomName } from "../../../common/common";
import { TimerFormContainer } from "./TimerControls.styled";

interface TimerFormProps {
	isLoaded: boolean;
}

const TimerForm = (props: TimerFormProps): JSX.Element => {
	const { isLoaded } = props;
	const [value, setValue] = useState<string>("");
	const [debugMode, setDebugMode] = useState<boolean>(false);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();

		socket.emit("startCountdown", {
			roomName,
			durationInSeconds: parseInt(value),
		});
	};

	// eslint-disable-next-line
	// @ts-ignore
	window.magic = (): void => {
		setDebugMode(true);
		console.log("Magic mode enabled");
	};

	useEffect(() => {
		console.log("isLoaded", isLoaded);
	}, [isLoaded]);

	return (
		<TimerFormContainer isVisibile={debugMode} isLoaded={isLoaded}>
			<form onSubmit={onSubmit}>
				<input
					onChange={(e): void => setValue(e.target.value)}
					value={value}
					type="number"
					placeholder="Enter something"
				/>

				<button type="submit">Submit</button>
			</form>
		</TimerFormContainer>
	);
};

export default TimerForm;
