const API_TOKEN = "238HINNOST";

export function getParkingSearchedText (text, page) {
    const url  = 'https://data.bordeaux-metropole.fr/geojson?' + 'key=' + API_TOKEN + '&typename=' + text
    return fetch(url)
    .then(response => response.json())
    .catch(error => {console.log(error)})
}

export async function getParkingMap() {
    const url  = 'https://data.bordeaux-metropole.fr/api/cub.xjs?' + 'key=' + API_TOKEN 
    return await fetch(url, {mode: 'no-cors'})
    .then(function(response) {
      console.log(response); 
    }).catch(function(error) {  
      console.log('Request failed', error)  
    });
}