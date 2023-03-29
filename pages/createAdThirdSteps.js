import React from "react";
import {View, StyleSheet, Image,Text, Platform} from "react-native";
import {Button} from "@react-native-material/core";
import { Stack} from 'react-native-flex-layout';
import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import COLOR from "../utils/color.constant";
import {addPost} from "../api/post";
import {addParkingParticulier} from "../api/parkingParticulier";
import {uploadPictureForPost} from "../api/picture";

const CreateAdThirdSteps = ({ route, navigation }) => {
    
    const { post , parking } = route.params;
    const [photo, setPhoto] = React.useState({});
    const [photo2, setPhoto2] = React.useState({});
    const [photo3, setPhoto3] = React.useState({});
    const [error, setError] = React.useState('');

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setPhoto(result.assets[0]);
        }
    };

    const pickImage2 = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setPhoto2(result.assets[0]);
        }
    };

    const pickImage3 = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setPhoto3(result.assets[0]);
        }
    };

    const handleSubmit = async () => {
        if(photo.uri == undefined && photo2.uri == undefined && photo3.uri == undefined) {
            setError('Merci d\'ajouter au minimum une photo');
            console.log('error')
        }
        else {
            setError('');
            console.log('Start sending to BDD')
            await addParkingParticulier(parking)
                .then( async (res) => {
                    console.log('addParking res : ')
                    console.log(res)
                    post.ParkingParticulierId = res.data.id;
                    await addPost(post)
                        .then(async (res) => {
                            console.log('addPost res : ')
                            console.log(res);
                            //get only defined pictures
                            const photos = [photo, photo2, photo3];
                            const files = [];
                            photos.forEach(element => {
                                if (element.uri != undefined ) {
                                    files.push(element);
                                }
                            });
                            //create form, put postId and pictures inside
                            const form = new FormData();
                            form.append('postid', res.data.id)
                            for (let i = 0; i < files.length; i++) {
                                let photoUri = files[i].uri;
                                let type = photoUri.split(".").pop();
                                let name = photoUri.split("/").pop();
                                form.append('url' , {
                                    name: name,
                                    type: `image/${type}`,
                                    uri: Platform.OS === 'ios' ? photoUri.replace('file://', '') : photoUri,
                                  })
                            }
                            await uploadPictureForPost(form)
                                .then((res) => {
                                    console.log('uploadPictures res : ')
                                    console.log(res);
                                    console.log('Ended sending to BDD')
                                    alert('Votre annonce a bien été créée !')
                                    //TODO: redirect to somewhere else when created, like user's post-list page ?
                                    // navigation.navigate('DrawerNav')
                                })
                                .catch((e) => { 
                                    console.log(e)
                                    setError('Un problème est survenu lors de l\'envoi des photos. Si le problème persiste, contactez l\'administrateur.');
                                })
                        })
                        .catch( (e) => { 
                            console.log(e)
                            setError('Un problème est survenu lors de la création de l\'annonce. Si le problème persiste, contactez l\'administrateur.');
                        })
                })
                .catch( (e) => { 
                    console.log(e)
                    setError('Un problème est survenu lors de la création du parking. Si le problème persiste, contactez l\'administrateur.');
                })
        }
    }

    return (
        <Stack m={20} spacing={20} style={styles.createAdThirdStepsContainer}>
            <View>
                <Text style={styles.title}>Vous pouvez ajouter jusqu'à 3 photos</Text>
                <View style={styles.columnItems}>
                    {photo.uri ? (
                        <View  style={styles.inlineItems}>
                        <Image
                            source={{ uri: photo.uri}}
                            style={styles.image} 
                            />
                        <Button title="Supprimer" style={styles.deleteImgBtn} onPress={ () => { setPhoto({}) }} />
                    </View>
                    )
                    :
                    <View style={styles.inlineItems}>
                        <Button style={styles.addImgBtn}  title="+" onPress={pickImage} />
                    </View> 
                    }
                </View>
                <View style={styles.columnItems}>
                    {photo2.uri ? (
                    <View  style={styles.inlineItems}>
                    <Image
                        source={{ uri: photo2.uri}}
                        style={styles.image} 
                        />
                    <Button title="Supprimer" style={styles.deleteImgBtn} onPress={ () => { setPhoto2({}) }}/>
                    </View>
                    )
                    :
                    <View style={styles.inlineItems}>
                        <Button style={styles.addImgBtn}  title="+" onPress={pickImage2} />
                    </View>
                    }
                </View>
                <View style={styles.columnItems}>
                    {photo3.uri ? (
                    <View  style={styles.inlineItems}>
                        <Image
                        source={{ uri: photo3.uri}}
                        style={styles.image} 
                        />
                        <Button title="Supprimer" style={styles.deleteImgBtn} onPress={ () => { setPhoto3({}) }}/>
                    </View>
                    )
                    :
                    <View style={styles.inlineItems}>
                        <Button style={styles.addImgBtn}  title="+" onPress={pickImage3} />
                    </View>
                }
                </View>   
            </View>
            <View style={styles.submitButtonContainer}>
                <Text style={styles.error}>{error}</Text>   
                <Button style={styles.submitButton} title="Publier mon annonce" onPress={handleSubmit}/>
            </View>
        </Stack>
    )
}

const styles = StyleSheet.create({
    createAdThirdStepsContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginBottom: 0,
    },
    columnItems: {
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "stretch",
        marginVertical: 15
    },
    inlineItems: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%"
    },
    title:{
        fontWeight: "bold",
        color: COLOR.vert ,
        alignSelf: 'center',
        marginBottom: 10
    },
    error: {
        color : COLOR.rouge,
        alignSelf: 'center',
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 5,
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 15
    },
    addImgBtn: {
        backgroundColor: COLOR.vert,
        color: COLOR.blanc,
        fontWeight: "bold",
    },
    deleteImgBtn: {
        backgroundColor: COLOR.rouge,
        color: COLOR.blanc,
    },
    submitButtonContainer: {
        marginBottom: 10,
    },
    submitButton: {
        backgroundColor: COLOR.vert,
        color: COLOR.blanc
    },
})

export default CreateAdThirdSteps;