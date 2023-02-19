import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext({
    state: {
        status: 'none',
        error: null,
        user: null
    },
    login: (data) => {},
    register: (data) => {},
    logout: () => {},
})

export const useAuthContext = () => useContext(AuthContext)

export default AuthContext
