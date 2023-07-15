import { ThemeContext } from "styled-components";
import { useContext } from "react";
import Dropdown from "react-dropdown";
import LogoTitle from "../Logo/LogoTitle";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import { ThemeType, theme, themeOptions } from "../../../common/theme";
import { StyledDiv, StyledHeader } from "./Header.styled";

const Header = (): JSX.Element => {
	const { themeGroup, setThemeGroup } = useContext(ThemeContext);

	const { workAccent } = theme[themeGroup as keyof typeof theme];

	return (
		<StyledHeader backColor={workAccent}>
			<LogoTitle />
			<StyledDiv>
				<Dropdown
					options={themeOptions}
					onChange={(selectedOption): void => {
						setThemeGroup(
							selectedOption.value as keyof typeof ThemeType
						);

						localStorage.setItem(
							"themeGroup",
							selectedOption.value as keyof typeof ThemeType
						);
					}}
					value={themeGroup}
					placeholder="Pick a theme"
				/>

				<WelcomeMessage name="Mario" />
			</StyledDiv>
		</StyledHeader>
	);
};

export default Header;
