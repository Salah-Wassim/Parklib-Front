import { getAddress } from '../api/api';

describe('getAddress', () => {
    let spyLog;

    beforeEach(() => {
        spyLog = jest.spyOn(console, 'log').mockImplementation();
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                1.114268,
                                45.739256
                            ]
                        },
                        "properties": {
                            "label": "Bord 87700 Saint-Martin-le-Vieux",
                            "score": 0.9499072727272727,
                            "id": "87166_il72il",
                            "name": "Bord",
                            "postcode": "87700",
                            "citycode": "87166",
                            "x": 553380.07,
                            "y": 6517268.93,
                            "city": "Saint-Martin-le-Vieux",
                            "context": "87, Haute-Vienne, Nouvelle-Aquitaine",
                            "type": "street",
                            "importance": 0.44898,
                            "street": "Bord"
                        }
                    },
                ),
            })
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch address data based on text', async () => {
        const searchText = 'Bord';
        const expectedUrl = `https://api-adresse.data.gouv.fr/search/?q=${searchText}&type=housenumber&autocomplete=1`;
        const expectedData =  
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    1.114268,
                    45.739256
                ]
            },
            "properties": {
                "label": "Bord 87700 Saint-Martin-le-Vieux",
                "score": 0.9499072727272727,
                "id": "87166_il72il",
                "name": "Bord",
                "postcode": "87700",
                "citycode": "87166",
                "x": 553380.07,
                "y": 6517268.93,
                "city": "Saint-Martin-le-Vieux",
                "context": "87, Haute-Vienne, Nouvelle-Aquitaine",
                "type": "street",
                "importance": 0.44898,
                "street": "Bord"
            }
        }

        const result = await getAddress(searchText);

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(expectedUrl);

        expect(result).toEqual(expectedData)
    });

    it('should handle fetch error', async () => {
        const expectedError = new Error('Mocked fetch error');
        global.fetch = jest.fn(() => Promise.reject(expectedError));

        const result = await getAddress('example');

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalled();

        expect(spyLog).toHaveBeenCalledWith(
            expectedError
        )
        expect(result).toBeUndefined()
    });
});