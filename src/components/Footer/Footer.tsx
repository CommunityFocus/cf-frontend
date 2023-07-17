import { ThemeContext } from "styled-components";
import { useContext } from "react";
import {
	StyledConnectionState,
	StyledFooter,
	StyledText,
} from "./Footer.styled";
import { theme } from "../../../common/theme";

interface FooterProps {
	numUsers: number;
	isBreak: boolean;
	connectionStatus?: JSX.Element | null;
}

const Footer = ({
	numUsers,
	isBreak,
	connectionStatus,
}: FooterProps): JSX.Element => {
	const { themeGroup } = useContext(ThemeContext);

	const { workAccent, breakAccent, workGrey } =
		theme[themeGroup as keyof typeof theme];

	return (
		<StyledFooter backColor={!isBreak ? workAccent : breakAccent}>
			<StyledText color={workGrey}>
				<span>
					{`${numUsers} ${
						numUsers === 0 || numUsers > 1 ? "users are" : "user is"
					} currently using the Community Focus app`}
				</span>
			</StyledText>
			<StyledConnectionState color={workGrey}>
				{connectionStatus}
			</StyledConnectionState>
		</StyledFooter>
	);
};

Footer.defaultProps = {
	connectionStatus: null,
};

export default Footer;
