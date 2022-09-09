import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Box, Flex, Spacer } from "@react-native-material/core";


const SideBar=(props)=> {
    const { navigation } = props
    return (
        <ScrollView  {...props} style={styles.drawer}>
            <Flex direction="column" style={styles.container}>
                <Flex direction="column">
                    <Flex direction="row" justify="between">
                        <Text style={styles.title}>Park'Lib</Text>
                        <View>
                            <TouchableOpacity onPress={() =>navigation.closeDrawer()}>
                                <Image style={styles.closeImg}  source={require('../assets/close.png')} />
                            </TouchableOpacity>
                        </View>
                    </Flex>
                    <TouchableOpacity style={{marginLeft: 22}}>
                        <Text style={{marginBottom: 22}}>Profil</Text>
                    </TouchableOpacity>
                    <View style={{marginBottom: 22}}>
                        <Flex center>
                            <Image style={styles.profileImg}
                                   source={require('../assets/profil.jpg')}
                            />
                        </Flex>
                    </View>
                <Spacer style={styles.flexBlock}  />
                </Flex>
                <Box style={styles.boxContainer}>
                    <TouchableOpacity style={{marginBottom: 180}}>
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
                    <TouchableOpacity>
                        <Text style={styles.privacyPolicy} onPress={() => {
                            navigation.navigate('PrivacyPolicy')}} >Mentions légales</Text>
                        <Text style={styles.cguV1} onPress={() => {
                            navigation.navigate('CGU')}}>CGU</Text>
                        <Text style={styles.version}>V1.0</Text>
                    </TouchableOpacity>
                </Box>
                <Box style={styles.lastBox}>
                    <TouchableOpacity>
                        <View style={styles.logoutView}>
                            <Text style={styles.logoutBtn}>Déconnecter</Text>
                        </View>
                    </TouchableOpacity>
                </Box>
            </Flex>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    drawer:{
        height: "100%",
        backgroundColor: 'red',
        zIndex: 999
    },
    container:{
        backgroundColor: 'white',
        height: "100%",
        borderColor: "black",
        borderWidth: 2
    },
    title:{
        marginLeft: 22, 
        fontSize: 24, 
        marginBottom: 8, 
        marginTop: 8
    },
    closeImg:{
        height: 24,
        width: 24,
        marginRight: 10,
        marginTop: 11
    },
    profileImg: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        alignItems: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 25,
        marginTop: -10
    },
    flexBlock: {
        borderColor: "black",
        borderBottomWidth: 2,
    },
    boxContainer:{
        borderColor: "black",
        borderBottomWidth: 2,
    },
    labels: {
        marginLeft: 22,
        marginTop: 14,
        fontStyle: "italic",
    },
    marginItems: {
        marginLeft: 22,
        marginTop: 14
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
    },
    lastBox:{
        position: 'absolute',
        bottom:0,
        left: 0,
        right:0
    },
    logoutView: {
        backgroundColor: "#C70000",
        marginBottom: 4
    },
    logoutBtn: {
        textAlign: "center",
        color: "white",
        padding: 10,
    }
});

export default SideBar;
