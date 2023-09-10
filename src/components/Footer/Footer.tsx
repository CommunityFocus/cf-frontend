import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { Tooltip } from "react-tooltip";
import useWindowSize from "use-window-size-v2";
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
	usersInRoom?: number;
}

const Footer = ({
	numUsers,
	isBreak,
	connectionStatus,
	usersInRoom = undefined,
}: FooterProps): JSX.Element => {
	const { themeGroup } = useContext(ThemeContext);
	const { width } = useWindowSize();

	const { workAccent, breakAccent, workGrey } =
		theme[themeGroup as keyof typeof theme];

	return (
		<StyledFooter backColor={!isBreak ? workAccent : breakAccent}>
			<StyledText color={workGrey}>
				<span>
					{width > 400 &&
						usersInRoom !== undefined &&
						`${usersInRoom} ${
							usersInRoom === 0 || usersInRoom > 1
								? "users are"
								: "user is"
						} in the room `}

					{width < 400 &&
						usersInRoom !== undefined &&
						`${usersInRoom} ${
							usersInRoom === 0 || usersInRoom > 1
								? "users"
								: "user"
						}`}

					{width > 865 && usersInRoom !== undefined && " || "}
					
					{width > 865 &&
						` ${numUsers} ${
							numUsers === 0 || numUsers > 1
								? "users are"
								: "user is"
						} currently using the Community Focus app`}
				</span>
			</StyledText>
			<StyledConnectionState>{connectionStatus}</StyledConnectionState>
			<Tooltip id="my-tooltip" />
		</StyledFooter>
	);
};

Footer.defaultProps = {
	connectionStatus: null,
	usersInRoom: undefined,
};

export default Footer;
