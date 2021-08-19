const jwtReducer = (state = "", action) => {
    switch (action.type) {
        case "logout":
            //Logout Function
            state = ""
            return state
        case "login":
            //Login Function
            state = "Login"
            return state
        default:
            return state
    }
}

export default jwtReducer
