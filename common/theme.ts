import { createContext } from "react";

export enum ThemeType {
	original = "original",
	funky = "funky",
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
		workBackground: "#c200fb",
		workAccent: "#a101d2",
		breakBackground: "#ffbc0a",
		breakAccent: "#c5930c",
		workGrey: "#1f1f1f",
		workButtonColor: "#9419ad",
		workButtonTextColor: "#ffffff",
		breakButtonColor: "#a37f19",
		breakButtonTextColor: "#ffffff",
	},
};

export const themeSwitchContext = createContext("original");
