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
                    'Authorization': 'Bearer test',
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