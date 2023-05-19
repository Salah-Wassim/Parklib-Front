import {IPV4, PORT} from '../secretFile';

const pictureUrl = `http://${IPV4}:${PORT}/picture/`;

export const uploadPictureForPost = async (formPicture) => {
    const url = pictureUrl + '/post/upload' 
    try {
        const request = await fetch(
            url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer test',
                },
                body: formPicture
            }
        );
        const response = await request.json();
        return response;
        } catch (err) {
            console.log('Error uploading the files', err)
        }
}