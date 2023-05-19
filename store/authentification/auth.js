import {useState, useEffect} from 'react';
import * as SecureStore from 'expo-secure-store';
import { register, login } from "../../api/api";

export const isInputValid = (email, password, cPassword) => {
  if (!email.trim()  || !password.trim()  || !cPassword.trim()) {
    console.log('Veuillez remplir tous les champs.');
    return false;
  }
  if (password !== cPassword) {
    console.log('Les mots de passe ne correspondent pas');
    return false;
  }
  return true;
};

export const handleSignUp = async (email, password, cPassword, navigation, onChangeEmail, onChangePassword, onChangeCPassword, setAuthenticated) => {
    // Set configuration for SecureStore to allow access only when device is unlocked
    const config = {
    keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    };

  if (!isInputValid(email, password, cPassword)) {
    return;
  }

  try {
    const res = await register(email, password, cPassword);
    console.log('res',res);

    if (res.statusCode === 201) {
      if (res.data && res.data.accessToken) {
        const token = res.data.accessToken;

        // Saving the access token in the secure storage
        await SecureStore.setItemAsync('auth_token', token, config);
        setAuthenticated(true);

        const storedToken = await SecureStore.getItemAsync('auth_token', config);

        if (!storedToken) {
          console.log("Une erreur est survenue lors de la récupération du token");
          return;
        }

        navigation.navigate('Profile');
        onChangeEmail('');
        onChangePassword('');
        onChangeCPassword('');
      } else {
        console.log("Une erreur est survenue lors de l'inscription");
      }
    } else {
      console.log(res.message);
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleSignIn = async (email, password, navigation, onChangeEmail, onChangePassword, setAuthenticated) => {

    const config = {
        keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    };

  if (!email.trim() || !password.trim()) {
    console.log('Veuillez remplir tous les champs.');
    return;
  }

  try {
    const res = await login(email, password);
    console.log(res);
    if (res.statusCode === 200) {
      if (res.data && res.data.accessToken) {
        const token = res.data.accessToken;
        await SecureStore.setItemAsync('auth_token', token, config);
        setAuthenticated(true); 

        const storedToken = await SecureStore.getItemAsync('auth_token', config);
        if (!storedToken) {
          console.log("Une erreur est survenue lors de la récupération du token");
          return;
        }

        navigation.navigate('DrawerNav');
        onChangeEmail('');
        onChangePassword('');
      } else {
        console.log("Une erreur est survenue lors de la connexion");
      }
    } else {
      console.log('E-mail ou mot de passe incorrect');
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleLogout = async (setAuthenticated) => {
  try {
    await SecureStore.deleteItemAsync('auth_token');
    setAuthenticated(false);
    console.log("Déconnecté avec succès !");
  } catch (error) {
    console.log("Une erreur est survenue lors de la déconnexion :", error);
  }
};

export const getAuthToken = async () => {
  const config = {
    keychainAccessible : SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
  }
  try{
    const storedToken = await SecureStore.getItemAsync('auth_token', config);
    console.log("storedToken", storedToken);
    if(storedToken){
      return storedToken;
    }
    else{
      console.log("Une erreur est survenue lors de la récupération du token d'authentification", storedToken);
    }
  }
  catch(error){
    console.log("error", error)
  }
}

export const fetchToken = async (setAuthenticated) => {
  const token = await SecureStore.getItemAsync('auth_token');
  if (token) {
      setAuthenticated(true);
  }
}

