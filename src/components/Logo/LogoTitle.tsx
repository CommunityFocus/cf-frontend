import { useNavigate } from "react-router-dom";
import { LogoText, StyledDiv, StyledImg } from "./LogoTitle.styled";

interface LogoTitleProps {
	color: string;
}

const LogoTitle = (props: LogoTitleProps): JSX.Element => {
	const { color } = props;
	// useNavigate to go to home page
	const navigate = useNavigate();

	return (
		<StyledDiv>
			<LogoText
				onClick={(): void => {
					navigate("/");
				}}
				color={color}
			>
				<StyledImg src="/images/communityFocus.png" alt="logo" />
				CommunityFocus
			</LogoText>
		</StyledDiv>
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
