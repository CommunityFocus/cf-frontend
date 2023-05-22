import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Room from "./components/Room.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './main.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:room" element={<Room />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
