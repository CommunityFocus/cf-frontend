import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import socket from "./components/socket";
import Room from "./components/Room.tsx";
import DefaultRoom from "./components/DefaultRoom.tsx";
import LandingPage from "./components/LandingPage.tsx";

const App = (): JSX.Element => {
	const [globalUsersConnected, setGlobalUsersConnected] = useState<number>(0);

	const onGlobalUsers = ({
		globalUsersCount,
	}: {
		globalUsersCount: number;
	}) => {
		setGlobalUsersConnected(globalUsersCount);
	};

	useEffect(() => {
		socket.on("globalUsers", onGlobalUsers);

		return () => {
			socket.off("globalUsers", onGlobalUsers);
		};
	}, []);
	return (
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
						<Room globalUsersConnected={globalUsersConnected} />
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
	);
};

export default App;
