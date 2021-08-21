import axios from "axios"

const restApi = process.env.REACT_APP_REST_API

export const initData = (payload) => {
    return (dispatch) => {
        console.log("usersAction.js", payload)
        const axiosConfig = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }

        return axios
            .get(restApi + "/users", axiosConfig)
            .then(function (res) {
                console.log(res.data)

                dispatch({
                    type: "initData",
                    payload: res.data,
                })
            })
            .catch(function (error) {
                console.log(axiosConfig)
                console.log(error)
            })
    }
}
