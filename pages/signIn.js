import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Text, TextInput, Button} from '@react-native-material/core';
import { Stack, HStack} from 'react-native-flex-layout';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const SignIn = ({navigation}) => {

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <Stack m={20} spacing={20}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logoWithoutText.png')}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Connexion</Text>
            </View>
            <HStack style={styles.questionContainer}>
                <Text>Vous n'avez pas de compte ? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.singUpLink}>S'inscrire</Text>
                </TouchableOpacity>
            </HStack>
            <View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Email</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder='nom@exemple.com'
                        autoCorrect={true}
                        autoCompleteType='email'
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        variant="outlined"
                        onChangeText={onChangeEmail}
                    />
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.pwdContainer}>
                        <Text style={styles.pwdText}>Mot de passe</Text>
                        <TouchableOpacity style={styles.forgotPwContainer} onPress={() => navigation.navigate('ResetPassword')}>
                            <Text style={styles.forgotPwdLink}>Mot de passe oublié ?</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.formInput}
                        placeholder='Entrer votre mot de passe'
                        secureTextEntry={true}
                        textContentType="password"
                        variant="outlined"
                        keyboardType="default"
                        onChangeText={onChangePassword}
                    />
                </View>
                <View style={styles.submitButtonContainer}>
                    <Button style={styles.submitButton} title="Connexion" color="#157575"/>
                </View>
            </View>
            <View style={styles.socialMultiBox}>
                <View style={styles.line}></View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>ou se connecter avec</Text>
                </View>
                <View style={styles.line}></View>
            </View>
            <View style={styles.socialButtonsContainer}>
                <View style={styles.socialButtonContainer}>
                    <Button
                        style={styles.socialButton}
                        trailing={<Icon style={styles.iconSocialButton} name="gmail"/>}
                    />
                </View>
                <View style={styles.socialButtonContainer}>
                    <Button
                        style={styles.socialButton}
                        trailing={<Icon style={styles.iconSocialButton} name="facebook"/>}
                    />
                </View>
            </View>
        </Stack>
    )
}

const styles = StyleSheet.create({
    logoContainer:{
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
        height:100,
        width:318.4
    },
    titleContainer:{
        textAlign:'center',
        alignItems:'center'
    },
    titleText:{
        fontSize:30,
        fontWeight:'bold',
    },
    questionContainer:{
        justifyContent:'center',
        marginBottom:0
    },
    singUpLink:{
        color:'#264CE1'
    },
    formContainer:{
        marginTop:0,
        marginBottom:10,
    },
    pwdContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    pwdText: {
        fontWeight:'bold',
    },
    forgotPwdLink:{
        fontWeight:'bold',
    },
    formText:{
        fontWeight:'bold',
        marginBottom:10
    }, 
    submitButtonContainer:{
        marginTop:20,
    },
    socialMultiBox:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    line:{
        flex:1,
        height:1,
        backgroundColor: "#808080"
    },
    text:{
        textTransform:'uppercase',
        fontWeight:'bold',
        color: "#808080"
    },
    socialButtonsContainer: {
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:0
    },
    socialButtonContainer:{
        width:85,
        marginHorizontal:15,
    },
    socialButton:{
        backgroundColor:'#F5F5F5',
    },
    iconSocialButton:{
        fontSize:25
    }
})

export default SignIn