const authReducer = (state, action) => {
    switch(action.type) {
        case "STORE_USER": {
            return {
                status: 'success',
                error: null,
                data: action.payload
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
    }
}


export default authReducer