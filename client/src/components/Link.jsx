import { NavLink as RouterLink } from 'react-router-dom'

const Link = ({ to, children, className, onClick }) => {
    return (
        <RouterLink onClick={onClick} to={to} className={ ({ isActive }) => `${className} text-slate-500 px-2 py-1 hover:bg-slate-100  rounded-md ${isActive ? 'bg-slate-100' : ''}`}>
            {children}
        </RouterLink>
    )
}

export default Link