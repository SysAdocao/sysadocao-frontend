import { RouterProvider } from "react-router-dom"
import { router } from "./pages/routes"
import { AppThemeProvider } from "./contexts/ThemeContext"
import { AuthProvider } from "./contexts/AuthContext"

function App() {
  return (
    <AppThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </AppThemeProvider>
  )
}

export default App
