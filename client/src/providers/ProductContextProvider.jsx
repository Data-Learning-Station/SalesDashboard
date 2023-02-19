import axios from "axios"
import { useReducer } from "react"
import ProductContext from "../contexts/ProductContext"
import { pending, responseError, updateProducts, addProduct, removeProduct, updateProduct } from "../reducers/actions"
import productReducer from "../reducers/productReducer"
import { getAuth } from "../utils/storage"

const initialState = {
    status: 'none',
    error: null,
    products: [],
}

const ProductContextProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(productReducer, initialState)

    const fetch = async () => {
        dispatch(pending())
        try {
            const response = await axios.get('http://localhost:8000/api/products')
            dispatch(updateProducts(response.data.products))
        }
        catch(err) {
            dispatch(responseError(err))
        }
    }

    const create = async (formData) => {

        const auth = getAuth()

        try {
            const response = await axios.post('http://localhost:8000/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': auth.token
                }
            })
            dispatch(addProduct(response.data.product))
        }
        catch(err) {
            dispatch(responseError(err))
        }
    }
    const update = async (id, formData) => {

        const auth = getAuth()

        try {
            const response = await axios.put('http://localhost:8000/api/products/' + id, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': auth.token
                }
            })
            dispatch(updateProduct(id, response.data.product))
        }
        catch(err) {
            dispatch(responseError(err))
        }
    }

    const remove = async (id) => {

        const auth = getAuth()

        try {
            const response = await axios.delete('http://localhost:8000/api/products/' + id, {
                headers: {
                    'Authorization': auth.token
                }
            })
            dispatch(removeProduct(response.data.product.id))
        }
        catch(err) {
            dispatch(responseError(err))
        }
    }

    return (
        <ProductContext.Provider value={{ state, fetch, create, remove, update }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider