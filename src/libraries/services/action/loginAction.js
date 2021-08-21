import axios from "axios"

const restApi = process.env.REACT_APP_REST_API

export const login = (payload) => {
    return (dispatch) => {
        const user = {
            user: payload.username,
            pass: payload.password,
        }
        console.log(user)
        return axios.post(`${restApi}/login`, user).then((res) => {
            console.log(res.data)

            dispatch({
                type: "login",
                payload: res.data,
            })
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: "logout",
        })
    }
}

export const register = (payload) => {
    return (dispatch) => {
        const user = {
            user: payload.username,
            pass: payload.password,
            email: payload.email,
            name: payload.name_last.trim() + ", " + payload.name_first.trim() + " " + payload.name_middle.trim(),
            name_first: payload.name_first,
            name_middle: payload.name_middle,
            name_last: payload.name_last,
        }
        console.log(user)
        return axios.post(`${restApi}/users/`, user).then((res) => {
            console.log(res.data)

            dispatch({
                type: "register",
                payload: res.data,
            })
        })
    }
}
