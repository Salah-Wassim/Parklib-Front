import React from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar,
} from "react-native";
import {
    Text,
    TextInput,
    Button,
} from "@react-native-material/core";
import { Stack } from "react-native-flex-layout";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import COLOR from "../utils/color.constant";
import InputAddressAutocomplete from "../components/inputAddressAutocomplete";

const CompleteProfile = () => {
    const [adr, setAdr] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [zipCode, setZipCode] = React.useState("");
    const [city, setCity] = React.useState("");
    const [error, setError] = React.useState("");

    const onChooseAddress = (respAddress) => {
        setAdr(respAddress.properties.label);
        setAddress(respAddress.properties.name);
        setZipCode(respAddress.properties.postcode);
        setCity(respAddress.properties.city);
    };

    return (
        <ScrollView>
            <Stack m={20} spacing={20} style={styles.completeProfileContainer}>

                <View>
                
                    <View style={styles.formContainer}>
                        <Text style={styles.topScreenText}>
                            Merci pour votre inscription sur Park'Lib ! 
                            Pour valider votre compte, veuillez remplir les informations suivantes vous concernant.
                        </Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Icon name="account-circle" style={styles.formIcon} />
                        <TextInput
                            style={styles.formInput}
                            placeholder="Nom"
                        />
                    </View>

                    <View style={styles.formContainer}>
                        <Icon name="account" style={styles.formIcon} />
                        <TextInput
                            style={styles.formInput}
                            placeholder="Prénom"
                        />
                    </View>

                    <View style={styles.formContainer}>
                        <Icon name="home" style={styles.formIcon} />
                        {/* <InputAddressAutocomplete
                            style={styles.inputAddressAutocomplete}
                            isOpen={false}
                            onChooseAddress={onChooseAddress}
                        /> */}
                        <TextInput
                            style={styles.formInput}
                            placeholder="Adresse"
                        />
                    </View>
                
                
                </View>


                <View style={styles.submitButtonContainer}>
                    <Button
                        style={styles.submitButton}
                        title="Valider mon profil"
                        color={COLOR.vert}
                    ></Button>
                </View>
            </Stack>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    completeProfileContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginBottom: 0,
    },
    topScreenText: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    formContainer: {
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    formInput: {
        borderColor: COLOR.grisclair,
        // backgroundColor: COLOR.blanc,
        width: '90%'
    },
    formIcon: {
        fontSize: 36,
        color: COLOR.noir
    },
    inputAddressAutocomplete: {
        backgroundColor: COLOR.blanc,
        width: '90%'
    },
    submitButtonContainer: {
        margin: 0,
        marginBottom: 10,
        // alignSelf: 'flex-end' 
    },
    submitButton: {
      borderRadius: 15  
    },
    error: {
        color : COLOR.rouge,
        alignSelf: 'center',
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 5,
    },
});

export default CompleteProfile;
