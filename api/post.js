const postUrl = 'http://192.168.1.10:3000/annonce';

export const addPost = async (post) => {
    try {
        const response = await fetch(
            postUrl,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJrZW5iOTAyN0BnbWFpbC5jb20iLCJpYXQiOjE2Nzg4NjY2NDYsImV4cCI6MTY3ODk1MzA0Nn0.x2S4tpNfE2YUbpQh8_XGezBKwJooS1-D4IatbSSijwE',
                },
                body: JSON.stringify(post)
            }
        );
        const json = await response.json();
        return json;
      } catch (error) {
        console.error(error);
      }
}