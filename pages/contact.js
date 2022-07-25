import React from "react";
import {View, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import {Text} from '@react-native-material/core';
import { Stack} from 'react-native-flex-layout';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Contact = ({navigation}) => {
    return (
        <View>
            <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
            <Stack m={20} spacing={20} style={styles.parametersContainer}>
                <View>
                    <Text style={styles.titleSection}>À propos</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonContent}>
                            <Text style={styles.buttonText}>Qui sommes-nous</Text>
                            <Icon style={styles.iconArrow} name="arrow-right-thick"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.titleSection}>Mentions légale</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonContent}>
                            <Text style={styles.buttonText}>Conditions générales d'utilisation</Text>
                            <Icon style={styles.iconArrow} name="arrow-right-thick"/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonContent}>
                            <Text style={styles.buttonText}>Politique de confidentialité</Text>
                            <Icon style={styles.iconArrow} name="arrow-right-thick"/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonContent}>
                            <Text style={styles.buttonText}>Chartre de bonne conduite</Text>
                            <Icon style={styles.iconArrow} name="arrow-right-thick"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.titleSection}>Contact</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonContent} onPress={() => navigation.navigate('ContactForm')}>
                            <Text style={styles.buttonText}>Contactez nous</Text>
                            <Icon style={styles.iconArrow} name="arrow-right-thick"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </Stack>
        </View>
    )
}

const styles = StyleSheet.create({
    titleSection:{
        fontWeight:'500',
        marginBottom:5,
    },
    buttonContainer: {
        flexDirection:"row",
        alignItems:'center',
        borderColor:'#707070',
        borderWidth:1,
        padding:8,
        marginBottom:15,
    },
    buttonContent:{
        width:'100%',
        flexDirection: "row",
        justifyContent:'space-between',
        alignItems:'center'
    },
    buttonText:{
        color:'#A2A2A2'
    },
    iconArrow:{
        fontSize:20,
    },
    logoutButton:{

    }
})

export default Contact;