import React from "react";
import {View, StyleSheet,Image} from 'react-native';
import {ActivityIndicator } from "@react-native-material/core";
import { Stack} from 'react-native-flex-layout';

import SignIn from "./signIn";

const LandingPage = ({navigation}) => {

    const displaySignInPage = () => {
        navigation.navigate(SignIn);
    }

    setTimeout(displaySignInPage, 4000)

    return (
        <Stack m={20} spacing={20} style={styles.landingPageContainer} >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logoWithText.png')}
                />
            </View>
            <View style={styles.spinnerContainer}>
                <ActivityIndicator style={styles.spinner} size="small" color="#264CE1" />
            </View>
        </Stack>
    )
}

const styles = StyleSheet.create({
    landingPageContainer:{
        height:'100%',
        justifyContent:'center'
    },  
    logoContainer:{
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
        height:118,
        width:318.4
    },
})

export default LandingPage;