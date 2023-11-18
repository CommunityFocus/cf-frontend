import { useNavigate } from "react-router-dom";
import useWindowSize from "use-window-size-v2";
import ReactGA from "react-ga4";
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

					// react ga
					ReactGA.event({
						category: "Logo",
						action: "Click",
						label: "Home Page",
					});
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
