
const stateDefault = {
    projectList: [],
    arrProject: []
}


export const ProjectJiraReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'GET_LIST_PROJECT': {
            state.projectList = action.projectList;
            return { ...state };
        }

        case 'GET_ALL_PROJECT': {
            state.arrProject = action.arrProject;
            return { ...state };
        }


        default: return { ...state }
    }
}