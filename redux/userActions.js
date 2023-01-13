export const ADD_USER = "ADD_USER"
export const LOGIN_USER = "LOGIN_USER"
export const LOGOUT_USER = "LOGOUT_USER"

export const addUser = (user) => (dispatch) => {
    dispatch({
        type:"ADD_USER",
        payload:user
    })
}

export const loginUser = (user) => (dispatch) => {
    dispatch({
        type:"LOGIN_USER",
        payload:user
    })
}

export const logoutUser = () => (dispatch) => {
    dispatch({
        type:"LOGOUT_USER"
    })
}