import { getAllPrivateParking } from '../api/parkingParticulier';
import { adrIpV4, port } from '../secretFile';

describe('getAllPrivateParking', () => {
    let spyLog; // Espion pour la méthode console.log

    beforeEach(() => {
        // Création de l'espion sur console.log
        spyLog = jest.spyOn(console, 'log').mockImplementation();  
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({
                    id: 1,
                    name: 'Parking Example',
                    address: '123 Example Street',
                }),
            })
        );
    });
  
    afterEach(() => {
        jest.clearAllMocks();
    });
  
    it('should fetch private parking data', async () => {
        const expectedData = {
            id: 1,
            name: 'Parking Example',
            address: '123 Example Street',
        };

        const result = await getAllPrivateParking();
  
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(
            `http://${adrIpV4}:${port}/parking-particulier`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
  
        expect(result).toEqual(expectedData);
    });
  
    it('should handle fetch error', async () => {
        const expectedError = new Error('Mocked fetch error');
        // Mock de la fonction fetch pour rejeter la promesse avec une erreur
        global.fetch = jest.fn(() => Promise.reject(expectedError));
  
        const result = await getAllPrivateParking();
  
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(
            `http://${adrIpV4}:${port}/parking-particulier`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
  
        expect(spyLog).toHaveBeenCalledWith(
            'fetch getAllPrivateParking error',
            expectedError
        );
        expect(result).toBeUndefined();
    });
});