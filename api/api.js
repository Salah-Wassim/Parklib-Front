import {adrIpV4, port} from '../secretFile';
const API_TOKEN = "238HINNOST";
const API_URL = `http://${adrIpV4}:3000`;

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

export const verifyPhoneNumber = async (phoneNumber) => {
   return await fetch(`${API_URL}`, {
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

    return await fetch(`${API_URL}/report`, {
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
    const url  = `${API_URL}/annonce`
    return await fetch(url)
        .then(response => response.json())
        .catch(error => {console.log(error)})
}

export const register = async (email,password,cPassword) => {
    return await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',  
        },  
        body: JSON.stringify({
            email: email,
            password: password,
            cPassword: cPassword
        })
    },).then((response) => response.json()).catch((error) => console.error(error));
}

export const login = async (email,password) => {
    return await fetch(`${API_URL}/auth`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',  
        },  
        body: JSON.stringify({
            email: email,
            password: password
        })
    },).then((response) => response.json()).catch((error) => console.error(error));

}

export const completeProfileAfterSignUp = async (lastName, firstName, address, phone, userId, token) => {
    return await fetch(`${API_URL}/users/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',  
            'Authorization': 'Bearer ' + token,
        },  
        body: JSON.stringify({
            id: userId,
            lastName: lastName,
            firstName: firstName,
            address: address,
            phone: phone
        })
    },).then((response) => response.json()).catch((error) => console.error(error));
}
