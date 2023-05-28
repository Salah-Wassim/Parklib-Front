import { getOneUser } from '../api/user';
import {adrIpV4, port} from '../secretFile';

describe('getOneUser', () => {
    let spyLog;

    beforeEach(() => {
        spyLog = jest.spyOn(console, 'log').mockImplementation();
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({
                    "id": 1,
		            "firstName": "John",
		            "lastName": "Doe",
		            "phone": "0654852514",
		            "picture": "image1",
		            "address": "10 rue du chateau",
		            "email": "john.doe@yopmail.com",
		            "isActivated": true,
                }),
            })
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch a user by ID', async () => {
        const userId = '1';
        const expectedUrl = `http://${adrIpV4}:${port}/users/${userId}`;
        const expectedData = {
            "id": 1,
            "firstName": "John",
            "lastName": "Doe",
            "phone": "0654852514",
            "picture": "image1",
            "address": "10 rue du chateau",
            "email": "john.doe@yopmail.com",
            "isActivated": true,
        }

        const result = await getOneUser(userId);

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(expectedUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        expect(result).toEqual(expectedData)
    });

    it('should handle fetch error', async () => {
        const expectedError = new Error('Mocked fetch error');
        global.fetch = jest.fn(() => Promise.reject(expectedError));

        const result = await getOneUser('1');

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalled();

        expect(spyLog).toHaveBeenCalledWith(
            'fetch getOneUser error',
            expectedError
        )
        expect(result).toBeUndefined()
    });
});
