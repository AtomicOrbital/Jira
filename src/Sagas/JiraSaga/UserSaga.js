import { JiraServices } from "../../redux/services/JiraServices";
import { call, delay, put, select, takeLatest } from 'redux-saga/effects'
import { ACCESS_TOKEN, USER_LOGIN, USER_SIGNIN_API } from "../../redux/constants/LoginConstants";
import { history } from "../../util/history";


function* signinSaga(action) {
    console.log(action);
    // Gọi API
    yield put({
        type: 'DISPLAY_LOADING'
    });
    yield delay(2000);
    try {

        const { data, status } = yield call(() => JiraServices.singinJira(action.userLogin));


        // Lưu vào khi đăng nhập thành công
        localStorage.setItem(ACCESS_TOKEN, data.content.accessToken);
        localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));

        history.push('/jira');
        console.log(data);
    } catch (error) {
        console.log(error.response.data);
    }

    yield put({
        type: 'HIDDEN_LOADING'
    });
}


export function* theoDoiSignin() {
    yield takeLatest(USER_SIGNIN_API, signinSaga);
}


function* getUserSaga(action) {
    try {

        const { data, status } = yield call(() => JiraServices.getUser(action.keyWord));
        if( status === 200) {
            yield put({
                type: 'GET_USER_SEARCH',
                listUserSearch: data.content
            })
        }
    } catch (error) {
        console.log(error.response.data);
    }
}


export function* theoDoiGetUserSaga() {
    yield takeLatest('GET_USER_API', getUserSaga);
}

function* addUserSaga(action) {
    try {

        const { data, status } = yield call(() => JiraServices.assignUserProject(action.userProject));
        if( status === 200) {
            yield put({
                type: 'GET_ALL_PROJECT_JIRA'
            })
        }
    } catch (error) {
        console.log(error.response.data);
    }
}


export function* theoDoiAddUserSaga() {
    yield takeLatest('ADD_USER_API', addUserSaga);
}