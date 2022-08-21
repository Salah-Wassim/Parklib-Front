import { ADD_PARKING, DELETE_PARKING } from "./types"

export const addParking = (parking) => ({
    type: ADD_PARKING,
    payload: {
        parking
    }
})
export const deleteParking = () => ({
    type: DELETE_PARKING,
    payload: {
        parking: {}
    }
})