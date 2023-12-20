import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Tooltip } from "react-tooltip";
import socket from "./components/Socket/socket";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { ThemeType } from "../common/theme";
import "reactjs-popup/dist/index.css";
import ContributorsPage from "./Pages/Contributors/ContributorsPage";
import ModalContext from "./components/Modal/ModalContext";
import UsernameContext from "./components/Username/UsernameContext";
import ValidRoom from "./Pages/Room/ValidRoom";
import DefaultRoom from "./Pages/DefaultRoom/DefaultRoom";
import { tracker } from "../common/common";

const App = (): JSX.Element => {
	const [globalUsersConnected, setGlobalUsersConnected] = useState<number>(0);
	const [isConnected, setIsConnected] = useState<boolean>(false);
	const [isBreak, setIsBreak] = useState<boolean>(false);
	const [themeGroup, setThemeGroup] = useState<keyof typeof ThemeType>(
		(localStorage.getItem("themeGroup") as keyof typeof ThemeType) in
			ThemeType
			? (localStorage.getItem("themeGroup") as keyof typeof ThemeType)
			: "original"
	);
	const [isUsernamModalOpen, setIsUsernameModalOpen] =
		useState<boolean>(false);
	const [userName, setUserName] = useState<string>(
		localStorage.getItem("userName") || ""
	);

	useEffect(() => {
		if (process.env.NODE_ENV === "production") {
			tracker.start({
				userID: userName,
			});
		}
	}, []);

	const onGlobalUsers = ({
		globalUsersCount,
	}: {
		globalUsersCount: number;
	}): void => {
		setGlobalUsersConnected(globalUsersCount);
	};

	const onConnect = (): void => {
		setIsConnected(true);
	};

	const onDisconnect = (): void => {
		setIsConnected(false);
	};

	useEffect(() => {
		socket.on("globalUsers", onGlobalUsers);
		socket.on("connect", onConnect);
		socket.on("disconnect", onDisconnect);

		return () => {
			socket.off("globalUsers", onGlobalUsers);
			socket.off("connect", onConnect);
			socket.off("disconnect", onDisconnect);
		};
	}, []);

	return (
		<ThemeProvider theme={{ themeGroup, setThemeGroup }}>
			<UsernameContext.Provider
				value={useMemo(
					() => ({
						userName,
						setUserName,
					}),
					[userName, setUserName]
				)}
			>
				<ModalContext.Provider
					value={useMemo(
						() => ({
							isUsernamModalOpen,
							setIsUsernameModalOpen,
						}),
						[isUsernamModalOpen, setIsUsernameModalOpen]
					)}
				>
					<Tooltip id="my-tooltip" style={{ zIndex: 99 }} />
					<BrowserRouter>
						<Routes>
							<Route
								path="/"
								element={
									<LandingPage
										globalUsersConnected={
											globalUsersConnected
										}
										isBreak={isBreak}
										isConnected={isConnected}
									/>
								}
							/>

							<Route
								path="/contributors"
								element={
									<ContributorsPage
										globalUsersConnected={
											globalUsersConnected
										}
										isBreak={isBreak}
										isConnected={isConnected}
									/>
								}
							/>

							<Route path="admin" element={<h2>Admin</h2>} />
							<Route
								path="timerlist"
								element={<h2>timerlist</h2>}
							/>

							<Route
								path="/:room"
								element={
									<ValidRoom
										globalUsersConnected={
											globalUsersConnected
										}
										isBreak={isBreak}
										setIsBreak={setIsBreak}
										isConnected={isConnected}
										setIsConnected={setIsConnected}
									/>
								}
							/>
							<Route
								path="*"
								element={
									<DefaultRoom
										globalUsersConnected={
											globalUsersConnected
										}
										isBreak={isBreak}
										isConnected={isConnected}
									/>
								}
							/>
						</Routes>
					</BrowserRouter>
				</ModalContext.Provider>
			</UsernameContext.Provider>
		</ThemeProvider>
	);
};

export default App;
