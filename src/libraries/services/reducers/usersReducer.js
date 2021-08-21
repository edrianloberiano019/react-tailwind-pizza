const usersReducer = (state = [], action) => {
    switch (action.type) {
        case "initData":
            state = action.payload
            return state
        case "removeItem":
            state = action.payload
            return state
        default:
            state = []
            return state
    }
}

export default usersReducer
