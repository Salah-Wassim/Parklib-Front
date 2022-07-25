import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TextInput, Button,Flex,Spacer,Box} from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Profile = ()=>{
    return (
    <Flex fill>
        <Box  style={{margin:16}}>
            <Flex direction='row' center style={{marginBottom:8}}>
                <Icon name="account" size={36} color="black"/>
                <TextInput
                    style={{width:'90%',marginLeft: 8}}
                    placeholder='prénom'/>
            </Flex>

            <TextInput 
                style={{width:'90%',marginLeft: 45,marginBottom:8}}
                placeholder='nom'/>

            <Flex direction='row' center style={{marginBottom:16}}>
                <Icon name="email" size={36} color="black"/>
                <TextInput
                    style={{width:'90%',marginLeft: 8}}
                    placeholder='nom@exemple.com'/>
            </Flex>

            <Flex direction='row' center style={{marginBottom:16}}>
                <Icon name="lock" size={36} color="black"/>
                
                <TextInput
                    style={{width:'90%',marginLeft: 8}}
                    placeholder='Entrer votre mot de passe'
                    secureTextEntry={true}/>
                    
            </Flex>
        </Box>

        <Spacer />

        <Box style={styles.submitButtonContainer}>
                <Button style={styles.submitButton} title="Supprimer mon compte" color="#C70000"></Button>
        </Box>

    </Flex>
    )
}

const styles = StyleSheet.create({
    formInput:{
        width:'100%'
    },
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
        margin:0,
        backgroundColor:'#C70000'
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

export default Profile;