import { useAuthContext } from "../contexts/AuthContext"
import { getAuth } from "../utils/storage"
import Link from "./Link"

const Navbar = ({ title, items }) => {

    const { state, logout } = useAuthContext()

    return (
        <div className="bg-white p-3 shadow-sm flex justify-between items-center px-16">
            <h1 className="text-lg font-bold"> {title} </h1>
            <ul>
                {
                    items.map(item => (
                        <li key={item.path}>
                            <Link to={item.path}> {item.name} </Link>
                        </li>
                    ))
                }
            </ul>

           {
            state.user ? (
                <div className="flex gap-2 items-center">
                    <span className="font-semibold"> {state.user.name} {state.user.surname} </span>
                    <Link to='/logout' onClick={logout}> Logout </Link>
                </div>
            ) : (
                <div className="flex gap-2 items-center ">
                    <Link to='/login'> Login </Link>
                    <Link to='/register'> Register </Link>
                </div>
            )
           }
        </div>
    )
}

export default Navbar