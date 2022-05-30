import React from "react";
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Text, Button} from '@react-native-material/core';
import { Stack} from 'react-native-flex-layout';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Parameters = ({navigation}) => {

    return (
        <Stack m={20} spacing={20} style={styles.parametersContainer}>
            <View>
                <View style={styles.buttonContainer}>
                    <Icon style={styles.logoButton} name="account"></Icon>
                    <TouchableOpacity style={styles.buttonContent}>
                        <Text style={styles.buttonText}>Mon profil</Text>
                        <Icon style={styles.iconArrow} name="arrow-right-thick"></Icon>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <Icon style={styles.logoButton} name="credit-card"></Icon>
                    <TouchableOpacity style={styles.buttonContent}>
                        <Text style={styles.buttonText}>Mes moyens de paiements</Text>
                        <Icon style={styles.iconArrow} name="arrow-right-thick"></Icon>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <Icon style={styles.logoButton} name="comment-question"></Icon>
                    <TouchableOpacity style={styles.buttonContent} onPress={() => navigation.navigate('Contact')}>
                        <Text style={styles.buttonText}>Contact</Text>
                        <Icon style={styles.iconArrow} name="arrow-right-thick"></Icon>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.logoutButtonContainer}>
                <Button
                    style={styles.logoutButton}
                    variant="outlined"
                    title="Me déconnecter"
                />
            </View>
        </Stack>
    )
}

const styles = StyleSheet.create({
    parametersContainer:{
        height:'100%',
        justifyContent:'space-between'
    },
    buttonContainer: {
        borderColor: '#0000',
        flexDirection:"row",
        alignItems:'center',
        borderColor:'#707070',
        borderWidth:1,
        padding:8,
        marginBottom:15,
    },
    logoButton:{
        marginRight:5,
        fontSize:20,
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
        marginRight:19,
        fontSize:20,
    },
    logoutButtonContainer:{
        padding:10
    },
    logoutButton:{}
})

export default Parameters;