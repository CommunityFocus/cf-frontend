import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { theme } from "../../../common/theme";
import { StyledDiv, StyledText } from "./DefaultRoom.styled";
import { GlobalStyle } from "../Room/Room.styled";

const DefaultRoom = (props: {
	globalUsersConnected: number;
	isBreak: boolean;
}): JSX.Element => {
	const { globalUsersConnected, isBreak } = props;
	const Navigate = useNavigate();

	const { themeGroup } = useContext(ThemeContext);

	const { workBackground, breakBackground, workGrey } =
		theme[themeGroup as keyof typeof theme];

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
