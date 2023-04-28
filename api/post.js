import {adrIpV4, port, token} from '../secretFile';

const postUrl = `http://${adrIpV4}:${port}/annonce/`;
const postByParking = `http://${adrIpV4}:${port}/annonce/parkingParticulier/`

export const getPostByUser = async (userId, token) => {
    return await fetch(
        postUrl + 'user/' + userId,
        console.log('url post by user', postUrl + 'user/' + userId),
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        },
        console.log('test')
    )
    .then(response => {
        console.log("response", response)
        response.json();
    })
    .catch(error => {
        console.log("getPostByUser error", error);
    });
}

export const addPost = async (post) => {
    try {
        const response = await fetch(
            postUrl,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
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

export const editPost = async (postId, data, token) => {
    const requestBody = {
        postId,
        ...data,
    };
    await fetch(
        postUrl + postId,
        {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: postId && JSON.stringify(requestBody)
        }
    )
    .then(response => {
        console.log(response.status)
        if(response.status === 200){
            console.log("l'annonce à été modifié avec succés")
        }
        else if(response.status === 401){
            console.log("Vous n'êtes pas autorisé")
        }
        else{
            console.log("Echec lors de la modification de l'annonce")
        }
    })
    .catch(error => {
        console.log("error", error);
    })
}

export const deletePost = async (postId, token) => {
    console.log("url" , postUrl + postId)
    await fetch(
        postUrl + postId,
        {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: postId
        }
    )
    .then(response => {
        console.log('response', response.status);
        if(response.status === 204){
            console.log("L'annonce à été supprimer")
        }
        else if (response.status === 401){
            console.log("Vous n'êtes pas autorisé")
        }
        else{
            console.log('La suppression de l\'annonce a échoué');
        }
    })
    .catch(error => {
        console.log('Erreur : ',error)
    })
}

export const getValidationStatus = async (postId, token) => {
    await fetch(
        postByParking + `${postId}`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }
    )
    .then(response => {
        if (response.ok) {
            console.log('response', response);
            return response.json();
        } else {
            throw new Error("Echec lors de la récupération du statut de validation");
        }
    })
    .then(data => {
        console.log('data', data);
    })
    .catch(error => {
        console.log("error", error);
    });
};