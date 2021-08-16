import { Route, Switch, useLocation } from "react-router-dom"
import Dashboard from "./page/Dashboard"
import Login from "./page/Login"
import Register from "./page/Register"

function App() {
    const location = useLocation()
    console.log(location.pathname)
    return (
        <div>
            <Switch>
                <Route path="/" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </div>
    )
}

export default App
