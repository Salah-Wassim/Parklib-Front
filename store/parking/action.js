import { ADD_PARKING, DELETE_PARKING, ADD_PRIVATE_PARKING, DELETE_PRIVATE_PARKING } from "./types"

export const addParking = (parking) => ({
    type: ADD_PARKING,
    payload: {
        parking
    }
})
export const addPrivateParking = (privateParking) => ({
    type: ADD_PRIVATE_PARKING,
    payload: {
        privateParking
    }
})
export const deleteParking = () => ({
    type: DELETE_PARKING,
    payload: {
        parking: {}
    }
})

export const deletePrivateParking = () => ({
    type: DELETE_PRIVATE_PARKING,
    payload : {
        privateParking: {}
    }
})