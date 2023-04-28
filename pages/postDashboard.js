import React, {useState, useEffect} from "react";
//import {ActivityIndicator, Flex} from "@react-native-material/core";
import {StyleSheet, View, Text, FlatList} from 'react-native';

import PostCard from "../components/postCard";
import {getPostByUser} from '../api/post';
import jwtDecode from "jwt-decode";
import { getAuthToken } from '../store/authentification/auth';

const PostDashboard = () => {

    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState()
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        try{
            const fetchToken = async () => {
                const authToken = await getAuthToken();
                if(authToken){
                    setToken(authToken)
                    const decodeToken = jwtDecode(authToken);
                    if(decodeToken && decodeToken.id){
                        setUserId(decodeToken.id)
                    }
                    else{
                        console.log('Impossible de récupérer l\'identifiant utilisateur')
                    }
                }
                else{
                    console.log("Impossible de récupérer le token")
                }
            }
            fetchToken();
        }
        catch(error){
            console.log("fetchToken error" , error)
        }
    }, []);

    useEffect(() => {
        if(userId && token){
            getPostByUser(userId, token)
            .then(data => {
                console.log("data", data)
                if(data){
                    const formattedPosts = data.map((_post) => {
                        const post = {
                            id: _post.id,
                            title: _post.title,
                            description: _post.description,
                            price: _post.price,
                            typeOfPlace: _post.typeOfPlace,
                            contact: _post.contact,
                            isAssured: _post.isAssured,
                            createdAt: _post.createdAt,
                            updatedAt: _post.updatedAt,
                            ParkingParticulierId: _post.ParkingParticulierId,
                            ValidationStatusId: _post.ValidationStatusId,
                            UserId: _post.UserId,
                            ParkingParticulier: {
                                id: _post.ParkingParticulier.id,
                                address: _post.ParkingParticulier.address,
                                zipCode: _post.ParkingParticulier.zipCode,
                                city: _post.ParkingParticulier.city,
                                lattitude: _post.ParkingParticulier.lattitude,
                                longitude: _post.ParkingParticulier.lattitude,
                                createdAt: _post.ParkingParticulier.createdAt,
                                updatedAt: _post.ParkingParticulier.updatedAt,
                                UserId: _post.ParkingParticulier.UserId
                            },
                            ValidationStatus: {
                                id: _post.ValidationStatus.id,
                                title: _post.ValidationStatus.title
                            }
                        }
                        return post;
                    });
                    setPosts(formattedPosts);
                }
                else{
                    console.log('Impossible de charger la réponse de la route post by user')
                }
            })
            .catch(error => {
                console.log("reponse route post by user error", error)
            })
        }
        else{
            console.log('Une erreur s\'est produit lors du chargement de la route');
            //throw new Error('Une erreur s\'est produit lors du chargement de la route');
        }
    }, []);
    
    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => <PostCard post={item} />}
                keyExtractor={(post) => post.id.toString()}
                ListEmptyComponent={() => (
                    <View style={styles.messageContainer}>
                        <Text style={styles.message}>Vous n'avez pas encore d'annonce</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    messageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
})

export default PostDashboard