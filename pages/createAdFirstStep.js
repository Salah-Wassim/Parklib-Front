import React from "react";
import {View , StyleSheet , TouchableOpacity, Switch} from "react-native";
import {Text, TextInput, Button} from '@react-native-material/core';
import { Stack} from 'react-native-flex-layout';
import DropDownPicker from 'react-native-dropdown-picker';
import InputAddressAutocomplete from "../components/inputAddressAutocomplete";
import {addParkingParticulier} from "../api/parkingParticulier";


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

    const [parking, setParking] = React.useState({
        'address': '',
        'zipCode': '',
        'city': '',
        'lattitude': 0,
        'longitude': 0
    });

    const [partialPost, setPartialPost] = React.useState({
        'title': '',
        'description': '',
        'price': 0,
        'typeOfPlace': '',
        'contact': '',
        'isAssured': false,
    });

    const [openTypePlace, setOpenTypePlace] = React.useState(false);
    const [itemsTypePlace, setItemsTypePlace] = React.useState([
        { label: 'Choisissez un type', value: '' },
        { label: 'Sous-sol (Privé)', value: 'sous-sol' },
        { label: 'Aérien (Privé)', value: 'aerien' },
        { label : "Autre", value: 'autre'},
    ]);
    const [openAssured, setOpenAssured] = React.useState(false);
    const [itemsAssured, setItemsAssured] = React.useState([
        { label: '', value: '' },
        { label: 'Non', value: false },
        { label: 'Oui', value: true },
    ]); 
    
    const onChooseAddress = (respAddress) => {
        console.log(respAddress.geometry.coordinates);
        setAdr(respAddress.properties.label);
        setAddress(respAddress.properties.name);
        setZipCode(respAddress.properties.postcode);
        setCity(respAddress.properties.city);
        setLattitude(respAddress.geometry.coordinates[1]);
        setLongitude(respAddress.geometry.coordinates[0]);
    }

    const handleSubmit = () => {
        console.log('submission')
        setParking({
            'address': address,
            'zipCode': zipCode,
            'city': city,
            'lattitude': lattitude,
            'longitude': longitude
        });

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
            console.log('error')
            setError('Merci de remplir tous les champs s\'il vous plaît')
        } else {
            console.log('no error')
            setError('');

            // addParkingParticulier(
            //     {
            //         'address': address,
            //         'zipCode': zipCode,
            //         'city': city,
            //         'lattitude': lattitude,
            //         'longitude': longitude,
            //         'isActivated': true //TODO: delete in future
            //     }
            // )
            //     .then((res) => {
            //         console.log(res);

            //         setPartialPost({
            //             'title': '',
            //             'description': '',
            //             'price': parseInt(price),
            //             'typeOfPlace': typePlace,
            //             'contact': '',
            //             'isAssured': assured,
            //             'ParkingParticulierId': 1 //TODO: retrieve ParkingId, now or next page
            //         })
        
        
                    navigation.navigate('CreateAdSecondSteps', {
                        parking: parking,
                        partialPost: partialPost
                    })
            //     })
            // .catch( (err) => { console.log(err) })

        }
    }


    return (
        <Stack m={20} spacing={40} style={styles.createAdFirstStepContainer}>
            <View>
                <View style={styles.formContainer}>
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
                        inputMode="numeric"
                        keyboardType="decimal-pad"
                        onChangeText={newprice => setPrice(parseInt(newprice))}
                        defaultValue={price}
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
        color: 'red',
        fontWeight: "bold"
    },
    formContainer: {
        marginTop: 5,
        marginBottom: 5,
    },
    submitButton: {},
    formText: {
        marginBottom: 5
    },
    dropdownPicker: {
        zIndex: 10,
        borderRadius: 5,
        borderColor: "lightgray"
    },
    inputAddressAutocomplete: {
        backgroundColor: "white"
    },
    formInput: {
        borderColor: "lightgray",
        backgroundColor: "white"
    }
})

export default CreateAdFirstStep;