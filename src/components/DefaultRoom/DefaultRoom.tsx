import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { theme } from "../../../common/theme";
import StyledDiv from "./DefaultRoom.styled";
import { GlobalStyle } from "../Room/Room.styled";

const DefaultRoom = (props: {
	globalUsersConnected: number;
	isBreak: boolean;
}): JSX.Element => {
	const { globalUsersConnected, isBreak } = props;
	const Navigate = useNavigate();

	const { themeGroup } = useContext(ThemeContext);

	const { workBackground, breakBackground } =
		theme[themeGroup as keyof typeof theme];

	return (
		<>
			<Header isBreak={isBreak} />
			<GlobalStyle
				backColor={!isBreak ? workBackground : breakBackground}
			/>

			<StyledDiv>
				<h1>404</h1>
				<h1>This room is not available.</h1>
				<button
					type="button"
					onClick={(): void => {
						Navigate("/");
					}}
				>
					Back
				</button>
				<Footer numUsers={globalUsersConnected} isBreak={isBreak} />
			</StyledDiv>
		</>
	);
};

export default DefaultRoom;
