
export const saveAuth = (user) => {
    localStorage.setItem('auth', JSON.stringify(user))
}

export const deleteAuth = (user) => {
    localStorage.removeItem('auth')
}

export const getAuth = () => {
    const user = localStorage.getItem('auth')
    if (!user) {
        return null
    }
    else {
        return JSON.parse(user)
    }
}