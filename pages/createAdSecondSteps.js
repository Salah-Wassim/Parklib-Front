import React from "react";
import {View, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import {Text, TextInput, Button, Flex} from '@react-native-material/core';
import { Stack} from 'react-native-flex-layout';
import DropDownPicker from 'react-native-dropdown-picker';
import COLOR from "../utils/color.constant";
import { DateTimePicker, DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import moment from "moment";


const CreateAdSecondSteps = ({ route, navigation }) => {

    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    
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

    const [startDate, setStartDate] = React.useState(todayDate);
    const [endDate, setEndDate] = React.useState(todayDate);

    const showDepartureDatepicker = () => {
        const currentMode ="date"
        const onChange = (event, selectedDate) => {
            selectedDate.setHours(0, 0, 0, 0);
            console.log(selectedDate);
            setStartDate(selectedDate);
        };
        DateTimePickerAndroid.open({
            value: startDate,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showEndDatepicker = () => {
        const currentMode ="date"
        const onChange = (event, selectedDate) => {
            selectedDate.setHours(0, 0, 0, 0);
            console.log(selectedDate);
            setEndDate(selectedDate);
        };
        DateTimePickerAndroid.open({
            value: startDate,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const handleSubmit = () => {    
        if (title === '' || description === '' || contact === '') {
            setError('Merci de remplir tous les champs s\'il vous plaît')
            return;
        }
        if (startDate.getTime() < todayDate.getTime()) {
            setError('La date de début de disponibilité ne peut pas débuter avant aujourd\'hui.')
            return;
        }
        if (endDate.getTime() <= startDate.getTime()) {
            setError('La date de fin de disponibilité doit être postérieur à celle de début.')
            return;
        }
        setError('');
        const post = {
            'title': title,
            'description': description,
            'price': price ,
            'typeOfPlace': typeOfPlace ,
            'contact': contact,
            'isAssured': isAssured,
            'ParkingParticulierId': null, 
            'ValidationStatusId': 1,
            'startDate': startDate,
            'endDate': endDate,
        }
        navigation.navigate('CreateAdThirdSteps', {
            post: post,
            parking: parking,
        })
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
                        multiline = {false}
                        numberOfLines = {4}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Disponible</Text>
                    <Flex direction="row" >
                        <Text style={styles.dateFormText}>Du</Text>
                        <TouchableOpacity
                            style={styles.dateFormInput} onPress={showDepartureDatepicker}>
                            <TextInput
                                placeholder='Début'
                                variant="outlined"
                                editable={false}
                                onChangeText={setStartDate}
                                value={moment(startDate.toDateString()).format("DD/MM/YYYY")}
                            />
                        </TouchableOpacity>
                        <Text style={styles.dateFormText}>au</Text>
                        <TouchableOpacity
                            style={styles.dateFormInput} onPress={showEndDatepicker}>
                            <TextInput
                                placeholder='Fin'
                                variant="outlined"
                                editable={false}
                                onChangeText={setEndDate}
                                value={ moment(endDate.toDateString()).format("DD/MM/YYYY")}
                            />
                        </TouchableOpacity>
                    </Flex>
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
        marginBottom: 5,
        marginTop: 10
    },
    submitButtonContainer: {
        marginBottom: 10,
    },
    submitButton: {
        backgroundColor: COLOR.vert,
        color: COLOR.blanc
    },
    dropdownPicker: {
    },
    dateFormInput:{
        width:'40%'
    },
    dateFormText: {
        width: '10%',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
})

export default CreateAdSecondSteps;