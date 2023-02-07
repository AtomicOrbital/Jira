
import { all } from "redux-saga/effects";
import * as UserSaga from './JiraSaga/UserSaga'
import * as ProjectCategorySaga from './JiraSaga/ProjectCategorySaga'
import * as ProjectSaga from './JiraSaga/ProjectSaga'
import * as PrioritySaga from './JiraSaga/PrioritySaga'
import * as TaskTypeSaga from './JiraSaga/TaskTypeSaga'
export function* rootSaga() {
    yield all([
        UserSaga.theoDoiSignin(),
        ProjectCategorySaga.theoDoiProjectCategory(),
        ProjectSaga.theoDoiCreateProjectSaga(),
        ProjectSaga.theoDoiGetAllProjectSaga(),
        ProjectSaga.theoDoiUpdateProjectSaga(),
        ProjectSaga.theoDoiDeleteProjectSaga(),
        ProjectSaga.theoDoiGetProjectDetailSaga(),
        ProjectSaga.theoDoiGetProjectAllSaga(),
        UserSaga.theoDoiGetUserSaga(),
        UserSaga.theoDoiAddUserSaga(),
        

        PrioritySaga.theoDoiGetPriorityProjectSaga(),
        TaskTypeSaga.theoDoiGetAllTaskTypeSaga()
    ])
}