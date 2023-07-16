import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { StyledFooter, StyledText } from "./Footer.styled";
import { theme } from "../../../common/theme";

interface FooterProps {
	numUsers: number;
	isBreak: boolean;
}

const Footer = ({ numUsers, isBreak }: FooterProps): JSX.Element => {
	const { themeGroup } = useContext(ThemeContext);

	const { workAccent, breakAccent } = theme[themeGroup as keyof typeof theme];

	return (
		<StyledFooter backColor={!isBreak ? workAccent : breakAccent}>
			<StyledText>
				{`${numUsers} ${
					numUsers === 0 || numUsers > 1 ? "users are" : "user is"
				} currently using the Community Focus app`}
			</StyledText>
		</StyledFooter>
	);
};
export default Footer;
