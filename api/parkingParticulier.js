const parkingUrl = 'http://192.168.1.10:3000/parking-particulier';
const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrZW5iOTAyN0BnbWFpbC5jb20iLCJpYXQiOjE2Nzg4NjY2NDYsImV4cCI6MTY3ODk1MzA0Nn0.x2S4tpNfE2YUbpQh8_XGezBKwJooS1-D4IatbSSijwE';

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
                    'Authorization': 'Bearer ' + bearerToken,
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