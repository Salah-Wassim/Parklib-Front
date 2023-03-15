import React from "react";
import {View, StyleSheet} from "react-native";
import {Text, TextInput, Button} from '@react-native-material/core';
import { Stack} from 'react-native-flex-layout';
import DropDownPicker from 'react-native-dropdown-picker';
import {addPost} from "../api/post";

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
                'ValidationStatusId': 2 
            }

            navigation.navigate('CreateAdThirdSteps', {
                post: post,
                parking: parking,
            })
        }
    }

    return (
        <Stack m={20} spacing={40} style={styles.createAdSecondStepsContainer}>
            <View>
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
                <View style={styles.formContainer}>
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
                <Button style={styles.submitButton} title="Dernière étape" color="#157575" onPress={handleSubmit}/>
                <Text style={styles.error}>{error}</Text>
            </View>
        </Stack>
    )
}

const styles = StyleSheet.create({
    createAdSecondStepsContainer: {},
    error: {
        color : 'red',
        alignSelf: 'center',
        fontWeight: "bold"
    },
    dropdownPicker: {
        zIndex: 10
    }
})

export default CreateAdSecondSteps;