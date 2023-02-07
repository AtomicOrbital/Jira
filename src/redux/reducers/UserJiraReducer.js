import { USER_LOGIN, USLOGIN } from "../constants/LoginConstants";



let usLogin = {};

if (localStorage.getItem(USER_LOGIN)) {
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}


const stateDefault = {
    userLogin: usLogin,
    userSearch: []
}


export const UserLoginReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case USLOGIN: {
            state.userLogin = action.userLogin;
            return { ...state };
        }

        case 'GET_USER_SEARCH': {
            state.userSearch = action.listUserSearch;
            return { ...state };
        }

        default:
            return { ...state };
    }
}