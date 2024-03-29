import React from "react";
import {View, StyleSheet} from "react-native";
import {Text, TextInput, Button} from '@react-native-material/core';
import { Stack} from 'react-native-flex-layout';
import DropDownPicker from 'react-native-dropdown-picker';
import COLOR from "../utils/color.constant";

const CreateAdSecondSteps = ({ route, navigation }) => {
    
    const { parking, price, typeOfPlace, isAssured } = route.params;
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('')
    const [contact, setContact] = React.useState('email');
    const [error, setError] = React.useState('');

    const [openContact, setOpenContact] = React.useState(false);
    const [itemsContact, setItemsContact] = React.useState([
        { label: 'Email', value: 'email' },
        { label: 'Téléphone', value: 'telephone' },
    ]);

    const handleSubmit = () => {
        if (title === '' || description === '' || contact === '') {
            setError('Merci de remplir tous les champs s\'il vous plaît')
        }
        else{
            setError('');
            const post = {
                'title': title,
                'description': description,
                'price': price ,
                'typeOfPlace': typeOfPlace ,
                'contact': contact,
                'isAssured': isAssured,
                'ParkingParticulierId': null, 
                'ValidationStatusId': 1 
            }
            navigation.navigate('CreateAdThirdSteps', {
                post: post,
                parking: parking,
            })
        }
    }

    return (
        <Stack m={20} spacing={40} style={styles.createAdSecondStepsContainer}>
            <View style={styles.columnContainer} >
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Titre de votre annonce</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder='ex : Ma super annonce '
                        variant="outlined"
                        onChangeText={newTitre => setTitle(newTitre)}
                        value={title}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Description</Text>
                    <TextInput
                        style={styles.formInput}
                        variant="outlined"
                        onChangeText={newDescription => setDescription(newDescription)}
                        value={description}
                    />
                </View>
                <View style={[styles.formContainer, {zIndex: 2}]}>
                    <Text style={styles.formText}>Contact</Text>
                    <DropDownPicker
                    style={styles.dropdownPicker}
                        open={openContact}
                        value={contact}
                        items={itemsContact}
                        setOpen={setOpenContact}
                        setValue={setContact}
                        setItems={setItemsContact}
                    />
                </View>
            </View>
            <View style={styles.submitButtonContainer}>
                <Text style={styles.error}>{error}</Text>
                <Button style={styles.submitButton} title="Dernière étape" onPress={handleSubmit}/>
            </View>
        </Stack>
    )
}

const styles = StyleSheet.create({
    createAdSecondStepsContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginBottom: 0,
    },
    columnContainer: {
        zIndex: 2,
    },
    error: {
        color : COLOR.rouge,
        alignSelf: 'center',
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 5,
    },
    formText: {
        marginBottom: 5
    },
    submitButtonContainer: {
        marginBottom: 10,
    },
    submitButton: {
        backgroundColor: COLOR.vert,
        color: COLOR.blanc
    },
    dropdownPicker: {
    }
})

export default CreateAdSecondSteps;