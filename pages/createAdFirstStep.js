import React from "react";
import {View , StyleSheet , TouchableOpacity} from "react-native";
import {Text, TextInput, Button} from '@react-native-material/core';
import { Stack} from 'react-native-flex-layout';
import RNPickerSelect from 'react-native-picker-select';

const CreateAdFirstStep = ({navigation}) => {

    const [adr, setAdr] = React.useState('');
    const [prix, setPrix] = React.useState(null);
    const [typePlace, setTypePlace] = React.useState('');
    const [nbrPlace, setNbrPlace] = React.useState(null);
    const [assured, setAssured] = React.useState('')
    const [error, setError] = React.useState('');

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
                    <TextInput
                        style={styles.formInput}
                        placeholder='Adresse postale'
                        variant='outlined'
                        onChangeText={newAdr => setAdr(newAdr)}
                        value={adr}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Loyer mensuel</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder='ex : 1000'
                        variant="outlined"
                        onChangeText={newPrix => setPrix(newPrix)}
                        defaultValue={prix}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Type de place</Text>
                    <RNPickerSelect
                        onValueChange={newTypePlace => setTypePlace(newTypePlace)}
                        items={[
                            {label : "Selectionné un type de place", value: ''},
                            { label: 'Parking privé (sous-sol)', value: 'sous-sol' },
                            { label: 'Parking privé (aerien)', value: 'aerien' },
                        ]}
                        value={typePlace}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Nombre de place</Text>
                    <TextInput
                        style={styles.formInput}
                        variant="outlined"
                        onChangeText={newNbrPlace => setNbrPlace(newNbrPlace)}
                        value={nbrPlace}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Votre place de parking est-elle assurée ?</Text>
                    <RNPickerSelect
                        items={[
                            {label: 'Selectionnez une valeur', value: ''},
                            { label: 'Oui', value: 'oui' },
                            { label: 'Non', value: 'non' },
                        ]}
                        onValueChange={newAssured => setAssured(newAssured)}
                        value={assured}
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
    submitButton: {}
})

export default CreateAdFirstStep;