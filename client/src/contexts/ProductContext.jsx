import { createContext, useContext } from "react";

const ProductContext = createContext({
    state: {
        status: 'none',
        error: null,
        products: []
    },
})

export const useProductContext = () => useContext(ProductContext)

export default ProductContext