import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import {Box, Flex} from "@react-native-material/core";
import {DrawerContentScrollView, DrawerActions} from "@react-navigation/drawer";
//DrawerItemList
import { Dimensions } from 'react-native';


const winHeight = Dimensions.get('window').height;

const SideBar=({props})=> {
    return (
        <DrawerContentScrollView  {...props} style={styles.drawer}> 
            <Flex fill style={styles.section}>
                <Flex style={styles.flexContainer}>
                    <Text style={styles.topTitle}>Park'Lib</Text>
                        <View style={styles.closeView}>
                        <Image style={styles.close} label="Close drawer"
                        onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
                        source={require('../assets/close.png')}/>
                        </View>
                    <TouchableOpacity style={{marginLeft: 22}}>
                    <Text onPress={() => { navigation.navigate('Profile') }}>Profil</Text>
                    </TouchableOpacity>
                    <View>
                        <Box style={styles.boxImg}>
                            <Image style={styles.imgProfile}
                                   source={require('../assets/profil.jpg')}
                            />
                        </Box>
                    </View>
                </Flex>
                <Box style={styles.boxContainer}>
                    <TouchableOpacity style={{marginBottom: 130}}>
                        <Text style={styles.labels}>Tous les libellés</Text>
                        <Text style={styles.marginItems} onPress={() => {
                              navigation.navigate('SignIn')}}>Se connecter</Text>
                        <Text style={styles.marginItems} onPress={() => {
                              navigation.navigate('SignUp')}}>S'inscrire</Text>
                        <Text style={styles.marginItems} onPress={() => {
                              navigation.navigate('Contact')}}>Contactez-nous</Text>
                    </TouchableOpacity>
                </Box>
                <Box>
                    <TouchableOpacity style={styles.lastContainer}>
                        <Text style={styles.privacyPolicy} onPress={() => {
                                navigation.navigate('PrivacyPolicy')}} >Mentions légales</Text>
                        <Text style={styles.cguV1} onPress={() => {
                                navigation.navigate('CGU')}}>CGU</Text>
                        <Text style={styles.version}>V1.0</Text>
                        <View style={styles.logoutView}>
                            <Text style={styles.logoutBtn}>Déconnecter</Text>
                        </View>
                    </TouchableOpacity>
                </Box>
            </Flex>
        </DrawerContentScrollView>
    );
};



const styles = StyleSheet.create({
    section:{
        backgroundColor: 'white'
    },
    drawer:{
        // height: hp('50%'),
        backgroundColor: 'white',
        height: winHeight * 1, // 20%
    },
    flexContainer:{
        // height: hp('32%'),
        borderColor: "black",
        borderWidth: 2
    },
    imgProfile: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        alignItems: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        marginTop: -10
    },
    boxContainer:{
        // height: hp('35%'),
        borderColor: "black",
        borderWidth: 2,
        borderBottomColor: 'black',
        borderTopWidth: 0,
    },
    topTitle:{
        fontSize: 30,
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 22
    },
    closeView:{

    },
    close:{
        position: 'absolute',
        top: -51,
        right: 10,
        display: 'flex',
        height: 24,
        width: 24,

    },
    marginItems: {
        marginLeft: 22,
        marginTop: 14
    },
    labels: {
        marginLeft: 22,
        marginTop: 14,
        fontStyle: "italic",
    },
    logoutView: {
        backgroundColor: "#C70000",

        marginBottom: 4
    },
    logoutBtn: {
        textAlign: "center",
        color: "white",
        padding: 10,
    },
    lastContainer: {
        borderWidth: 2,
        borderBottomColor: 'black',
        borderTopWidth: 0,
    },
    boxImg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14
    },
    privacyPolicy:{
        textAlign: 'center',
        marginTop:15,
        marginBottom:15,
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 18
    },
    cguV1:{
        textAlign: 'center',
        marginTop:10,
    },
    version:{
        textAlign: 'center',
        marginTop:10,
        marginBottom:24,
    }
});

export default SideBar;
