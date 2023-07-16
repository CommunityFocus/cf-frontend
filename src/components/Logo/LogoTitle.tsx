import { useNavigate } from "react-router-dom";
import { LogoText } from "./LogoTitle.styled";

const LogoTitle = (): JSX.Element => {
	// useNavigate to go to home page
	const navigate = useNavigate();

	return (
		<div>
			<LogoText
				onClick={(): void => {
					navigate("/");
				}}
			>
				CommunityFocus
			</LogoText>
		</div>
	);
};

export default LogoTitle;

/*
 *				<Button
					type="button"
					onClick={(): void => {
						navigate(`/${slugName}`);
						window.location.reload();
					}}
				>
					Join a room
				</Button>
 */
