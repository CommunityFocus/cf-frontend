import { useNavigate } from "react-router-dom";
import useWindowSize from "use-window-size-v2";
import { LogoText, StyledDiv, StyledImg } from "./LogoTitle.styled";

interface LogoTitleProps {
	color: string;
}

const LogoTitle = (props: LogoTitleProps): JSX.Element => {
	const { color } = props;
	// useNavigate to go to home page
	const navigate = useNavigate();
	const { width } = useWindowSize();

	return (
		<StyledDiv>
			<LogoText
				onClick={(): void => {
					navigate("/");
				}}
				color={color}
			>
				<StyledImg src="/images/communityFocus.png" alt="logo" />

				{width > 700 ? "CommunityFocus" : null}
				{width < 700 && width > 500 ? "CFocus" : null}
				{width < 500 && width > 400 ? "CF" : null}
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
