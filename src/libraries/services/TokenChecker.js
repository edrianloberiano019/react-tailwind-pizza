import axios from "axios"
import { useState } from "react"
import { Redirect, useLocation } from "react-router-dom"

const TokenChecker = ({ token }) => {
    const restApi = process.env.REACT_APP_REST_API
    const location = useLocation()
    const [isValid, setIsValid] = useState(false)

    axios
        .post(restApi + "/authcheck", { token: token })
        .then(function (response) {
            // handle success
            console.log(response.data.isValid)
            setIsValid(response.data.isValid)
        })
        .catch(function (error) {
            // handle error
            console.log(error)
        })

    if (isValid && location.pathname === "/dashboard") {
        return <></>
    } else if (!isValid) {
        if (location.pathname === "/dashboard") {
            return <Redirect to="/login" />
        } else {
            return <></>
        }
    } else if (isValid && location.pathname === "/login") {
        return <Redirect to="/dashboard" />
    } else if (isValid && location.pathname === "/register") {
        return <Redirect to="/dashboard" />
    } else {
        return <></>
    }
}

export default TokenChecker
