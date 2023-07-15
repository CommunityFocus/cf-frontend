import { ThemeContext } from "styled-components";
import { useContext } from "react";
import LogoTitle from "../Logo/LogoTitle";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import StyledHeader from "./Header.styled";

const Header = (): JSX.Element => {
	const { workAccent } = useContext(ThemeContext);

	return (
		<StyledHeader backColor={workAccent}>
			<LogoTitle />
			<WelcomeMessage name="Mario" />
		</StyledHeader>
	);
};

export default Header;
