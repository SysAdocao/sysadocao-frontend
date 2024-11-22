import { createTheme } from "@mui/material"
import { blue, orange } from "@mui/material/colors"

export const LightTheme = createTheme({
    pallete: {
        primary: {
            main: blue[500],
            dark: blue[700],
            light: blue[300],
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
    }
})