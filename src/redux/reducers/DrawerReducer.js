import React from 'react'
const initialState = {
    visible: false,
    ComponentContentDrawer: <p>Content</p>,
    title: '',
    callBackSubmit: (propsValue) => {
        alert("submit fake");
    }
}

export const DrawerReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'OPEN_DRAWER':
            return { ...state, visible: true }
        case 'CLOSE_DRAWER':
            return { ...state, visible: false }
        case 'OPEN_FORM_EDIT_PROJECT': {
            state.visible = true;
            state.ComponentContentDrawer = action.Component;
            state.title = action.title;
            return { ...state }
        }
        case 'SET_SUBMIT_EDIT_PROJECT': {
            state.callBackSubmit = action.submitFunction;
            return { ...state };
        }
        case 'OPEN_FORM_CREATE_TASK': {
            state.visible = true;
            state.ComponentContentDrawer = action.Component;
            state.title = action.title;
            return { ...state };
        }

        default:
            return { ...state }
    }
}
