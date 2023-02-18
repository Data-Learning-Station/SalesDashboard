import { createContext, useContext, useReducer } from "react";
import axios from 'axios'

import authReducer from "../reducers/authReducer";
import { error, pending, storeUser } from "../reducers/actions";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(authReducer, { user: null })

    const navigate = useNavigate()

    const login = async (data) => {

        dispatch(pending())

        axios.post('http://localhost:8000/api/auth/login', data)
            .then(res => {
                dispatch(storeUser(res.user))
                navigate('/')
            })
            .catch(err => {
                console.log(err);
                dispatch(error(err.response.data.detail))
            })
    }

    const register = async (data) => {
        axios.post('http://localhost:8000/api/auth/register', data)
            .then(res => {
                dispatch(storeUser(res.user))
                navigate('/')
            })
            .catch(err => {
                dispatch(error(err.response.data.detail))
            })
    }

    return (
        <AuthContext.Provider value={{ state, login, register }}>
            {children}
        </AuthContext.Provider>
    )
}