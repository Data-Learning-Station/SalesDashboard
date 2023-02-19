import { ProductModalContext } from "../modals/ProductModal"
import { useState } from "react"

export const ProductModalContextProvider = ({ children }) => {
    
    const [ isShow, setShow ] = useState(false)

    const actions = {
        show() {
            setShow(true)
        },
        hide() {
            setShow(false)
        }
    }

    return (
        <ProductModalContext.Provider value={{isShow, actions}}>
            {children}
        </ProductModalContext.Provider>
    )
}

export default ProductModalContextProvider