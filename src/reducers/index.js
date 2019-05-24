import * as actions from '../actions';

const initialState = {
    language: 'English'
};

export const languageReducer = (state = initialState, action) => {
    return action.type === actions.SET_LANGUAGE ? Object.assign({}, state, {
        language: action.language
    }) : state;
};