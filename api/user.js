import {adrIpV4, port, token} from '../secretFile';
const userUrl = `http://${adrIpV4}:${port}/users/`;

export const getAllUser = async () => {
    try {
        const response = await fetch(userUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return response.json();
    } catch (error) {
        console.log('fetch getAllUser error', error);
    }
}

export const getOneUser = async (userId) => {
    try {
        const response = await fetch(userUrl + userId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return response.json();
    } catch (error) {
        console.log('fetch getOneUser error', error);
    }
}