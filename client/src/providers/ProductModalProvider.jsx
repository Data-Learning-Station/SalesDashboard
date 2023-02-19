import { ProductModalContext } from "../modals/ProductModal"
import { useState } from "react"

export const ProductModalContextProvider = ({ children }) => {
    
    const [ modal, setModal ] = useState({ show: false, target: {} })

    const actions = {
        show() {
            setModal({ show: true, target: null })
        },
        update(target) {
            setModal({ show: true, target })
        },
        hide() {
            setModal({ show: false, target: null })
        }
    }

    return (
        <ProductModalContext.Provider value={{modal, actions}}>
            {children}
        </ProductModalContext.Provider>
    )
}

export default ProductModalContextProvider