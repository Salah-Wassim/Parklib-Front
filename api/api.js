const API_TOKEN = "238HINNOST";
const BASE_URL = 'http://10.33.210.163:5000' //'http://192.168.0.16:5000'

export const getParkingSearchedText = async (text, page) =>{
    const url  = 'https://data.bordeaux-metropole.fr/geojson?' + 'key=' + API_TOKEN + '&typename=' + text
    return await fetch(url)
    .then(response => response.json())
    .catch(error => {console.log(error)})
}

export const getAddress = async (text) =>{
    const url  = 'https://api-adresse.data.gouv.fr/search/?q='+text+'&type=housenumber&autocomplete=1'
    return await fetch(url)
    .then(response => response.json())
    .catch(error => {console.log(error)})
}

export const getParkingMap = async () => {
    const url  = 'https://data.bordeaux-metropole.fr/api/cub.xjs?' + 'key=' + API_TOKEN 
    return await fetch(url, {mode: 'no-cors'})
    .then(function(response) {
      console.log(response); 
    }).catch(function(error) {  
      console.log('Request failed', error)  
    });
}

export const verifyPhoneNumber = async (phoneNumber) => {
   return await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phone: phoneNumber
        })
    }).then((response) => response.json()).catch((error) => console.error(error));
}

export const verifyCode = async (code, phoneNumber,report) => {
    return await fetch(`${BASE_URL}/report`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phone: phoneNumber,
            report: report,
            code: code
        })
    }).then((response) => response.json()).catch((error) => console.error(error));
}

export const getPrivateParking = async () =>{
    const url  = `${BASE_URL}/annonce`
    return await fetch(url)
        .then(response => response.json())
        .catch(error => {console.log(error)})
}
