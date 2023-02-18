import { createBrowserRouter  } from 'react-router-dom'
import Main from './pages/Main'
import { AuthContextProvider } from './contexts/AuthContext'
import Login from './pages/Login'

const router = createBrowserRouter([
    {
        path: '/login',
        element: (
            <AuthContextProvider>
                <Login/>
            </AuthContextProvider>
        )
    },
    {
        path: '/',
        element: <Main/>
    },
])

export default router