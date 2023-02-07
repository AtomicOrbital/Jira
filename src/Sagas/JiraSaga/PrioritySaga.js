import { call, put, takeLatest } from "redux-saga/effects";
import { JiraServices } from "../../redux/services/JiraServices";

function* getPriorityProjectSaga() {
    try {
        const { data, status } = yield call(() => JiraServices.getAllPriority());

        // console.log("data", data);
        if (status === 200) {
            yield put({
                type: 'GET_ALL_PRIORITY',
                arrPriority: data.content
            })
        }

    } catch (error) {
        console.log("error", error);
    }
}

export function* theoDoiGetPriorityProjectSaga() {
    yield takeLatest('GET_ALL_PRIORITY_SAGA', getPriorityProjectSaga);
}