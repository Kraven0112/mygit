import { createRoot, cretaeRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Allconnect from "./components/Allconnect.jsx"
import App from "./App.jsx"
import "./App.css"
import ProductDetail from "./components/ProductDetail.jsx"

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Allconnect />,
      },
      {
        path: "/:detail",
        element :<ProductDetail/>
      }
    ],
  },
])

const root = createRoot(document.querySelector("#root"))
root.render(<RouterProvider router={route} />)
