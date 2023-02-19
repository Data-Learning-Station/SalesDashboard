const productReducer = (state, action) => {

    switch(action.type) {
        case "UPDATE_PRODUCTS": {
            return {
                status: 'success',
                error: null,
                products: action.payload
            }
        }
        case "ADD_PRODUCT": {
            return {
                status: 'success',
                error: null,
                products: [...state.products, action.payload]
            }
        }
        case "REMOVE_PRODUCT": {
            
            const { id } = action.payload

            return {
                status: 'success',
                error: null,
                products: state.products.filter(product => product.id != id)
            }
        }
        case "UPDATE_PRODUCT": {
            
            const payload = action.payload 
            
            return {
                status: 'success',
                error: null,
                products: state.products.map(product => product.id == payload.id ? payload.product : product)
            }
        }
        case "PENDING": {
            return {
                status: 'pending',
                error: null,
                products: []
            }
        }
        case "ERROR": {
            return {
                status: 'error',
                error: action.payload,
                products: []
            }
        }
        default: {
            console.warn('Unknown action ' + action.type)
            return {
                ...state
            }
        }
    }
}

export default productReducer