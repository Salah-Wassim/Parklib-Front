import {adrIpV4, port, token} from '../secretFile'
const parkingUrl = `http://${adrIpV4}:${port}/parking-particulier`;

export const addParkingParticulier = async (parking) => {
    // console.log(parking);
    const url = parkingUrl + '/add' 
    try {
        const response = await fetch(
            url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` ,
                },
                body: JSON.stringify(parking)
            }
        );
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const getAllPrivateParking = async () => {
    try {
        const response = await fetch(parkingUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return response.json();
    } catch (error) {
        console.log('fetch getAllPrivateParking error', error);
    }
}