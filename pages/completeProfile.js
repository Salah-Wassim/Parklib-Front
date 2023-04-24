import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, TextInput, Button } from "@react-native-material/core";
import { Stack } from "react-native-flex-layout";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import COLOR from "../utils/color.constant";
import { completeProfileAfterSignUp } from "../api/api";

const CompleteProfile = ({ route, navigation }) => {
    const [error, setError] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [address, setAddress] = React.useState("");

    const handleSubmitProfile = async () => {
        if (firstName === "" || lastName === "" || address === "") {
            setError("Merci de remplir tous les champs s'il vous plaît");
        } else {
            setError("");
            await completeProfileAfterSignUp(lastName, firstName, address)
                .then(
                    (res) => {
                        console.log(res);
                        navigation.navigate('VerificationScreen')
                    }             
                )
                .catch( (e) => console.log(e))
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
                    <Text style={styles.error}>{error}</Text>
                    <Button
                        style={styles.submitButton}
                        title="Valider mon profil"
                        color={COLOR.vert}
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
