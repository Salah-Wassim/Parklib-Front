import {IPV4, PORT, token} from '../secretFile';
const parkingUrl = `http://${IPV4}:${PORT}/parking-particulier`;

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