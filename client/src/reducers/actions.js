export const storeUser = (user) => {
    return {
        type: "STORE_USER",
        payload: user
    }
}

export const error = (error) => {
    return {
        type: "ERROR",
        payload: error
    }
}

export const pending = () => {
    return {
        type: "PENDING"
    }
}


export const removeUser = () => {
    return {
        type: "REMOVE_USER"
    }
}