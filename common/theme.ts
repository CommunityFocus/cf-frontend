import { createContext } from "react";

export enum ThemeType {
	original = "original",
	// funky = "funky",
	night = "night",
	"Suprise me" = "Suprise me",
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

export const generateRandomColor = (): string => {
	const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	return randomColor;
};

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
	// funky: {
	// 	workBackground: "#c200fb",
	// 	workAccent: "#a101d2",
	// 	breakBackground: "#ffbc0a",
	// 	breakAccent: "#c5930c",
	// 	workGrey: "#1f1f1f",
	// 	workButtonColor: "#9419ad",
	// 	workButtonTextColor: "#ffffff",
	// 	breakButtonColor: "#a37f19",
	// 	breakButtonTextColor: "#ffffff",
	// },
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
	"Suprise me": {
		workBackground: generateRandomColor(),
		workAccent: generateRandomColor(),
		breakBackground: generateRandomColor(),
		breakAccent: generateRandomColor(),
		workGrey: generateRandomColor(),
		workButtonColor: generateRandomColor(),
		workButtonTextColor: generateRandomColor(),
		breakButtonColor: generateRandomColor(),
		breakButtonTextColor: generateRandomColor(),
	},
};

export const themeSwitchContext = createContext("original");
