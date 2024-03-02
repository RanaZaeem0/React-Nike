import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Home from "./compount/home/Home.jsx"
import Layout from "./Layout.jsx"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Woman from './compount/Woman.jsx'
import Man from './compount/Man.jsx'
import New from "./compount/New.jsx"
import Sales from './compount/Sales.jsx'
import Kids from './compount/Kids.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='kids' element={<Kids/>}></Route>
      <Route path='Woman' element={<Woman/>}></Route>
      <Route path='Man' element={<Man/>}></Route>
      <Route path='sale' element={<Sales/>}></Route>
      <Route path='new' element={<New/>}></Route>



    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
  <RouterProvider router={router} />  
  </React.StrictMode>,
  
)
