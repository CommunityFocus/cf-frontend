import { createContext } from "react";

interface UsernameContextProps {
	userName: string;
	setUserName: React.Dispatch<React.SetStateAction<string>>;
}
export default createContext({} as UsernameContextProps);
