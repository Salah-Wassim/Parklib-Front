const parkingUrl = 'http://192.168.1.10:3000/parking-particulier';

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
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrZW5iOTAyN0BnbWFpbC5jb20iLCJpYXQiOjE2Nzg3OTQzMjUsImV4cCI6MTY3ODg4MDcyNX0.yDm6aTD_gx4I0vUyALkDlLh2gvNd4PA7YRwmy9PbDCM',
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