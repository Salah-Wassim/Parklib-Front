import {ADD_POST} from './type'

export const postPropValue = (post) => ({
    type: ADD_POST,
    payload: post
})