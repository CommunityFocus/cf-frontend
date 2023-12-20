import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";
import { HiOutlineRefresh } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { SERVER_URL } from "../../../common/common";
import {
	Title,
	Center,
	Button,
	StyledDivRow,
	StyledDivSpacer,
	StyledShareText,
	StyledBottomText,
} from "./LandingPage.styled";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { theme } from "../../../common/theme";
import { GlobalStyle } from "../Room/Room.styled";
import ConnectionState from "../../components/ConnectionState/ConnectionState";
import ValidationInput from "../../components/Modal/ValidationInput";
import validRoomname from "../../helpers/validRoomname";
import { StyledImg } from "../../components/Logo/LogoTitle.styled";
import ContributorsWidget from "../Contributors/ContributorsWidget";
import { ContributorsWidgetPosition } from "../Contributors/ContributorsWidget.styled";

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

	const navigateToContributors = (): void => {
		navigate("/contributors");
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
				<Title color={workGrey}>
					<StyledImg src="/images/communityFocus.png" alt="logo" />
					Community Focus
				</Title>

				<StyledShareText color={workGrey}>
					Pomodoro Timer for the Community. Join a room and work with
					others. Share the link and they can join you!
				</StyledShareText>
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

								// react ga
								ReactGA.event({
									category: "Landing Page",
									action: "Click",
									label: "Refresh Room Name",
								});
							}}
							style={{
								cursor: "pointer",
								transform: isActivated ? "rotate(360deg)" : "",
								transition: "transform 0.5s ease",
								color: workGrey,
							}}
							data-tooltip-id="my-tooltip"
							data-tooltip-content="Generate a new room name"
							data-tooltip-place="top"
						/>
					</StyledDivRow>
					<Button
						type="button"
						onClick={(): void => {
							navigateToRoom();

							// react ga
							ReactGA.event({
								category: "Landing Page",
								action: "Click",
								label: "Join a room",
							});
						}}
						disabled={validRoomname(slugName) !== false}
						data-tooltip-id="my-tooltip"
						data-tooltip-content="Join a shareable room"
						data-tooltip-place="top"
					>
						Join a room
					</Button>
				</StyledDivSpacer>

				<StyledBottomText>
					<StyledShareText color={workGrey}>
						{/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
						<span
							style={{
								cursor: "pointer",
							}}
							onClick={(): void => {
								navigateToContributors();

								// react ga
								ReactGA.event({
									category: "Landing Page",
									action: "Click",
									label: "Contributors",
								});
							}}
							onKeyDown={(
								event: React.KeyboardEvent<HTMLInputElement>
							): void => {
								if (event.key === "l") {
									navigateToContributors();
								}
							}}
						>
							Made by commununity members of #100Devs Discord
							server
						</span>
						<BsDiscord
							size={20}
							style={{ cursor: "pointer", margin: "0 0 0 5px" }}
							onClick={(): Window | null => {
								// react ga
								ReactGA.event({
									category: "Landing Page",
									action: "Click",
									label: "Discord",
								});

								return window.open(
									"https://leonnoel.com/100devs/",
									"_blank"
								);
							}}
						/>
						<AiFillGithub
							size={20}
							style={{ cursor: "pointer", margin: "0 0 0 5px" }}
							onClick={(): Window | null => {
								// react ga
								ReactGA.event({
									category: "Landing Page",
									action: "Click",
									label: "Github",
								});

								return window.open(
									"https://github.com/CommunityFocus/",
									"_blank"
								);
							}}
						/>
					</StyledShareText>
				</StyledBottomText>

				<Footer
					numUsers={globalUsersConnected}
					isBreak={isBreak}
					connectionStatus={
						<ConnectionState isConnected={isConnected} />
					}
				/>
			</Center>
			<ContributorsWidgetPosition>
				<ContributorsWidget isHomePage={!false} />
			</ContributorsWidgetPosition>
		</>
	);
};

export default LandingPage;
