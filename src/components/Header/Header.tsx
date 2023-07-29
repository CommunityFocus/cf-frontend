import { ThemeContext } from "styled-components";
import { useContext } from "react";
import Dropdown from "react-dropdown";
import LogoTitle from "../Logo/LogoTitle";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import { ThemeType, theme, themeOptions } from "../../../common/theme";
import { StyledDiv, StyledHeader } from "./Header.styled";
import ModalContext from "../Modal/ModalContext";
import ModalComponent from "../Modal/Modal";
import UsernameModal from "../Modal/UsernameModal";
import UsernameContext from "../Username/UsernameContext";

interface HeaderProps {
	isBreak: boolean;
}

const Header = ({ isBreak }: HeaderProps): JSX.Element => {
	const { themeGroup, setThemeGroup } = useContext(ThemeContext);
	const { isUsernamModalOpen, setIsUsernameModalOpen } =
		useContext(ModalContext);
	const { userName, setUserName } = useContext(UsernameContext);

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
				<WelcomeMessage
					name={userName || "Guest"}
					color={workGrey}
					onClick={(): void => {
						setIsUsernameModalOpen(!isUsernamModalOpen);
					}}
				/>
				<ModalComponent
					isModalOpen={isUsernamModalOpen}
					setIsModalOpen={setIsUsernameModalOpen}
				>
					<UsernameModal
						userName={userName}
						setUserName={setUserName}
						setIsUsernameModalOpen={setIsUsernameModalOpen}
						isUsernamModalOpen={isUsernamModalOpen}
					/>
				</ModalComponent>
			</StyledDiv>
		</StyledHeader>
	);
};

export default Header;
