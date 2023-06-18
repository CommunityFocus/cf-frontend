import LogoTitle from "../Logo/LogoTitle";
import WelcomeMessage from "../WelcomeMessage";
import StyledHeader from "./Header.styled";

const Header = (): JSX.Element => {
	return (
		<StyledHeader>
			<LogoTitle />
			<WelcomeMessage name="Mario" />
		</StyledHeader>
	);
};

export default Header;
