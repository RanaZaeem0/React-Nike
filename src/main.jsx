import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { AuthLayout, Login } from './compount/index.js'



import Signup from './pages/Signup'




// import { Woman } from '@mui/icons-material'
import Woman from "./compount/Woman.jsx"
import Man from "./compount/Man/Man.jsx"
import Home from "./compount/home/Home.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/home",
            element: <Home />,
        },
        {
          path: "/woman",
          element: <Woman />,
      },  {
        path: "/kids",
        element: <Kids />,
    },  {
      path: "/man",
      element: <Man />,
  },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
     
      
      
       
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
