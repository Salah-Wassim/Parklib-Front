import React from "react";
import {View, StyleSheet, Image,Text} from "react-native";
import {Button} from "@react-native-material/core";
import { Stack} from 'react-native-flex-layout';
import { launchImageLibrary } from 'react-native-image-picker';

import * as ImagePicker from 'expo-image-picker';

const CreateAdThirdSteps = ({navigation}) => {

    const [photo, setPhoto] = React.useState({});
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

        if (!result.cancelled) {
            setPhoto(result.uri);
        }
    };

    const handleSubmit = () => {
        if(photo === null) {
            setError('Merci d\'ajouter une photo');
        }
        else {
            setError('');
            navigation.navigate('')
        }
    }

    return (
        <Stack m={20} spacing={40} style={styles.createAdThirdStepsContainer}>
            <View>
                <View>
                    <Image
                        source={{ uri: photo.uri}}
                        style={{ width: 300, height: 300 }}
                    />
                    <Button title="Choose Photo" onPress={pickImage} />
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
    createAdThirdStepsContainer: {},
    error:{
        color:'red',
        alignSelf:'center'
    }
})

export default CreateAdThirdSteps;
