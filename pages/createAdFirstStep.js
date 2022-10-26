import React from "react";
import {View , StyleSheet , TouchableOpacity} from "react-native";
import {Text, TextInput, Button} from '@react-native-material/core';
import { Stack} from 'react-native-flex-layout';
import RNPickerSelect from 'react-native-picker-select';

const createAdFirstStep = ({navigation}) => {

    const [adr, setAdr] = React.useState('');
    const [prix, setPrix] = React.useState(null);
    const [typePlace, setTypePlace] = React.useState('');
    const [nbrPlace, setNbrPlace] = React.useState(null);
    const [error, setError] = React.useState('');

    const handleSubmit = () => {
        if(adr === '' || prix == null || typePlace === '' || nbrPlace === null){
            setError('Merci de remplir tous les champs s\'il vous plaît')
        }
        else{
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
                        onValueChange={(value) => console.log(value)}
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
                            { label: 'Oui', value: 'oui' },
                            { label: 'Non', value: 'non' },
                        ]}
                        onValueChange={(value) => console.log(value)}
                    />
                </View>
            </View>
            <View style={styles.submitButtonContainer} onpress={() => handleSubmit()}>
                <Button style={styles.submitButton} title="Continuer" color="#157575"/>
                <Text style={styles.error}>{error}</Text>
            </View>
        </Stack>
    )
}
const styles = StyleSheet.create({
    createAdFirstStepContainer: {},
    error:{
        color:'red',
        alignSelf:'center',
    }
})

export default createAdFirstStep;