const API_TOKEN = "";

export function getParkingSearchedText (text) {
    const url  = 'https://data.grandpoitiers.fr/api/records/1.0/search/?dataset=mobilites-stationnement-des-parkings-en-temps-reel&q=&facet=' + text
    return fetch(url)
    .then(response => response.json())
    .catch(error => {console.log(error)})
}