import { createContext } from "react";

export enum ThemeType {
	original = "original",
	funky = "funky",
	night = "night",
	sunset = "sunset",
	neon = "neon",
}

export const themeOptions = Object.keys(ThemeType).map((key) => ({
	value: key,
	label: key,
}));

export interface Theme {
	workBackground: string;
	workAccent: string;
	breakBackground: string;
	breakAccent: string;
	workGrey: string;
	workButtonColor: string;
	workButtonTextColor: string;
	breakButtonColor: string;
	breakButtonTextColor: string;
}

export const theme: { [key in ThemeType]: Theme } = {
	original: {
		workBackground: "#1a6a48",
		workAccent: "#0d4a30",
		breakBackground: "#266b9c",
		breakAccent: "#105396",
		workGrey: "#8bbfac",
		workButtonColor: "#44c18d",
		workButtonTextColor: "#ffffff",
		breakButtonColor: "#0589e8",
		breakButtonTextColor: "#ffffff",
	},
	funky: {
		workBackground: "brown",
		workAccent: "darkgreen",
		breakBackground: "#e3c852",
		breakAccent: "#818237",
		workGrey: "white",
		workButtonColor: "#e3c852",
		workButtonTextColor: "#ffffff",
		breakButtonColor: "brown",
		breakButtonTextColor: "#ffffff",
	},
	night: {
		workBackground: "#040D12",
		workAccent: "#183D3D",
		breakBackground: "#102a43",
		breakAccent: "#486581",
		workGrey: "#8bbfac",
		workButtonColor: "#183D3D",
		workButtonTextColor: "#93B1A6",
		breakButtonColor: "#486581",
		breakButtonTextColor: "#93B1A6",
	},
	sunset: {
		workBackground: "#6e000a",
		workAccent: "#580a14",
		breakBackground: "#0d131a",
		breakAccent: "#710007",
		workGrey: "#cc4f1d",
		workButtonColor: "#84000a",
		workButtonTextColor: "#ffffff",
		breakButtonColor: "#1e2c3e",
		breakButtonTextColor: "#ffffff",
	},
	neon: {
		workBackground: "linear-gradient(100deg, #0062ff, #da61ff)",
		workAccent: "#4ea9c0",
		breakBackground: "linear-gradient(150deg, #0a2468, #973882)",
		breakAccent: "#003f66",
		workGrey: "#baeddf",
		workButtonColor: "#0f54cd",
		workButtonTextColor: "#fff",
		breakButtonColor: "#7e13a3",
		breakButtonTextColor: "#b2d7c9",
	},
};

export const themeSwitchContext = createContext("original");
