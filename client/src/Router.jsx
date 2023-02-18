import { createBrowserRouter, Navigate  } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import Admin from './pages/admin/Admin'
import Products from './pages/Products'
import Auth from './components/Auth'
import Register from './pages/Register'
import AdminProducts from './pages/admin/AdminProducts'
import AdminSales from './pages/admin/AdminSales'

import { AuthContextProvider } from './contexts/AuthContext'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <AuthContextProvider>
                <Main/>
            </AuthContextProvider>
        ),
        children: [
            {
                index: true,
                element: <Navigate to='/products'/>
            },
            {
                path: '/login',
                element: (
                    <Login/>
                )
            },
            {
                path: '/register',
                element: (
                    <Register/>
                )
            },
            {
                path: '/logout',
                element: <Navigate to='/login'/>
            },
            {
                path: '/admin',
                element: (
                    <Auth required='admin'>
                        <Admin/>
                    </Auth>
                ),
                children: [
                    {
                        index: true,
                        element: <Navigate to="/admin/products"/>
                    },
                    {
                        path: 'products',
                        element: <AdminProducts/>
                    },
                    {
                        path: 'sales',
                        element: <AdminSales/>
                    }
                ]
            },
            {
                path: 'products',
                element: <Products/>
            }
        ]
    },
])

export default router