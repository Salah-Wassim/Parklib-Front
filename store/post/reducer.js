import {ADD_POST} from './type'

const initialState = {};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                tasks: action.payload,
            };
        default:
            return state;
    }
};

export default postsReducer