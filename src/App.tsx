import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import socket from "./components/Socket/socket";
import Room from "./components/Room/Room";
import DefaultRoom from "./components/DefaultRoom/DefaultRoom";
import LandingPage from "./components/LandingPage/LandingPage";
import { theme } from "../common/theme";

const App = (): JSX.Element => {
	const [globalUsersConnected, setGlobalUsersConnected] = useState<number>(0);
	const [themeGroup, setThemeGroup] = useState(theme.original);

	const onGlobalUsers = ({
		globalUsersCount,
	}: {
		globalUsersCount: number;
	}): void => {
		setGlobalUsersConnected(globalUsersCount);
	};

	useEffect(() => {
		socket.on("globalUsers", onGlobalUsers);

		return () => {
			socket.off("globalUsers", onGlobalUsers);
		};
	}, []);
	return (
		<ThemeProvider theme={themeGroup}>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<LandingPage
								globalUsersConnected={globalUsersConnected}
							/>
						}
					/>
					<Route
						path="/:room"
						element={
							<Room
								globalUsersConnected={globalUsersConnected}
								setThemeGroup={setThemeGroup}
							/>
						}
					/>
					<Route
						path="/default"
						element={
							<DefaultRoom
								globalUsersConnected={globalUsersConnected}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
