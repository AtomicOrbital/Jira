import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './Sagas/rootSaga';
import LoadingReducers from './redux/reducers/LoadingReducers';
import { HistoryReducer } from './redux/reducers/HistoryReducer';
import { UserLoginReducer } from './redux/reducers/UserJiraReducer';
import { ProjectCategoryReducer } from './redux/reducers/ProjectCategoryReducer';
import { ProjectJiraReducer } from './redux/reducers/ProjectJiraReducer';
import { DrawerReducer } from './redux/reducers/DrawerReducer';
import { ProjectReducer } from './redux/reducers/ProjectReducer';
import { PriorityReducer } from './redux/reducers/PriorityReducer';
import { TaskTypeReducer } from './redux/reducers/TaskTypeReducer';


const middleWareSaga = createSagaMiddleware();



const rootReducer = combineReducers({
    //reducer khai báo tại đây
    LoadingReducers,
    HistoryReducer,
    UserLoginReducer,
    ProjectCategoryReducer,
    ProjectJiraReducer,
    DrawerReducer,
    ProjectReducer,
    PriorityReducer,
    TaskTypeReducer
})



const store = createStore(rootReducer, applyMiddleware(reduxThunk, middleWareSaga));

middleWareSaga.run(rootSaga);

export default store;

