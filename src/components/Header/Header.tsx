import { ThemeContext } from "styled-components";
import { useContext } from "react";
import Dropdown from "react-dropdown";
import LogoTitle from "../Logo/LogoTitle";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import StyledHeader from "./Header.styled";
import { ThemeType, theme, themeOptions } from "../../../common/theme";

const Header = (): JSX.Element => {
	const { themeGroup, setThemeGroup } = useContext(ThemeContext);

	const { workAccent } = theme[themeGroup as keyof typeof theme];

	return (
		<StyledHeader backColor={workAccent}>
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
			<LogoTitle />
			<WelcomeMessage name="Mario" />
		</StyledHeader>
	);
};

export default Header;
