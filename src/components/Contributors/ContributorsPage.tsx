import { useContext } from "react";
import { ThemeContext } from "styled-components";
import ConnectionState from "../ConnectionState/ConnectionState";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { GlobalStyle } from "../Room/Room.styled";
import { theme } from "../../../common/theme";
import { Center } from "../LandingPage/LandingPage.styled";
import ContributorsWidget from "./ContributorsWidget";

const ContributorsPage = (props: {
	globalUsersConnected: number;
	isBreak: boolean;
	isConnected: boolean;
}): JSX.Element => {
	const { globalUsersConnected, isBreak, isConnected } = props;

	const { themeGroup } = useContext(ThemeContext);

	const { workBackground, breakBackground } =
		theme[themeGroup as keyof typeof theme];

	return (
		<>
			<Header isBreak={isBreak} />
			<GlobalStyle
				backColor={!isBreak ? workBackground : breakBackground}
			/>
			<Center>
				<ContributorsWidget isHomePage={false} />
			</Center>
			<Footer
				numUsers={globalUsersConnected}
				isBreak={isBreak}
				connectionStatus={<ConnectionState isConnected={isConnected} />}
			/>
		</>
	);
};

export default ContributorsPage;
