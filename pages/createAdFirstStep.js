import React from "react";
import {View , StyleSheet , TouchableOpacity, Switch} from "react-native";
import {Text, TextInput, Button} from '@react-native-material/core';
import { Stack} from 'react-native-flex-layout';
import DropDownPicker from 'react-native-dropdown-picker';
// import AutocompleteAddress from "../components/autocompleteAddress";
import InputAddressAutocomplete from "../components/inputAddressAutocomplete";

const CreateAdFirstStep = ({navigation}) => {

    const [adr, setAdr] = React.useState('');
    const [prix, setPrix] = React.useState(null);
    const [typePlace, setTypePlace] = React.useState('sous-sol');
    const [nbrPlace, setNbrPlace] = React.useState(1);
    const [assured, setAssured] = React.useState('non')
    const [error, setError] = React.useState('');

    const [openTypePlace, setOpenTypePlace] = React.useState(false);
    const [itemsTypePlace, setItemsTypePlace] = React.useState([
        { label: 'Parking privé (sous-sol)', value: 'sous-sol' },
        { label: 'Parking privé (aerien)', value: 'aerien' },
        { label : "Autre", value: 'autre'},
    ]);
    const [openAssured, setOpenAssured] = React.useState(false);
    const [itemsAssured, setItemsAssured] = React.useState([
        { label: 'Non', value: 'non' },
        { label: 'Oui', value: 'oui' },
    ]);


    

    const handleSubmit = () => {
        console.log('hello')
        if (adr === '' || prix == null || typePlace === '' || nbrPlace === null || assured === '') {
            console.log('error')
            setError('Merci de remplir tous les champs s\'il vous plaît')
        } else {
            console.log('no error')
            setError('');
            navigation.navigate('CreateAdSecondSteps')
        }
    }

    return (
        <Stack m={20} spacing={40} style={styles.createAdFirstStepContainer}>
            <View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Adresse complète de votre bien</Text>
                    {/* <TextInput
                        style={styles.formInput}
                        placeholder='Adresse postale'
                        variant='outlined'
                        onChangeText={newAdr => setAdr(newAdr)}
                        value={adr}
                    /> */}
                     {/* <AutocompleteAddress isOpen={true} onFindAddress={(address) => {
                            console.log(address)
                        }} onSearchError={(e) => {
                            console.log(e)
                        }} placeholder={"Cherchez une adresse, un lieu..."}/> */}
                    <InputAddressAutocomplete isOpen={false} onFindAddress={(address) => {
                            console.log(address)
                        }} onSearchError={(e) => {
                            console.log(e)
                        }}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Loyer /jour</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder='ex : 100€'
                        variant="outlined"
                        onChangeText={newPrix => setPrix(newPrix)}
                        defaultValue={prix}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Type de place</Text>
                    <DropDownPicker
                    style={styles.dropdownPicker}
                        open={openTypePlace}
                        value={typePlace}
                        items={itemsTypePlace}
                        setOpen={setOpenTypePlace}
                        setValue={setTypePlace}
                        setItems={setItemsTypePlace}
                    />
                </View>
                {/* <View style={styles.formContainer}>
                    <Text style={styles.formText}>Nombre de place</Text>
                    <TextInput
                        style={styles.formInput}
                        variant="outlined"
                        onChangeText={newNbrPlace => setNbrPlace(newNbrPlace)}
                        value={nbrPlace}
                    />
                </View> */}
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Votre place de parking est-elle assurée ?</Text>
                    <DropDownPicker
                    style={styles.dropdownPicker}
                        open={openAssured}
                        value={assured}
                        items={itemsAssured}
                        setOpen={setOpenAssured}
                        setValue={setAssured}
                        setItems={setItemsAssured}
                    />
                </View>
            </View>
            <View style={styles.submitButtonContainer}>
                <Button style={styles.submitButton} title="Continuer" color="#157575" onPress={handleSubmit}/>
                <Text style={styles.error}>{error}</Text>
            </View>
        </Stack>
    )
}
const styles = StyleSheet.create({
    createAdFirstStepContainer: {},
    error:{
        color:'red',
    },
    submitButton: {},
    formText: {
        marginBottom: 5
    },
    dropdownPicker: {
        zIndex: 10
    }
})

export default CreateAdFirstStep;