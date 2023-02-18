export const saveUser = (user) => {
    return {
        type: "SAVE_USER",
        payload: user
    }
}

export const removeUser = () => {
    return {
        type: "REMOVE_USER"
    }
}

export const responseError = (error) => {
    const message = error.response?.data?.detail ?? error.message

    return {
        type: "ERROR",
        payload: typeof message == 'string' ? message : 'Some error'
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

