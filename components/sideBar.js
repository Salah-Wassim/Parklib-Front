import React from 'react';
import { StyleSheet, View, Text, Image,ScrollView, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Box, Flex} from "@react-native-material/core";
import {DrawerContentScrollView} from "@react-navigation/drawer";


const SideBar=()=> {
    return (
        <DrawerContentScrollView>
            <Flex fill style={{backgroundColor: '#C4C5C6'}}>
                <Flex>
                    <Text  className="top-title">Park'Lib</Text>
                    <TouchableOpacity style={{marginLeft: 22}}>
                        <Text>Profil</Text>
                    </TouchableOpacity>
                    <View>
                        <Box className="selector-center">
                            <Image style={styles.stretch}
                                   source={require('../assets/profil.jpg')}
                            />
                        </Box>
                    </View>
                </Flex>
                <Box className="div-container">
                    <TouchableOpacity style={{marginBottom: 170}}>
                        <Text style={styles.labels}>Tous les libellés</Text>
                        <Text style={styles.paddingTextSideBar}>Se connecter</Text>
                        <Text style={styles.paddingTextSideBar}>S'inscrire</Text>
                        <Text style={styles.paddingTextSideBar}>Contactez-nous</Text>
                    </TouchableOpacity>
                </Box>
                <Box className="div-container">
                    <TouchableOpacity style={styles.lastContainer}>
                        <Text className="mt-25-mb-40">Mentions légales</Text>
                        <Text style={{marginBottom: 10}}>CGU</Text>
                        <Text style={{marginBottom: "auto"}}>V1.0</Text>
                        <View style={styles.deleteContain}>
                            <Text style={styles.deleteBtn}>Déconnecter</Text>
                        </View>
                    </TouchableOpacity>
                </Box>
            </Flex>
        </DrawerContentScrollView>
    );
};



const styles = StyleSheet.create({
    stretch: {
        width: 160,
        height: 160,
        resizeMode: 'stretch',
        alignItems: "center",
        justifyContent: "center"
    },
    paddingTextSideBar: {
        marginLeft: 22,
        marginTop: 14
    },
    labels: {
        marginLeft: 22,
        marginTop: 14,
        fontStyle: "italic",
    },
    deleteContain: {
        backgroundColor: "#C70000",
        borderRadius: 25,
    },
    deleteBtn: {
        textAlign: "center",
        color: "white",
        padding: 10,
    },
    lastContainer: {
        textAlign: "center",
        height: hp('29%')

    }
});

export default SideBar;
