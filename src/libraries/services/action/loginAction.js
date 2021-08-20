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
