const API_TOKEN = "238HINNOST";

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