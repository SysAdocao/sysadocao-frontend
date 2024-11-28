import { Box, ThemeProvider } from "@mui/material";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { LightTheme } from "../themes/Light";
import { DarkTheme } from "../themes/Dark";

const ThemeContext = createContext({})

export const useAppThemeContext = () => {
    return useContext(ThemeContext)
}

export const AppThemeProvider = ({ children }) => {
    const [themeName, setThemeName] = useState("light")

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === "light" ? "dark" : "light")
    }, [])

    const theme = useMemo(() => themeName === "light" ? LightTheme : DarkTheme, [themeName])

    return (
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={theme}>
                <Box maxWidth={"100vw"} minHeight={"100vh"} bgcolor={theme.pallete.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}