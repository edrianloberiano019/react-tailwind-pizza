import { combineReducers } from "redux"
import jwtReducer from "./jwtReducer"

const reducers = combineReducers({
    jwtToken: jwtReducer,
})

export default reducers
