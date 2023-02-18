import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar"

const items = [
    { 
        name: "Products", 
        path: '/admin/products' 
    },
    { 
        name: "Sales", 
        path: '/admin/sales' 
    },
]

const Admin = () => {
    return (
        <div className="flex gap-5">
            <Sidebar items={items}/>
            <div className="p-5 w-full"> 
                <Outlet/>
            </div>
        </div>
    )
}

export default Admin