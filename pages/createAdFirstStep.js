import React from "react";
import {View , StyleSheet , TouchableOpacity} from "react-native";
import {Text, TextInput, Button} from '@react-native-material/core';
import { Stack} from 'react-native-flex-layout';
import RNPickerSelect from 'react-native-picker-select';

const createAdFirstStep = ({navigation}) => {
    return (
        <Stack m={20} spacing={40} style={styles.createAdFirstStepContainer}>
            <View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Adresse complète de votre bien</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder='Adresse postale'
                        variant="outlined"
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Loyer mensuel</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder='ex : 1000'
                        variant="outlined"
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Type de place</Text>
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Parking privé (sous-sol)', value: 'sous-sol' },
                            { label: 'Parking privé (aerien)', value: 'aerien' },
                        ]}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Nombre de place</Text>
                    <TextInput
                        style={styles.formInput}
                        variant="outlined"
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Votre place de parking est-elle assurée ?</Text>
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Oui', value: 'oui' },
                            { label: 'Non', value: 'non' },
                        ]}
                    />
                </View>
            </View>
            <View style={styles.submitButtonContainer} onpress={() => navigation.navigate('CreateAdSecondtSteps')}>
                <Button style={styles.submitButton} title="Continuer" color="#157575"/>
            </View>
        </Stack>
    )
}
const styles = StyleSheet.create({
    createAdFirstStepContainer: {

    }
})

export default createAdFirstStep;