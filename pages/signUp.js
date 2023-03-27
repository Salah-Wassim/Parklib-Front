import React, { useContext } from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { handleSignUp } from '../store/authentification/auth';
import AuthContext from '../store/authentification/authContext';
import {Text, TextInput, Button} from '@react-native-material/core';
import { Stack, HStack} from 'react-native-flex-layout';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const SignUp = (props) => {

    const { navigation } = props

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [cPassword, onChangeCPassword] = React.useState('');
    const { setAuthenticated } = useContext(AuthContext);

    const onPressLearnMore = ()=>{
        console.log(email,password,cPassword)
    }

    return (
        <Stack m={20} spacing={10}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logoWithoutText.png')}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Inscription</Text>
            </View>
            <HStack style={styles.questionContainer}>
                <Text>Vous avez déjà un compte ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.logInLink}> Se connecter</Text>
                </TouchableOpacity>
            </HStack>
            <View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Email</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder="nom@exemple.com"
                        autoCompleteType="email"
                        variant="outlined"
                        value={email}
                        onChangeText={onChangeEmail}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Mot de passe</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder='Enter votre mot de passe'
                        secureTextEntry={true}
                        variant="outlined"
                        value={password}
                        onChangeText={onChangePassword}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formText}>Confirmez votre mot de passe</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder='Enter votre mot de passe'
                        secureTextEntry={true}
                        textContentType="password"
                        variant="outlined"
                        value={cPassword}
                        onChangeText={onChangeCPassword}
                    />
                </View>
                <View style={styles.submitButtonContainer}>
                    <Button style={styles.submitButton} title="Inscription" onPress={() =>
                         handleSignUp(email, password, cPassword, navigation, onChangeEmail, onChangePassword, onChangeCPassword, setAuthenticated)}  
                         color="#157575"/>
                </View>
            </View>
            <View style={styles.socialMultiBox}>
                <View style={styles.line}></View>
                <View>
                    <Text style={styles.text}>ou s'inscrire avec</Text>
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
    logInLink:{
        color:"#264CE1"
    },
    formContainer:{
        marginTop:0,
        marginBottom:10,
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

export default SignUp;
