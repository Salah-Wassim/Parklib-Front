import React from "react";
import {View, StyleSheet, Image,Text} from "react-native";
import {Button} from "@react-native-material/core";
import { Stack} from 'react-native-flex-layout';
import { launchImageLibrary } from 'react-native-image-picker';

import * as ImagePicker from 'expo-image-picker';
import COLOR from "../utils/color.constant";

import {addPost} from "../api/post";
import {addParkingParticulier} from "../api/parkingParticulier";

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
        // console.log(result);
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
        // console.log(result);
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
        // console.log(result);
        if (!result.canceled) {
            setPhoto3(result.assets[0]);
        }
    };

    const handleSubmit = async () => {
        // console.log(photo)
        // console.log(photo2)
        // console.log(photo3)
        if(photo.uri == undefined && photo2.uri == undefined && photo3.uri == undefined) {
            setError('Merci d\'ajouter au minimum une photo');
            console.log('error')
        }
        else {
            setError('');
            await addParkingParticulier(parking)
                .then( async (res) => {
                    // console.log('addParking res : ')
                    // console.log(res)
                    post.ParkingParticulierId = res.data.id;
                    // post.ValidationStatusId = 1;
                    await addPost(post)
                        .then((res) => {
                            // console.log('addPost res : ')
                            // console.log(res);
                            //TODO: redirect somewhere else, user's postList when created ?
                            navigation.navigate('Historique')
                        })
                        .catch( (e) => { console.log(e)})
                })
                .catch( (e) => { console.log(e)})
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
                        <Button title="Supprimer" style={styles.deleteImgBtn}  />
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
                    <Button title="Supprimer" style={styles.deleteImgBtn}  />
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
                        <Button title="Supprimer" style={styles.deleteImgBtn}  />
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
                <Button style={styles.submitButton} title="Publier mon annonce" color="#157575" onPress={handleSubmit}/>
                <Text style={styles.error}>{error}</Text>   
            </View>

            
        </Stack>
    )
}

const styles = StyleSheet.create({
    createAdThirdStepsContainer: {
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
        alignSelf:'center'
    },
    error: {
        color : 'red',
        alignSelf: 'center',
        fontWeight: "bold",
        marginTop: 5,
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
    }
})

export default CreateAdThirdSteps;