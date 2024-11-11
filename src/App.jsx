import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar'

 export function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
