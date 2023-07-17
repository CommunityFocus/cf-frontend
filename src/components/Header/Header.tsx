import { ThemeContext } from "styled-components";
import { useContext } from "react";
import Dropdown from "react-dropdown";
import LogoTitle from "../Logo/LogoTitle";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import { ThemeType, theme, themeOptions } from "../../../common/theme";
import { StyledDiv, StyledHeader } from "./Header.styled";

interface HeaderProps {
	isBreak: boolean;
}

const Header = ({ isBreak }: HeaderProps): JSX.Element => {
	const { themeGroup, setThemeGroup } = useContext(ThemeContext);

	const { workAccent, breakAccent, workGrey } =
		theme[themeGroup as keyof typeof theme];

	return (
		<StyledHeader backColor={!isBreak ? workAccent : breakAccent}>
			<LogoTitle color={workGrey} />
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

				<WelcomeMessage name="Mario" color={workGrey} />
			</StyledDiv>
		</StyledHeader>
	);
};

export default Header;
