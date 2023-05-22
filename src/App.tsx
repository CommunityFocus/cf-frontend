import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Room from "./components/Room";
import { themeChange } from "theme-change";
import { useEffect } from "react";
import ThemePicker from "./components/ThemePicker";

export default function App() {
  useEffect(() => {
    themeChange(false);
    // false parameter is required for react project. See: https://github.com/saadeghi/theme-change
  }, []);

  return (
    <div className="App">
      <>
      <ThemePicker />
      </>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:room" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
