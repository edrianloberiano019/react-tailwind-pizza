import { Route, Switch } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./libraries/services/action"
import Dashboard from "./page/Dashboard"
import Login from "./page/Login"
import Register from "./page/Register"

function App() {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    const loginActions = bindActionCreators(actionCreators, dispatch)

    console.log({ loginActions, state })

    return (
        <div>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </div>
    )
}

export default App
