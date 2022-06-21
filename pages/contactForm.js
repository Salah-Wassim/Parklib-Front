import React from "react";
import {View, StyleSheet} from 'react-native';
import {Text, TextInput, Button} from '@react-native-material/core';
import { Stack} from 'react-native-flex-layout';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const ContactForm = () => {
    return (
        <Stack m={20} spacing={40} style={styles.contactFormContainer}>
            <View>
                <View style={styles.logoContainer}>
                    <Icon style={styles.logoInformation} name="information"></Icon>
                    <Text style={styles.textInformation}>Veuillez compléter les détails ci-dessous afin de nous aider à améliorer Park'Lib</Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.formContainer}>
                        <TextInput
                            trailing={<Icon style={styles.iconNameInput} name="account"/>}
                            style={styles.formInput}
                            placeholder='Votre nom'
                            autoCorrect={true}
                            autoCapitalize='none'
                            variant="outlined"
                        ></TextInput>
                    </View>
                    <View style={styles.formContainer}>
                        <TextInput
                            trailing={<Icon style={styles.iconNameInput} name="at" />}
                            style={styles.formInput}
                            placeholder='Votre adresse mail'
                            autoCorrect={true}
                            autoCapitalize='none'
                            autoCompleteType='email'
                            keyboardType='email-adress'
                            textContentType='emailAdress'
                            variant="outlined"
                        ></TextInput>
                    </View>
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.formInput}
                            placeholder='Sujet'
                            autoCorrect={true}
                            autoCapitalize='none'
                            variant="outlined"
                        ></TextInput>
                    </View>
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.formInput}
                            placeholder='Description'
                            autoCorrect={true}
                            autoCapitalize='none'
                            variant="outlined"
                        ></TextInput>
                    </View>
                </View>
            </View>
            <View style={styles.submitButtonContainer}>
                <Button style={styles.submitButton} title="Envoyez" color="#157575"></Button>
            </View>
        </Stack>
    )
}

const styles = StyleSheet.create({
    contactFormContainer:{
        height:'95%',
        justifyContent:'space-between'
    },
    logoContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:40,
    },
    logoInformation:{
        fontSize:25,
        padding:4
    },
    iconNameInput:{
        fontSize:25,
    },
    form:{
        justifyContent:'space-between'
    },
    formContainer:{
        marginBottom:10
    },
    submitButtonContainer:{
        padding:10
    }

})

export default ContactForm;