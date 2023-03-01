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
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrZW5iOTAyN0BnbWFpbC5jb20iLCJpYXQiOjE2Nzc2Nzg4NjMsImV4cCI6MTY3Nzc2NTI2M30.e9DWcVOl5hrC97iDNteLcq_WGX9lgxlUr1jriVlbzOk',
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