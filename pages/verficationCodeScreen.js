import {Button, Text, StyleSheet, Keyboard} from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import React, {useEffect, useState} from "react";
import {Flex} from "@react-native-material/core";
import {verifyCode} from "../api/api";

const VerificationCodeScreen = ({route,navigation}) => {

    const { phoneNumber,phone,isValid,data } = route.params;

    const [code, setCode] = useState('');
    const [invalidCode, setInvalidCode] = useState(false);

    return (
        <Flex fill p={16}>
            <Text style={styles.prompt}>Saisissez le code que vous avez réçu</Text>
            <Text style={styles.message}>
                {`Est ce bien votre numero ${phoneNumber}?`}
            </Text>
            <Button
                title="Modifier le numéro de téléphone"
                onPress={() => navigation.replace("Verification")}
            />
            <OTPInputView
                style={{ height: 200}}
                pinCount={4}
                code={code}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeChanged={(code) => {

                    setCode(code);
                    if (code.length === 4) {
                        verifyCode(code,phoneNumber,data._links[0].href).then((res)=>{
                            console.log(res)
                            if (res.status==="SUCCESSFUL"){
                                navigation.navigate('Profile');
                            }else{
                                setInvalidCode(true);
                            }
                        })
                    }
                }}
                onCodeFilled={(code) => {
                    console.log(`Code is ${code}, you are good to go!`);
                }}
            />
            {invalidCode && <Text style={styles.error}>Incorrect code.</Text>}
        </Flex>
    );
}

const styles = StyleSheet.create({

    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    borderStyleBase: {
        width: 50,
        height: 80,
    },

    borderStyleHighLighted: {
        borderColor: "#157575",
    },

    underlineStyleBase: {
        width: 50,
        height: 80,
        borderColor: "#E4CFA9",
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        color: "black",
        fontSize: 20,
    },

    underlineStyleHighLighted: {
        borderColor: "#157575",
    },

    prompt: {
        fontSize: 24,
        paddingHorizontal: 30,
        paddingBottom: 20,
    },

    message: {
        fontSize: 16,
        marginBottom:8,
        paddingHorizontal: 30,
    },

    error: {
        color: "red",
    },
});

export default VerificationCodeScreen;
