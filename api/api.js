const API_TOKEN = "238HINNOST";

export function getParkingSearchedText (text, page) {
    const url  = 'https://data.bordeaux-metropole.fr/geojson?' + 'key=' + API_TOKEN + '&typename=' + text
    return fetch(url)
    .then(response => response.json())
    .catch(error => {console.log(error)})
}