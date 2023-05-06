import React, {useState, useEffect} from "react";
import { ActivityIndicator, View, StyleSheet, ScrollView } from "react-native";
import { Text, TextInput, Button } from "@react-native-material/core";
import { Stack } from "react-native-flex-layout";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import COLOR from "../utils/color.constant";
import { completeProfileAfterSignUp } from "../api/api";
import jwtDecode from "jwt-decode";
import { getAuthToken } from '../store/authentification/auth'


const CompleteProfile = ({ route, navigation }) => {
    const [error, setError] = React.useState("");
    const [disableButton, setDisableButton] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [token, setToken] = React.useState()
    const [userId, setUserId] = React.useState(null);

    useEffect(() => {
        try{
            const fetchToken = async () => {
                const authToken = await getAuthToken();
                console.log('authtoken', authToken);
                if(authToken){
                    setToken(authToken)
                    const decodeToken = jwtDecode(authToken);
                    if(decodeToken && decodeToken.id){
                        setUserId(decodeToken.id)
                    }
                    else{
                        console.log('Impossible de récupérer l\'identifiant utilisateur')
                    }
                }
                else{
                    console.log("Impossible de récupérer le token")
                }
            }
            fetchToken();
        }
        catch(error){
            console.log("fetchToken error" , error)
        }
    }, []);

    const handleSubmitProfile = async () => {
        setError("");
        setDisableButton(true);
        setIsLoading(true);
        if (firstName === "" || lastName === "" || address === "") {
            setError("Merci de remplir tous les champs s'il vous plaît");
            setIsLoading(false);
            setDisableButton(false);

        } else {
            await completeProfileAfterSignUp(lastName, firstName, address, userId, token)
                .then(
                    (res) => {
                        console.log(res);
                        // navigation.navigate('Verification')
                        setIsLoading(false);
                        setDisableButton(false);
                        navigation.navigate('DrawerNav')
                    }             
                )
                .catch((e) => {
                    console.log(e);
                    setDisableButton(false);
                    setIsLoading(false);
                    setError("Une erreur est survenue lors de l'enregistrement de votre profil.");
                })
                ;
        }
    };

    return (
        <ScrollView>
            <Stack spacing={20} style={styles.completeProfileContainer}>
                <View>
                    <View style={styles.formContainer}>
                        <Text style={styles.topScreenText}>
                            Merci pour votre inscription sur Park'Lib ! Pour
                            valider votre compte, veuillez remplir les
                            informations suivantes vous concernant.
                        </Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Icon name="account-circle" style={styles.formIcon} />
                        <TextInput
                            style={styles.formInput}
                            placeholder="Votre Nom"
                            onChangeText={(text) => {
                                setLastName(text);
                            }}
                        />
                    </View>

                    <View style={styles.formContainer}>
                        <Icon name="account" style={styles.formIcon} />
                        <TextInput
                            style={styles.formInput}
                            placeholder="Votre Prénom"
                            onChangeText={(text) => {
                                setFirstName(text);
                            }}
                        />
                    </View>

                    <View style={styles.formContainer}>
                        <Icon name="home" style={styles.formIcon} />
                        <TextInput
                            style={styles.formInput}
                            placeholder="Votre Adresse complète"
                            onChangeText={(text) => {
                                setAddress(text);
                            }}
                        />
                    </View>
                </View>

                <View style={styles.submitButtonContainer}>
                    { isLoading ?
                        (
                            <ActivityIndicator  size="large" color="#575DFB"  />
                            )
                            :
                            (
                            null
                        )
                    }
                    <Text style={styles.error}>{error}</Text>
                    <Button
                        style={styles.submitButton}
                        title="Valider mon profil"
                        color={COLOR.vert}
                        disabled ={(disableButton)}
                        onPress={handleSubmitProfile}
                    ></Button>

                </View>
            </Stack>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    completeProfileContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        paddingBottom: 0,
        paddingTop: 60,
        paddingHorizontal: 20,
        height: "100%",
        // backgroundColor: COLOR.belge
    },
    topScreenText: {
        fontWeight: "bold",
        marginBottom: 10,
    },
    formContainer: {
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    formInput: {
        borderColor: COLOR.grisclair,
        // backgroundColor: COLOR.blanc,
        width: "85%",
    },
    formIcon: {
        fontSize: 36,
        color: COLOR.vert,
    },
    submitButtonContainer: {
        margin: 0,
        marginBottom: 10,
        marginTop: 10,
        alignContent: "flex-end",
    },
    submitButton: {
        borderRadius: 15,
    },
    error: {
        color: COLOR.rouge,
        alignSelf: "center",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 5,
    },
});

export default CompleteProfile;