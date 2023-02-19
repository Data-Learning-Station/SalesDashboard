import { createBrowserRouter, Navigate  } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import Admin from './pages/admin/Admin'
import Products from './pages/Products'
import Auth from './components/Auth'
import Register from './pages/Register'
import AdminProducts from './pages/admin/AdminProducts'
import AdminSales from './pages/admin/AdminSales'
import AuthContextProvider from './providers/AuthContextProvider'
import ProductContextProvider from './providers/ProductContextProvider'
import ProductModalContextProvider from './providers/ProductModalProvider'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <AuthContextProvider>
                <ProductContextProvider>
                    <Main/>
                </ProductContextProvider>
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
                        element: (
                            <ProductModalContextProvider>
                                <AdminProducts/>
                            </ProductModalContextProvider>
                        )
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