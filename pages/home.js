import React, {useState} from "react";
import {StyleSheet, View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {TextInput,Stack, Button, Flex} from "@react-native-material/core";
import InputAddressAutocomplete from "../components/inputAddressAutocomplete";

export default function Home({navigation}) {

    const [SearchText, onSearchText] = React.useState('st_park_p');

    const [adrHome, setAdrHome] = useState('');
    const [latitudeHome, setLatitudeHome] = useState(44.837789);
    const [longitudeHome, setLongitudeHome] = useState(-0.57918);
    const [zoomHome, setZoomHome] = useState(0.3);
    const [searchInputHome, setSearchInputHome] = useState(false);

    const onChooseAddress = (respAddress) => {
        setAdrHome(respAddress.properties.label);
        setLatitudeHome(respAddress.geometry.coordinates[1]);
        setLongitudeHome(respAddress.geometry.coordinates[0]);
        setZoomHome(0.02);
        setSearchInputHome(true);
    }

    return (
        <View style={styles.container} id="outer-container">
            <StatusBar barStyle="light-content" backgroundColor="#E4CFA9" />
            <Stack style={styles.container}>
                <View style={styles.containerView}>
                    <Text style={styles.textPrimary}>Bienvenue sur Park'Lib !</Text>
                    <Text style={styles.textSecondary}>Vous recherchez un parking proche de 
votre destination ? </Text>
                    <TouchableOpacity style={styles.destinationBtn}>
                        <Flex fill>
                            <View style={[styles.formContainer, {zIndex: 4}]}>
                                <InputAddressAutocomplete
                                    style={styles.inputAddressAutocomplete}
                                    isOpen={false}
                                    onChooseAddress={onChooseAddress}
                                />
                            </View>
                            <Button
                                style={[styles.btnSearch]} 
                                title="Rechercher"
                                color="#157575"
                                onPress={() => {
                                    navigation.navigate('Map', {
                                        text : SearchText,
                                        adrHome : adrHome,
                                        latitudeHome : latitudeHome,
                                        longitudeHome : longitudeHome,
                                        zoomHome : zoomHome,
                                        searchInputHome : searchInputHome
                                    })
                                }}
                            />
                        </Flex>
                    </TouchableOpacity>
                    <Text style={styles.ou}>Ou</Text>
                    <Button 
                        style={[styles.btn]} 
                        title="Acceder directement à la carte" 
                        onPress={() => {
                            navigation.navigate('Map', {
                                text : SearchText
                            })
                        }
                    }/>
                </View>
            </Stack>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:'column',
        justifyContent: 'center'
    },
    containerView: {
        paddingLeft: 40,
        paddingRight: 40
    },
    destinationBtn: {
        alignItems: 'center',
        flexDirection:'row',
        borderRadius: 20,
    },
    textPrimary: {
        marginTop: 5,
        fontSize: 20,
        fontWeight:'bold'
    },
    textSecondary: {
        marginTop: 5,
        fontSize: 16,
        marginBottom: 15,
        fontWeight:'400'
    },
    btn: {
        marginTop:25,
        backgroundColor:'#157575'
    },
    ou: {
        marginTop:25,
        textAlign: "center",
        fontWeight: 'bold'
    }
});
 