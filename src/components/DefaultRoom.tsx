import { useNavigate } from "react-router-dom";

const DefaultRoom = (): JSX.Element => {
	const Navigate = useNavigate();
	return (
		<>
			<h1>This room is not available.</h1>
			<button
				type="button"
				onClick={(): void => {
					Navigate("/");
				}}
			>
				Back
			</button>
		</>
	);
};

export default DefaultRoom;
