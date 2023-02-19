import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const items = [
  {
    name: 'Products',
    path: '/products'
  }
]

const Main = () => {
  return (
    <div className="w-screen h-screen bg-slate-100">
      <Navbar items={items} title="Sales"/>
      <Outlet/>
    </div>
  )
}

export default Main