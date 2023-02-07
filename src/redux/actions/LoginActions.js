import { USER_SIGNIN_API } from "../constants/LoginConstants"


export const loginAction = (email, password) => {
    return {
        type: USER_SIGNIN_API,
        userLogin: {
            email: email,
            password: password
        }
    }
}