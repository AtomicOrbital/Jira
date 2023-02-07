

const stateDefault = {
    arrProjectCategory: []
}


export const ProjectCategoryReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'GET_PROJECT_CATEGORY': {
            state.arrProjectCategory = action.data;
            return { ...state };
        }
        default:
            return { ...state };
    }
}