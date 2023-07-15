import { ThemeContext } from "styled-components";
import { useContext } from "react";
import LogoTitle from "../Logo/LogoTitle";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import StyledHeader from "./Header.styled";
import { theme } from "../../../common/theme";

const Header = (): JSX.Element => {
	const { themeGroup } = useContext(ThemeContext);

	const { workAccent } = theme[themeGroup as keyof typeof theme];

	return (
		<StyledHeader backColor={workAccent}>
			<LogoTitle />
			<WelcomeMessage name="Mario" />
		</StyledHeader>
	);
};

export default Header;
