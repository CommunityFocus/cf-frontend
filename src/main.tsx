import React from "react";
import ReactGA from "react-ga4";
import ReactDOM from "react-dom/client";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import App from "./App";
import "./main.css";

// google analytics
ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID || "null");

TimeAgo.addDefaultLocale(en);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
