import React, { useContext } from 'react';
import { handleLogout } from '../store/authentification/auth';
import AuthContext from '../store/authentification/authContext';
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Box, Flex, Spacer } from "@react-native-material/core";


const SideBar=(props)=> {
    const { navigation } = props
    const { setAuthenticated, isAuthenticated } = useContext(AuthContext);
    return (
        <Flex {...props} h={"100%"} pt={37} style={styles.drawer}>
            <Flex direction="column" style={styles.container}>
                <Flex direction="column">
                    <Flex direction="row" justify="between" style={styles.flexBlock}>
                    <Flex center>
                            <Image style={styles.logo}
                                   source={require('../assets/logoWithoutTextSideBar.png')}
                            />
                        </Flex>
                        <View style={styles.close}>
                            <TouchableOpacity onPress={() =>navigation.closeDrawer()}>
                                <Image style={styles.closeImg}  source={require('../assets/close.png')} />
                            </TouchableOpacity>
                        </View>
                    </Flex>
                    <TouchableOpacity style={{marginLeft: 22, marginTop:11}}>
                        <Text style={{marginBottom: 22, color:"#575DFB"}}>Profil</Text>
                    </TouchableOpacity>
                    <Box mb={12}>
                        <Flex center>
                            <Image style={styles.profileImg}
                                   source={require('../assets/profil.jpg')}
                            />
                        </Flex>
                    </Box>
                <Spacer style={styles.flexBlock}  />
                </Flex>
                <Flex fill style={styles.boxContainer}>
                    <Box>
                        <View>
                            <Text style={styles.labels}>Tous les libellés</Text>
                            {isAuthenticated && 
                                <TouchableOpacity onPress={() => { navigation.navigate('Profile')}}>
                                    <Text style={styles.marginItems}>Profil</Text>
                                </TouchableOpacity>
                            }
                            {!isAuthenticated && 
                            // React Fragment. This is used to group multiple elements together without adding an extra node to the DOM.
                            // It's like a lightweight version of a <div> or other block element, but it doesn't actually render anything itself.
                            // It's useful when you need to return multiple elements from a component.
                                <>
                                    <TouchableOpacity onPress={() => { navigation.navigate('SignUp')}}>
                                        <Text style={styles.marginItems}>S'inscrire</Text>
                                    </TouchableOpacity>
                                </>
                            }
                            <TouchableOpacity onPress={() => { navigation.navigate('Contact')}}>
                                <Text style={styles.marginItems}>Contactez-nous</Text>
                            </TouchableOpacity>
                        </View>
                    </Box>
                </Flex>
                <Flex>
                    <TouchableOpacity>
                        <Text style={styles.privacyPolicy} onPress={() => {
                            navigation.navigate('PrivacyPolicy')}} >Mentions légales</Text>
                        <Text style={styles.cguV1} onPress={() => {
                            navigation.navigate('CGU')}}>CGU</Text>
                    </TouchableOpacity>
                    <Text style={styles.version}>V1.0</Text>
                    {isAuthenticated ? (
                        <TouchableOpacity onPress={() => handleLogout(setAuthenticated)}>
                            <View style={styles.logoutView}>
                                <Text style={styles.logoutBtn}>Déconnexion</Text>
                            </View>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <View style={{...styles.logoutView, backgroundColor: 'green'}}>
                                <Text style={styles.logoutBtn}>Se connecter</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
};

const styles = StyleSheet.create({
    close:{
        position: 'absolute',
        right: 10,
        bottom: 13
    },
    logo:{
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 22,
    },
    drawer:{
        zIndex: 999
    },
    container:{
        backgroundColor: 'white',
        height: "100%",
        borderColor: "#f1f1f1",
        borderWidth: 2
    },
    closeImg:{
        height: 12,
        width: 12
    },
    profileImg: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#f1f1f1",
        borderRadius: 150,
        marginTop: -10
    },
    flexBlock: {
        borderColor: "#f1f1f1",
        borderBottomWidth: 2,
    },
    boxContainer:{
        borderColor: "#f1f1f1",
        borderBottomWidth: 2,
    },
    labels: {
        marginLeft: 22,
        marginTop: 14,
        fontStyle: "italic",
        color:"#575DFB",
    },
    marginItems: {
        marginLeft: 22,
        marginTop: 14,
        fontWeight:'normal'
    },
    privacyPolicy:{
        color:"black",
        textAlign: 'center',
        marginTop:15,
        marginBottom:15,
        textDecorationLine: 'underline',
        fontSize: 18,
        fontWeight:'bold'
    },
    cguV1:{
        color:"#575DFB",
        textAlign: 'center',
        marginTop:10,
    },
    version:{
        color:"#575DFB",
        textAlign: 'center',
        marginTop:10,
        marginBottom:24,
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
