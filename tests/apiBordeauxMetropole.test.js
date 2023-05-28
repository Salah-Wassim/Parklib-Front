import { getParkingSearchedText} from '../api/api';
import { API_TOKEN } from '../secretFile';

describe('getParkingSearchedText', () => {
    let spyLog;

    beforeEach(() => {
        // Mock de la fonction fetch
        spyLog = jest.spyOn(console, 'log').mockImplementation();
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -0.5630087,
                                44.8557026
                            ]
                        },
                        "properties": {
                            "gid": 245,
                            "geom_o": 0,
                            "geom_err": null,
                            "ident": "CUBPK14",
                            "nom": "Bord'Eau Village",
                            "libres": 481,
                            "total": 571,
                        }
                    }
                ),
            })
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch parking data based on searched text', async () => {
        const searchText = 'st_park_p';
        const expectedUrl = `https://data.bordeaux-metropole.fr/geojson?key=${API_TOKEN}&typename=${searchText}`;
        const expectedData = 
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.5630087,
                    44.8557026
                ]
            },
            "properties": {
                "gid": 245,
                "geom_o": 0,
                "geom_err": null,
                "ident": "CUBPK14",
                "nom": "Bord'Eau Village",
                "libres": 481,
                "total": 571,
            }
        }

        const result = await getParkingSearchedText(searchText);

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(expectedUrl);

        expect(result).toEqual(expectedData);

    });

    it('should handle fetch error', async () => {
        const expectedError = new Error('Mocked fetch error');
        global.fetch = jest.fn(() => Promise.reject(expectedError));

        const result = await getParkingSearchedText('parking');

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalled();

        expect(spyLog).toHaveBeenCalledWith(
            expectedError
        );
        expect(result).toBeUndefined();
    });
});
