const pictureUrl = 'http://192.168.1.10:3000/picture';

export const uploadPicturesForPost = async (formPicture) => {
    const url = pictureUrl + '/upload' 
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
        console.log('Response', response);
        return response;
        } catch (err) {
            console.log('Error uploading the files', err)
        }
}