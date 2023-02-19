import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";

import authReducer from "../reducers/authReducer";
import { pending, removeUser, responseError, saveUser } from "../reducers/actions";
import { saveAuth, deleteAuth, getAuth } from "../utils/storage";
import AuthContext from '../contexts/AuthContext'

const initialState = {
    status: 'none',
    error: null,
    user: getAuth()?.user,
}

const AuthContextProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(authReducer, initialState)

    const navigate = useNavigate()

    const login = async (data) => {

        dispatch(pending())

        axios.post('http://localhost:8000/api/auth/login', data)
            .then(res => {
                dispatch(saveUser(res.data.user))
                saveAuth(res.data)
                navigate('/')
            })
            .catch(err => {
                dispatch(responseError(err))
            })
    }

    const register = async (data) => {

        dispatch(pending())

        axios.post('http://localhost:8000/api/auth/register', data)
            .then(res => {
                dispatch(saveUser(res.data.user))
                saveAuth(res.data)
                navigate('/')
            })
            .catch(err => {
                dispatch(responseError(err))
            })
    }

    const logout = () => {
        deleteAuth()
        dispatch(removeUser())
        navigate('/login')
    }

    return (
        <AuthContext.Provider value={{ state, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider