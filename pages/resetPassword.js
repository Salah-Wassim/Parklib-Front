import React from "react";
import {View, StyleSheet} from 'react-native';
import {Text, TextInput, Button} from '@react-native-material/core';
import { Stack} from 'react-native-flex-layout';

const ResetPassword = () => {
    return (
        <Stack m={20} spacing={20} style={styles.resetPwdContainer}>
            <View style={styles.form}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Reinitialisez le mot de passe</Text>
                </View>
                <View>
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.formInput}
                            placeholder='Enter votre nouveau mot de passe'
                            secureTextEntry={true}
                            textContentType='password'
                            variant="outlined"
                        ></TextInput>
                    </View>
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.formInput}
                            placeholder='Confirmez votre nouveau mot de passe'
                            secureTextEntry={true}
                            textContentType='password'
                            variant="outlined"
                        ></TextInput>
                    </View>
                </View>
            </View>
            <View>
                <Button title="Réinitialiser" color="#157575"></Button>
            </View>
        </Stack>
    )
}

const styles = StyleSheet.create({
    resetPwdContainer:{
        height:'100%',
        justifyContent:'flex-start'
    },
    titleContainer: {
        justifyContent:'center',
        alignItems:'center',
        marginBottom:55
    },
    title:{
        fontSize:20,
        fontWeight:'600',
        color:'#575DFB'
    },
})

export default ResetPassword;