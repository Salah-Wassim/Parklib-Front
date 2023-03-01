import React from "react";
import {View, StyleSheet, Image,Text} from "react-native";
import {Button} from "@react-native-material/core";
import { Stack} from 'react-native-flex-layout';
import { launchImageLibrary } from 'react-native-image-picker';

import * as ImagePicker from 'expo-image-picker';
import COLOR from "../utils/color.constant";

const CreateAdThirdSteps = ({route , navigation}) => {

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
        console.log(result);
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
        console.log(result);
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
        console.log(result);
        if (!result.canceled) {
            setPhoto3(result.assets[0]);
        }
    };

    const handleSubmit = () => {
        if(photo === null) {
            setError('Merci d\'ajouter photo');
        }
        else {
            setError('');
            navigation.navigate('')
        }
    }

    return (
        <Stack m={20} spacing={40} style={styles.layoutFlex}>
            <Text style={styles.title}>Vous pouvez ajouter jusqu'à 3 photos</Text>
            <View style={styles.columnItems} >
                <View style={styles.columnItems}>
                    {photo.uri ? (
                    <View  style={styles.inlineItems}>
                        <Image
                            source={{ uri: photo.uri}}
                            style={{ width: 100, height: 100 }}
                            />
                        <Button title="x"  />
                    </View>
                    )
                    :
                    null
                    }
                    {photo.uri ? 
                    null
                    :
                    (<Button title="+" onPress={pickImage} />)
                    }

                </View>
                <View style={styles.columnItems}>
                    {photo2.uri ? (
                    <Image
                        source={{ uri: photo2.uri}}
                        style={{ width: 100, height: 100 }}
                    />)
                    :
                    null
                    }
                    {photo2.uri ? 
                    null
                    :
                    (<Button title="+" onPress={pickImage2} />)
                    }
                </View>

                <View style={styles.columnItems}>
                    {photo3.uri ? (
                    <Image
                        source={{ uri: photo3.uri}}
                        style={{ width: 100, height: 100 }}
                    />)
                    :
                    null
                }
                    {photo3.uri ? 
                    null
                    :
                    (<Button title="+" onPress={pickImage3} />)
                }
                </View>   

            </View>
            <View style={styles.submitButtonContainer}>
                <Button style={styles.submitButton} title="Publier" color="#157575" onpress={handleSubmit}/>
                <Text style={styles.error}>{error}</Text>
            </View>
        </Stack>
    )
}

const styles = StyleSheet.create({
    layoutFlex: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: "flex-start",
            alignItems: "stretch"
    },
    columnItems: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "center"
    },
    inlineItems: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    title:{
        fontWeight: "bold",
        color: COLOR.vert ,
        alignSelf:'center'
    },
    error:{
        color:'red',
        alignSelf:'center'
    }
})

export default CreateAdThirdSteps;
