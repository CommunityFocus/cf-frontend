import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Room from "./components/Room";
import { themeChange } from "theme-change";
import { useEffect } from "react";
import { themeValues } from "../theme";

export default function App() {
  useEffect(() => {
    themeChange(false);
    // false parameter is required for react project. See: https://github.com/saadeghi/theme-change
  }, []);

  return (
    <div className="App">
      <>
        <select data-choose-theme>
          <option value="">Default</option>
          {themeValues.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
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
