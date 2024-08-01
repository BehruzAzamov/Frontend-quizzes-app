import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"

// Pages
import ErrrorPage from "./pages/ErrrorPage"
import Home from "./pages/Home"
import Quiz from "./pages/Quiz"

function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrrorPage />,
      children: [
        {
          index: true,
          element:<Home/>
        },
        {
          path:"/quiz/:title",
          element:<Quiz/>
        }
      ]
    }
  ])

  return <RouterProvider router={routes} />
}

export default App