import React from "react";
import {View, StyleSheet} from "react-native";
import {Text, TextInput, Button} from '@react-native-material/core';
import { Stack} from 'react-native-flex-layout';
// import RNPickerSelect from 'react-native-picker-select';
import DropDownPicker from 'react-native-dropdown-picker';

const CreateAdSecondSteps = ({navigation}) => {

    const [titre, setTitre] = React.useState('');
    const [description, setDescription] = React.useState('')
    const [contact, setContact] = React.useState('email');
    const [error, setError] = React.useState('');

    const [openContact, setOpenContact] = React.useState(false);
    const [itemsContact, setItemsContact] = React.useState([
        { label: 'Email', value: 'email' },
        { label: 'Téléphone', value: 'telephone' },
    ]);

    const handleSubmit = () => {
        if(titre === '' || description === '' || contact === ''){
            setError('Merci de remplir tous les champs s\'il vous plaît')
        }
        else{
            setError('');
            navigation.navigate('CreateAdThirdSteps')
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
                        onChangeText={newTitre => setTitre(newTitre)}
                        value={titre}
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
        alignSelf : 'center'
    },
    dropdownPicker: {
        zIndex: 10
    }
})

export default CreateAdSecondSteps;