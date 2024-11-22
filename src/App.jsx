import { RouterProvider } from "react-router-dom"
import { router } from "./pages/routes"
import { AppThemeProvider } from "./contexts/ThemeContext"

function App() {
  return (
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  )
}

export default App
