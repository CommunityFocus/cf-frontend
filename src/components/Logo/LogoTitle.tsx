import { useNavigate } from "react-router-dom";
import { LogoText } from "./LogoTitle.styled";

interface LogoTitleProps {
	color: string;
}

const LogoTitle = (props: LogoTitleProps): JSX.Element => {
	const { color } = props;
	// useNavigate to go to home page
	const navigate = useNavigate();

	return (
		<div>
			<LogoText
				onClick={(): void => {
					navigate("/");
				}}
				color={color}
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
