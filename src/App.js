import { Route, Switch } from "react-router-dom"
import Dashboard from "./page/Dashboard"
import Login from "./page/Login"
import Register from "./page/Register"
import Home from "./page/Home"

import { useSelector } from "react-redux"
import TokenChecker from "./libraries/services/TokenChecker"
import Logout from "./page/Logout"

function App() {
    const token = useSelector((state) => state.loginReducer.token)

    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard/" component={Dashboard} />
                <Route path="/dashboard/:page" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/register" component={Register} />
            </Switch>
            <TokenChecker token={token} />
        </div>
    )
}

export default App

// import { useDispatch, useSelector } from "react-redux"
// import { bindActionCreators } from "redux"
// import { actionCreators } from "./libraries/services/action"

// const state = useSelector((state) => state)
// const dispatch = useDispatch()
// const loginActions = bindActionCreators(actionCreators, dispatch)
