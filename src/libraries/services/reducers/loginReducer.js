const jwtReducer = (state = {}, action) => {
    switch (action.type) {
        case "logout":
            localStorage.removeItem("token")
            state = { status: 0, token: "" }
            return state
        case "login":
            state = action.payload
            localStorage.setItem("token", action.payload.token)
            return state
        default:
            const token = localStorage.getItem("token") || null
            state = { status: 0, token: token }
            return state
    }
}

export default jwtReducer
