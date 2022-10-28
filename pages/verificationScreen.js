import {Flex} from "@react-native-material/core";
import React,{useState,useRef} from 'react';
import PhoneInput from "react-native-phone-number-input";
import {StatusBar, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {verifyPhoneNumber} from "../api/api";

const VerificationScreen = ({navigation}) => {

    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef(null);

    return (
        <Flex fill>
            <StatusBar barStyle="dark-content" />
            <Flex fill center={true} items="center">
                {showMessage && (
                    <View style={styles.message}>
                        <Text>Value : {value}</Text>
                        <Text>Formatted Value : {formattedValue}</Text>
                        <Text>Valid : {valid ? "true" : "false"}</Text>
                    </View>
                )}
                <PhoneInput
                    style={styles.phoneInput}
                    ref={phoneInput}
                    defaultValue={value}
                    defaultCode="FR"
                    layout="first"
                    onChangeText={(text) => {
                        setValue(text);
                    }}
                    onChangeFormattedText={(text) => {
                        setFormattedValue(text);
                    }}
                    withDarkTheme
                    withShadow
                    autoFocus
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        const checkValid = phoneInput.current?.isValidNumber(value);
                        setShowMessage(true);
                        setValid(checkValid ? checkValid : false);
                        if (checkValid){
                            verifyPhoneNumber(formattedValue).then((res)=>{
                                console.log(res);
                                if (res){
                                    navigation.navigate('VerificationCode',
                                        {
                                            phoneNumber: value,
                                            phone:formattedValue,
                                            isValid:valid,
                                            data:res
                                        });}
                            });

                        }
                    }}>
                    <Text style={styles.text}>verifier</Text>
                </TouchableOpacity>

            </Flex>
        </Flex>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: 16,
        borderRadius: 4,
        elevation: 3,
        color: '#fff',
        backgroundColor: '#157575',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    phoneInput: {
        width: '100%',
        alignSelf:'baseline'
    },
});


export default VerificationScreen;
