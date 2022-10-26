import React from "react";
import {View, StyleSheet, Image} from "react-native";
import {Button} from "@react-native-material/core";
import { launchImageLibrary } from 'react-native-image-picker';

const createAdThirdSteps = ({navigation}) => {

    const [photo, setPhoto] = React.useState(null);
    const [error, setError] = React.useState('');

    const handleChoosePhoto = () => {
        launchImageLibrary({ noData: true }, (response) => {
            // console.log(response);
            if (response) {
                setPhoto(response);
            }
        });
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
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {photo && (
                        <>
                            <Image
                                source={{ uri: photo.uri }}
                                style={{ width: 300, height: 300 }}
                            />
                            <Button title="Choose Photo" onPress={handleChoosePhoto} />
                        </>
                    )}
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

export default createAdThirdSteps;