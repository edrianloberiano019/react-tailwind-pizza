export const login = (username, password) => {
    return (dispatch) => {
        dispatch({
            type: "login",
            payload: {
                username: username,
                password: password,
            },
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: "logout",
        })
    }
}
