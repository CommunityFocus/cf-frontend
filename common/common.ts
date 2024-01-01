import Tracker from "@openreplay/tracker";
import { createContext } from "react";

const NODE_ENV = process.env.VITE_NODE_ENV;
const BACKEND_URL = process.env.BACKEND_URL || "null";

export const SERVER_URL =
	NODE_ENV === "production" ? BACKEND_URL : "http://localhost:4000";

export const roomName = window.location.href.split("/")[3] || "default";

export const adminPasswordEnv = process.env.ADMIN_PASSWORD;

export const OPENREPLAY_KEY = process.env.OPENREPLAY_KEY || "null";

export const tracker = new Tracker({
	projectKey: OPENREPLAY_KEY,
});

export const AdminContext = createContext(
	adminPasswordEnv === localStorage.getItem("adminPassword") &&
		adminPasswordEnv !== null
);
