import React from "react"
import { Redirect } from "react-router-dom"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../libraries/services/action"
const Logout = () => {
    const dispatch = useDispatch()
    const loginActions = bindActionCreators(actionCreators, dispatch)
    loginActions.logout()
    return <Redirect to="/login" />
}

export default Logout
