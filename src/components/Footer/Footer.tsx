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
	usersInRoom: number;
}

const Footer = ({
	numUsers,
	isBreak,
	connectionStatus,
	usersInRoom,
}: FooterProps): JSX.Element => {
	const { themeGroup } = useContext(ThemeContext);

	const { workAccent, breakAccent, workGrey } =
		theme[themeGroup as keyof typeof theme];

	return (
		<StyledFooter backColor={!isBreak ? workAccent : breakAccent}>
			<StyledText color={workGrey}>
				<span>
					{usersInRoom !== 0 &&
						`${usersInRoom} ${
							usersInRoom === 0 || usersInRoom > 1
								? "users are"
								: "user is"
						} in the room || `}
					{`${numUsers} ${
						numUsers === 0 || numUsers > 1 ? "users are" : "user is"
					} currently using the Community Focus app`}
				</span>
			</StyledText>
			<StyledConnectionState>{connectionStatus}</StyledConnectionState>
		</StyledFooter>
	);
};

Footer.defaultProps = {
	connectionStatus: null,
};

export default Footer;
