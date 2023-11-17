import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import { useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { theme } from "../../../common/theme";
import { StyledDiv, StyledText } from "./DefaultRoom.styled";
import { GlobalStyle } from "../Room/Room.styled";
import ConnectionState from "../ConnectionState/ConnectionState";
import { StyledButton } from "../Button/Button";
import UsernameContext from "../Username/UsernameContext";

const DefaultRoom = (props: {
	globalUsersConnected: number;
	isBreak: boolean;
	isConnected: boolean;
}): JSX.Element => {
	const { globalUsersConnected, isBreak, isConnected } = props;
	const Navigate = useNavigate();

	const { themeGroup } = useContext(ThemeContext);
	const { userName } = useContext(UsernameContext);

	const { workBackground, breakBackground, workGrey } =
		theme[themeGroup as keyof typeof theme];

	useEffect(() => {
		document.title = "Community Focus";
	}, []);

	useEffect(() => {
		ReactGA.send({
			hitType: "pageview",
			page: `/default`,
			userID: userName,
		});
	}, []);

	return (
		<>
			<Header isBreak={isBreak} />
			<GlobalStyle
				backColor={!isBreak ? workBackground : breakBackground}
			/>

			<StyledDiv>
				<StyledText color={workGrey}>
					This room is not available
				</StyledText>
				<StyledButton
					type="button"
					onClick={(): void => {
						Navigate("/");
					}}
				>
					Go Back
				</StyledButton>

				<Footer
					numUsers={globalUsersConnected}
					isBreak={isBreak}
					connectionStatus={
						<ConnectionState isConnected={isConnected} />
					}
				/>
			</StyledDiv>
		</>
	);
};

export default DefaultRoom;
