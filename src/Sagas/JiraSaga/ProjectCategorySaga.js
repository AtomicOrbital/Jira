import { call, put, takeLatest } from "redux-saga/effects";
import { JiraServices } from "../../redux/services/JiraServices";
import { history } from "../../util/history";



function* getProjectCategorySaga(action) {
    console.log('actionSaga', action);

    try {
        const { data, status } = yield call(() => JiraServices.getProjectCategory());
        console.log('data', data);

        // gọi api xong gửi action lên reducer

        yield put({
            type: 'GET_PROJECT_CATEGORY',
            data: data.content
        });
    } catch (error) {
        console.log('error',error);
    }
}

export function* theoDoiProjectCategory() {
    yield takeLatest('GET_PROJECT_CATEGORY_SAGA', getProjectCategorySaga);
}