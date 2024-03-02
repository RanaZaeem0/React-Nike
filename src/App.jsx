
import { Outlet } from 'react-router-dom'
import './App.css'

import Header from './compount/Header'
import Footer from './compount/Footer'

function App() {


  return (
  <>
  <Header/>
  <Outlet/>
<Footer/>
  </>
  )
}

export default App
