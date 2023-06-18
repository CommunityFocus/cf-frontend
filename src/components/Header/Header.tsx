import LogoTitle from "../Logo/LogoTitle";
import WelcomeMessage from "../WelcomeMessage";
import StyledHeader from "./Header.styled";

const Header = (): JSX.Element => {
	return (
		<StyledHeader>
			<WelcomeMessage name="Mario" />
			<LogoTitle />
		</StyledHeader>
	);
};

export default Header;
