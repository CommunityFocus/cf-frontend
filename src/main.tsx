import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Room from "./components/Room.tsx";
import DefaultRoom from "./components/DefaultRoom.tsx";
import LandingPage from "./components/LandingPage.tsx";
import ModalProvider from "./context/ModalContext/Modal.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ModalProvider>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/:room" element={<Room />} />
					<Route path="/default" element={<DefaultRoom />} />
				</Routes>
			</ModalProvider>
		</BrowserRouter>
	</React.StrictMode>
);
