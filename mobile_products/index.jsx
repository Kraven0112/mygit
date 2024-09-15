import {createRoot} from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import App from './App.jsx'
import Connection from './components/Connection.jsx'
import Productdetail from './components/Productdetail.jsx'

const route = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                path: "/",
                element: <Connection/>
            },
            {
                path:"/:product",
                element : <Productdetail/>
            }
        ]
    }
])

const root = createRoot(document.querySelector('#root'))
root.render(<RouterProvider router={route}/>)
