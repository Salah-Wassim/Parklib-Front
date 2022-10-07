import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Box, Flex, Spacer } from "@react-native-material/core";


const SideBar=(props)=> {
    const { navigation } = props
    return (
        <Flex  {...props} style={styles.drawer}>
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
                    <View style={{marginBottom: 22}}>
                        <Flex center>
                            <Image style={styles.profileImg}
                                   source={require('../assets/profil.jpg')}
                            />
                        </Flex>
                    </View>
                <Spacer style={styles.flexBlock}  />
                </Flex>
                <Flex fill style={styles.boxContainer}>
                <Box>
                    <TouchableOpacity style={{}}>
                        <Text style={styles.labels}>Tous les libellés</Text>
                        <Text style={styles.marginItems} onPress={() => {
                            navigation.navigate('SignIn')}}>Se connecter</Text>
                        <Text style={styles.marginItems} onPress={() => {
                            navigation.navigate('SignUp')}}>S'inscrire</Text>
                        <Text style={styles.marginItems} onPress={() => {
                            navigation.navigate('Contact')}}>Contactez-nous</Text>
                    </TouchableOpacity>
                </Box>
                </Flex>
                    <Flex>
                    <TouchableOpacity>
                        <Text style={styles.privacyPolicy} onPress={() => {
                            navigation.navigate('PrivacyPolicy')}} >Mentions légales</Text>
                        <Text style={styles.cguV1} onPress={() => {
                            navigation.navigate('CGU')}}>CGU</Text>
                        <Text style={styles.version}>V1.0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.logoutView}>
                            <Text style={styles.logoutBtn}>Déconnecter</Text>
                        </View>
                    </TouchableOpacity>
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
        height: "100%",
        zIndex: 999
    },
    container:{
        backgroundColor: 'white',
        height: "100%",
        borderColor: "#f1f1f1",
        borderWidth: 2
    },
    title:{
        marginLeft: 22, 
        fontSize: 24, 
        marginBottom: 8, 
        marginTop: 8
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
