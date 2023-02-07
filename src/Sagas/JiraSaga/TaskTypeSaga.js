import { call, put, takeLatest } from "redux-saga/effects";
import { JiraServices } from "../../redux/services/JiraServices";

function* getAllTaskTypeSaga() {
    try {
        const { data, status } = yield call(() => JiraServices.getAllTaskType());
        console.log("data", data);
        if (status === 200) {
            yield put({
                type: 'GET_ALL_TASK_TYPE',
                arrTaskType: data.content
            })
        }
    } catch (error) {
        console.log("error", error);
    }
}

export function* theoDoiGetAllTaskTypeSaga() {
    yield takeLatest('GET_ALL_TASK_TYPE_SAGA', getAllTaskTypeSaga);
}