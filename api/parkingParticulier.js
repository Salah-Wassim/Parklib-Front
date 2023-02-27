const parkingUrl = 'http://192.168.1.10:3000/parking-particulier';

export const addParkingParticulier = async (parking) => {
    console.log(parking);
    return await fetch(parkingUrl + '/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: parking
    })
        .then((response) => response)
        .catch((error) => error);
}