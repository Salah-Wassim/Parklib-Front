import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import {Box, Flex, Spacer} from "@react-native-material/core";
import {DrawerContentScrollView} from "@react-navigation/drawer";
//DrawerItemList
import { Dimensions } from 'react-native';


const winHeight = Dimensions.get('window').height;

const SideBar=(props)=> {
    const {navigation} =props

    return (
        <DrawerContentScrollView  {...props} style={styles.drawer}>
            <Flex direction="column" style={styles.section}>
                <Flex direction="column">
                    <Flex direction="row" justify="between">
                        <Text styles={{marginLeft: 22}}>Park'Lib</Text>
                        <View>
                            <TouchableOpacity onPress={() =>navigation.closeDrawer()}>
                                <Image style={styles.close}  source={require('../assets/close.png')} />
                            </TouchableOpacity>
                        </View>
                    </Flex>

                    <TouchableOpacity style={{marginLeft: 22}}>
                        <Text onPress={() => console.log("text")}>Profil</Text>
                    </TouchableOpacity>

                    <View>
                        <Flex center>
                            <Image style={styles.imgProfile}
                                   source={require('../assets/profil.jpg')}
                            />
                        </Flex>
                    </View>
                </Flex>
                <Spacer />
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
                <Spacer />
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
        height: "100%",
        backgroundColor: 'red',
        //height: winHeight * 1, // 20%
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
