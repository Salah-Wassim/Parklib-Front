import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, TextInput, Button } from '@react-native-material/core';
import { Stack, HStack } from 'react-native-flex-layout';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';


// maps dispatch to props for updating the token in the store
const mapDispatchToProps = (dispatch) => ({
    setToken: (token) => dispatch({
        type: 'SET_TOKEN',
        token
    }),
});

const SignIn = ({ setToken, navigation }) => {
        const [email, setEmail] = React.useState('');
        const [password, setPassword] = React.useState('');

        const handleSubmit = async () => {
            try {
                const response = await fetch('http://172.26.224.1:3000/auth', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        email,
                        password
                    }),
                });

                const json = await response.json();
                const token = json.data.accessToken;
                if (token) {
                    //store
                    await AsyncStorage.setItem('token', token);
                    setToken({
                        type: 'SET_TOKEN',
                        token
                    });
                    navigation.navigate('DrawerNav');
                }
            } catch (error) {
                console.error(error);
            }
        };
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
                        variant="outlined"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.pwdContainer}>
                        <Text style={styles.pwdText}>Mot de passe</Text>
                        <TouchableOpacity style={styles.forgotPwContainer} onPress={() => navigation.navigate('Verification')}>
                            <Text style={styles.forgotPwdLink}>Mot de passe oublié ?</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.formInput}
                        placeholder='Entrer votre mot de passe'
                        secureTextEntry={true}
                        variant="outlined"
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <View style={styles.submitButtonContainer}>
                    <TouchableOpacity>
                        <Button style={styles.submitButton} onPress={ handleSubmit } title="Connexion" color="#157575"/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.socialMultiBox}>
                <View style={styles.line}></View>
                <View>
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

export default connect(null, mapDispatchToProps)(SignIn);