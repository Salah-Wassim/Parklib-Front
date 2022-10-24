import React from "react";
import {View, StyleSheet} from "react-native";
import {Text, TextInput, Button} from '@react-native-material/core';
import { Stack} from 'react-native-flex-layout';
import RNPickerSelect from 'react-native-picker-select';

const createAdSecondSteps = ({navigation}) => {
    return (
        <Stack m={20} spacing={40} style={styles.createAdSecondStepsContainer}>
            <View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Titre de votre annonce</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder='ex : Ma super annonce '
                        variant="outlined"
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Description</Text>
                    <TextInput
                        style={styles.formInput}
                        variant="outlined"
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Contact</Text>
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Téléphone', value: 'telephone' },
                            { label: 'Email', value: 'email' },
                        ]}
                    />
                </View>
            </View>
            <View style={styles.submitButtonContainer} onpress={() => navigation.navigate('CreateAdThirdSteps')}>
                <Button style={styles.submitButton} title="Dernière étape" color="#157575"/>
            </View>
        </Stack>
    )
}

const styles = StyleSheet.create({
    createAdSecondStepsContainer: {}
})

export default createAdSecondSteps;