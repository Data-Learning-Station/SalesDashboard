import { NavLink } from "react-router-dom"

const Sidebar = ({ items }) => {
    return (
        <div className="border w-60 bg-white border-slate-100 mt-2 p-2 flex flex-col gap-2">
            {
                items.map(item => <Item item={item}/>)
            }
        </div>
    )
}

const Item = ({ item }) => {
    return (
        <NavLink className={ ({ isActive }) => `${isActive ? 'bg-blue-500 text-white' : ''} transition-all duration-150 w-full block p-2 rounded-sm` } to={item.path}> 
            {item.name} 
        </NavLink>
    )
}

export default Sidebar