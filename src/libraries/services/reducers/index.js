import { combineReducers } from "redux"
import loginReducer from "./loginReducer"
import usersReducer from "./usersReducer"

const reducers = combineReducers({
    loginReducer: loginReducer,
    usersReducer: usersReducer,
})

export default reducers
