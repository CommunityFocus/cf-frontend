import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";
import { HiOutlineRefresh } from "react-icons/hi";
import { SERVER_URL } from "../../../common/common";
import {
	Title,
	Center,
	Button,
	StyledDivRow,
	StyledDivSpacer,
	StyledShareText,
} from "./LandingPage.styled";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { theme } from "../../../common/theme";
import { GlobalStyle } from "../Room/Room.styled";
import ConnectionState from "../ConnectionState/ConnectionState";
import ValidationInput from "../Modal/ValidationInput";
import validRoomname from "../../helpers/validRoomname";

const LandingPage = (props: {
	globalUsersConnected: number;
	isBreak: boolean;
	isConnected: boolean;
}): JSX.Element => {
	const { globalUsersConnected, isBreak, isConnected } = props;
	const [slugName, setSlugName] = useState<string>("");
	const [isActivated, setIsActivated] = useState<boolean>(false);

	const navigate = useNavigate();

	const { themeGroup } = useContext(ThemeContext);

	const { workBackground, breakBackground, workGrey } =
		theme[themeGroup as keyof typeof theme];

	const getSlug = async (): Promise<void> => {
		axios
			.get(`${SERVER_URL}/api/v1/getSlug`)
			.then((res) => {
				setSlugName(res.data.slug);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const navigateToRoom = (): void => {
		navigate(`/${slugName}`);
		window.location.reload();
	};

	useEffect(() => {
		getSlug();
		document.title = "Community Focus";
	}, []);

	return (
		<>
			<Header isBreak={isBreak} />
			<GlobalStyle
				backColor={!isBreak ? workBackground : breakBackground}
			/>

			<Center>
				<Title color={workGrey}>Community Focus</Title>
				<StyledShareText color={workGrey}>
					Create a shareable link
				</StyledShareText>
				<StyledDivSpacer>
					<StyledDivRow>
						<ValidationInput
							type="text"
							id="slug"
							placeholder="Enter a room name"
							value={slugName}
							validationText={validRoomname(slugName)}
							onChange={(
								event: React.ChangeEvent<HTMLInputElement>
							): void => {
								setSlugName(event.target.value);
							}}
							onKeyDown={(
								event: React.KeyboardEvent<HTMLInputElement>
							): void => {
								if (event.key === "Enter") {
									navigateToRoom();
								}
							}}
						/>
						<HiOutlineRefresh
							size={30}
							onClick={(): void => {
								getSlug();
								setIsActivated(true);
								setTimeout(() => {
									setIsActivated(false);
								}, 500);
							}}
							style={{
								cursor: "pointer",
								transform: isActivated ? "rotate(360deg)" : "",
								transition: "transform 0.5s ease",
							}}
						/>
					</StyledDivRow>
					<Button
						type="button"
						onClick={(): void => {
							navigateToRoom();
						}}
						disabled={validRoomname(slugName) !== false}
					>
						Join a room
					</Button>
				</StyledDivSpacer>
				<Footer
					numUsers={globalUsersConnected}
					isBreak={isBreak}
					connectionStatus={
						<ConnectionState isConnected={isConnected} />
					}
				/>
			</Center>
		</>
	);
};

export default LandingPage;
