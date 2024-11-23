import { createTheme } from "@mui/material"
import { cyan, orange } from "@mui/material/colors"

export const LightTheme = createTheme({
    pallete: {
        primary: {
            main: cyan[500],
            dark: cyan[700],
            light: cyan[300],
            constrastText: "#fff",
        },
        secondary: {
            main: orange[500],
            dark: orange[700],
            light: orange[300],
            constrastText: "#fff",
        },
        background: {
            default: "#f5f5f5",
            paper: "#fff",
        },
    },
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: "#fff",
                },
            },
        }
    },
})