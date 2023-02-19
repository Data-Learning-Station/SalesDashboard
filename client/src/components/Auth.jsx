import { Navigate } from "react-router-dom"
import { getAuth } from "../utils/storage"

const Auth = ({ to = '/login', required, children }) => {

    const auth = getAuth()

    if (!auth) {
        return <Navigate to={to}/>
    }
    
    if (required && auth.role != required) {
        return <Navigate to={to}/>
    }
    
    return children
}

export default Auth