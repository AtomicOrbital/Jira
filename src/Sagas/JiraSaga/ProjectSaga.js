import { call, delay, put, takeLatest } from "redux-saga/effects";
import { JiraServices } from "../../redux/services/JiraServices";
import { history } from "../../util/history";
import { notification } from 'antd';

const openNotificationWithIcon = (type, message, description = '') => {
    notification[type]({ // 
        message: message,
        description: description
    });
};

function* createProjectSaga(action) {
    // console.log('actionCreateSaga', action);

    yield put({
        type: 'DISPLAY_LOADING'
    });

    yield delay(1000);

    try {
        const { data, status } = yield call(() => JiraServices.createProjectAuthentication(action.newProject));
        // console.log('data', data);

        // gọi api xong gửi action lên reducer

        if (status === 200) {
            console.log('data', data);
            history.push('/projectmanagement')
        }
    } catch (error) {
        console.log('error', error);
    }

    yield put({
        type: 'HIDDEN_LOADING'
    });
}

export function* theoDoiCreateProjectSaga() {
    yield takeLatest('CREATE_PROJECT_JIRA', createProjectSaga);
}

function* getAllProjectSaga() {

    yield put({
        type: 'DISPLAY_LOADING'
    });

    yield delay(1000);

    try {
        const { data, status } = yield call(() => JiraServices.getAllProject());
        // console.log('data', data);

        // gọi api xong gửi action lên reducer

        if (status === 200) {
            yield put({
                type: 'GET_LIST_PROJECT',
                projectList: data.content
            })

        }
    } catch (error) {
        console.log('error', error);
    }

    yield put({
        type: 'HIDDEN_LOADING'
    });
}


export function* theoDoiGetAllProjectSaga() {
    yield takeLatest('GET_ALL_PROJECT_JIRA', getAllProjectSaga);
}

//update project
function* updateProjectSaga(action) {
    console.log("action", action);
    yield put({
        type: 'DISPLAY_LOADING'
    });

    yield delay(1000);

    try {
        const { data, status } = yield call(() => JiraServices.updateProject(action.projectUpdate));
        // console.log('data', data);

        // gọi api xong gửi action lên reducer

        if (status === 200) {
            console.log('data', data);
        }

        yield put({
            type: 'GET_ALL_PROJECT_JIRA'
        });

        yield put({
            type: 'CLOSE_DRAWER'
        });
    } catch (error) {
        console.log('error', error);
    }

    yield put({
        type: 'HIDDEN_LOADING'
    });
}

export function* theoDoiUpdateProjectSaga() {
    yield takeLatest('UPDATE_PROJECT_JIRA', updateProjectSaga);
}

// delete project

function* deleteProjectSaga(action) {
    console.log("action", action);
    yield put({
        type: 'DISPLAY_LOADING'
    });

    yield delay(1000);

    try {
        const { data, status } = yield call(() => JiraServices.deleteProject(action.projectId));
        // console.log('data', data);

        // gọi api xong gửi action lên reducer

        if (status === 200) {
            console.log('data', data);
            openNotificationWithIcon('success', 'Delete project successfully!');

        } else {
            openNotificationWithIcon('error', 'Delete project failed');
        }

        yield put({
            type: 'GET_ALL_PROJECT_JIRA'
        });

        yield put({
            type: 'CLOSE_DRAWER'
        });
    } catch (error) {
        console.log('error', error);
        openNotificationWithIcon('error', 'Delete project failed');
    }

    yield put({
        type: 'HIDDEN_LOADING'
    });
}

export function* theoDoiDeleteProjectSaga() {
    yield takeLatest('DELETE_PROJECT_JIRA', deleteProjectSaga);
}


function* getProjectDetailSaga(action) {
    console.log("action", action);
    yield put({
        type: 'DISPLAY_LOADING'
    });

    yield delay(1000);

    try {
        const { data, status } = yield call(() => JiraServices.getProjectDetail(action.projectId));
        // console.log('data', data);

        // gọi api xong gửi action lên reducer
        console.log("data", data);
        if (status === 200) {
            yield put({
                type: 'PUT_PROJECT_SAGA',
                projectDetail: data.content
            })
        }



    } catch (error) {
        console.log('error', error);
        // history.push("/projectmanagement")
    }

    yield put({
        type: 'HIDDEN_LOADING'
    });
}

export function* theoDoiGetProjectDetailSaga() {
    yield takeLatest('GET_PROJECT_DETAIL', getProjectDetailSaga);
}

function* getProjectAllSaga() {

    try {
        const { data, status } = yield call(() => JiraServices.getAllProject());
        // console.log('data', data);

        // gọi api xong gửi action lên reducer

        if (status === 200) {
            yield put({
                type: 'GET_ALL_PROJECT',
                arrProject: data.content
            })

        }
    } catch (error) {
        console.log('error', error);
    }
}


export function* theoDoiGetProjectAllSaga() {
    yield takeLatest('GET_PROJECT_ALL_SAGA', getProjectAllSaga);
}