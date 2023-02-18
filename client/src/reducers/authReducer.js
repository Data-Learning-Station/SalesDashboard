const authReducer = (state, action) => {
    switch(action.type) {
        case "SAVE_USER": {
            return {
                status: 'success',
                error: null,
                user: action.payload
            }
        }
        case "REMOVE_USER": {
            return {
                status: 'success',
                error: null,
                user: null
            }
        }
        case "PENDING": {
            return {
                status: 'pending',
                error: null,
                user: null
            }
        }
        case "ERROR": {
            return {
                status: 'error',
                error: action.payload,
                user: null
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


export default authReducer