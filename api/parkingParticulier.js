const parkingUrl = 'http://192.168.1.10:3000/parking-particulier';

export const addParkingParticulier = async (parking) => {
    // console.log(parking);
    const url = parkingUrl + '/add' 
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrZW5iOTAyN0BnbWFpbC5jb20iLCJpYXQiOjE2Nzc0OTU2NzAsImV4cCI6MTY3NzU4MjA3MH0.WaXOl6kjgNsorO8IUR4-Td4yXjltc5bLFbpOiCpaJfI',
        },
        body: JSON.stringify(parking)
    })
        .then((response) => response)
        .catch((error) => error);
}