import { createContext, useContext } from "react";
import Strings from "../Constant/Strings";

export const ThemeContext = createContext({
    themeMode: Strings.themes.LIGHT,
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}