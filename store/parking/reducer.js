import { ADD_PARKING, DELETE_PARKING } from "./types";

const initialState = {}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PARKING:
            return {
                ...state,
                tasks: action.payload
            }
        default:
            return state;
    }
}
export default reducer