import React from "react";
import ReactDOM from "react-dom/client";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import App from "./App";
import "./main.css";

TimeAgo.addDefaultLocale(en);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
