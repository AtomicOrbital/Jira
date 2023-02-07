const initialState = {
    projectEdit: {
        "id": 0,
        "projectName": "string",
        "categoryName": "",
        "description": "string",
        "categoryId": ""
    },
    projectDetail: {

    }
}

export const ProjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_PROJECT': {
            state.projectEdit = action.projectEditModal;
            console.log("projectEdit", action.projectEditModal);
            return { ...state }
        }

        case 'PUT_PROJECT_SAGA': {
            state.projectDetail = action.projectDetail;
            return { ...state }
        }
        default:
            return { ...state }
    }
}
