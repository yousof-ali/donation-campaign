import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Error from './Components/Error/Error.jsx';
import Root from './Components/Root/Root.jsx';
import SingleDonate from './Components/SingleDonate/SingleDonate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/donate/:id",
        element:<SingleDonate></SingleDonate>,
        loader:()=>fetch("/data/category.json")
      }
    ]
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
