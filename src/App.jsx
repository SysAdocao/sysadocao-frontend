import { RouterProvider } from "react-router-dom"
import { router } from "./pages/routes"

function App() {
  const teste = 'teste'
  const teste2 = 'teste2';
  return (
    <RouterProvider router={router} />
  )
}

export default App
