import React from "react";
import {View , StyleSheet , TouchableOpacity, Switch} from "react-native";
import {Text, TextInput, Button} from '@react-native-material/core';
import { Stack} from 'react-native-flex-layout';
import DropDownPicker from 'react-native-dropdown-picker';
import InputAddressAutocomplete from "../components/inputAddressAutocomplete";
import COLOR from "../utils/color.constant";

const CreateAdFirstStep = ({route , navigation}) => {

    const [adr, setAdr] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [zipCode, setZipCode] = React.useState('');
    const [city, setCity] = React.useState('');
    const [lattitude, setLattitude] = React.useState(0);
    const [longitude, setLongitude] = React.useState(0);
    const [price, setPrice] = React.useState(null);
    const [typePlace, setTypePlace] = React.useState('');
    const [assured, setAssured] = React.useState('')
    const [error, setError] = React.useState('');


    const [openTypePlace, setOpenTypePlace] = React.useState(false);
    const [itemsTypePlace, setItemsTypePlace] = React.useState([
        { label: 'Choisissez un type', value: '' },
        { label: 'Sous-sol (Privé)', value: 'sous-sol' },
        { label: 'Aérien (Privé)', value: 'aerien' },
        { label : "Autre", value: 'autre'},
    ]);
    const [openAssured, setOpenAssured] = React.useState(false);
    const [itemsAssured, setItemsAssured] = React.useState([
        { label: 'Choisir une réponse', value: '' },
        { label: 'Non', value: false },
        { label: 'Oui', value: true },
    ]); 
    
    const onChooseAddress = (respAddress) => {
        setAdr(respAddress.properties.label);
        setAddress(respAddress.properties.name);
        setZipCode(respAddress.properties.postcode);
        setCity(respAddress.properties.city);
        setLattitude(respAddress.geometry.coordinates[1]);
        setLongitude(respAddress.geometry.coordinates[0]);
    }

    const handleSubmit = () => {
        if (
            adr === '' ||
            price == null ||
            typePlace === '' ||
            assured === '' ||
            address === '' ||
            zipCode === '' ||
            city === '' ||
            lattitude === null ||
            longitude === null
        ) {
            setError('Merci de remplir tous les champs s\'il vous plaît')
        } else {
            setError('');

            const parking = {
                'address': address,
                'zipCode': zipCode,
                'city': city,
                'lattitude': lattitude,
                'longitude': longitude
            };

            navigation.navigate('CreateAdSecondSteps', {
                parking: parking,
                price: price,
                typeOfPlace: typePlace,
                isAssured: assured
            })
        }
    }


    return (
        <Stack m={20} spacing={40} style={styles.createAdFirstStepContainer}>
            <View style={styles.columnContainer} >
                <View style={[styles.formContainer, {zIndex: 4}]}>
                    <Text style={styles.formText}>Adresse complète de votre bien</Text>
                    <InputAddressAutocomplete
                        style={styles.inputAddressAutocomplete}
                        isOpen={false}
                        onChooseAddress={onChooseAddress}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Loyer / jour (en €)</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder='ex : 100€'
                        variant="outlined"
                        inputMode="decimal"
                        keyboardType="decimal-pad"
                        onChangeText={newprice => setPrice(parseInt(newprice))}
                        defaultValue={price}
                    />
                </View>
                <View style={[styles.formContainer, {zIndex: 3}]}>
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
                <View style={[styles.formContainer, {zIndex: 2}]}>
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
                <Button style={styles.submitButton} title="Continuer" onPress={handleSubmit}/>
                <Text style={styles.error}>{error}</Text>
            </View>
        </Stack>
    )
}
const styles = StyleSheet.create({
    createAdFirstStepContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginBottom: 0,
    },
    error: {
        color : COLOR.rouge,
        alignSelf: 'center',
        fontWeight: "bold",
        marginTop: 5,
    },
    columnContainer: {
        zIndex: 2,
    },
    formContainer: {
        marginTop: 5,
        marginBottom: 5,
    },
    submitButtonContainer: {
    },
    submitButton: {
        backgroundColor: COLOR.vert,
        color: COLOR.blanc
    },
    formText: {
        marginBottom: 5
    },
    dropdownPicker: {
        borderRadius: 5,
        borderColor: COLOR.grisclair
    },
    inputAddressAutocomplete: {
        backgroundColor: COLOR.blanc,
    },
    formInput: {
        borderColor: COLOR.grisclair,
        backgroundColor: COLOR.blanc,
    }
})

export default CreateAdFirstStep;