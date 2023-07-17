import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";
import { SERVER_URL } from "../../../common/common";
import { Title, Center, Button } from "./LandingPage.styled";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { theme } from "../../../common/theme";
import { GlobalStyle } from "../Room/Room.styled";

const LandingPage = (props: {
	globalUsersConnected: number;
	isBreak: boolean;
}): JSX.Element => {
	const { globalUsersConnected, isBreak } = props;
	const [slugName, setSlugName] = useState<string>("");
	const navigate = useNavigate();

	const { themeGroup } = useContext(ThemeContext);

	const { workBackground, breakBackground, workGrey } =
		theme[themeGroup as keyof typeof theme];

	useEffect(() => {
		axios
			.get(`${SERVER_URL}/api/v1/getSlug`)
			.then((res) => {
				setSlugName(res.data.slug);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<Header isBreak={isBreak} />
			<GlobalStyle
				backColor={!isBreak ? workBackground : breakBackground}
			/>

			<Center>
				<Title color={workGrey}>Community Focus</Title>
				<Button
					type="button"
					onClick={(): void => {
						navigate(`/${slugName}`);
						window.location.reload();
					}}
				>
					Join a room
				</Button>
				<Footer numUsers={globalUsersConnected} isBreak={isBreak} />
			</Center>
		</>
	);
};

export default LandingPage;
