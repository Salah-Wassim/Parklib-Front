import * as SecureStore from 'expo-secure-store';
import { register, login } from "../../api/api";

const isInputValid = (email, password, cPassword, setError) => {
  if (!email.trim()  || !password.trim()  || !cPassword.trim()) {
    console.log('Veuillez remplir tous les champs.');
    setError('Veuillez remplir tous les champs.');
    return false;
  }
  if (password !== cPassword) {
    console.log('Les mots de passe ne correspondent pas');
    setError('Les mots de passe ne correspondent pas')
    return false;
  }
  return true;
};

const handleSignUp = async (email, password, cPassword, navigation, onChangeEmail, onChangePassword, onChangeCPassword, setAuthenticated, setError, setIsLoading, setDisableButton) => {
    // Set configuration for SecureStore to allow access only when device is unlocked
    const config = {
    keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    };

  if (!isInputValid(email, password, cPassword, setError)) {
    setIsLoading(false);
    setDisableButton(false);
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
          setIsLoading(false);
          setDisableButton(false);
          console.log("Une erreur est survenue lors de la récupération du token");
          return;
        }

        onChangeEmail('');
        onChangePassword('');
        onChangeCPassword('');
        setIsLoading(false);
        setDisableButton(false);
        // navigation.navigate('Profile');
        navigation.navigate('CompleteProfile');
      } else {
        setIsLoading(false);
        setDisableButton(false);
        console.log("Une erreur est survenue lors de l'inscription");
      }
    } else {
      setIsLoading(false);
      setDisableButton(false);
      console.log(res.message);
    }
  } catch (error) {
    setIsLoading(false);
    setDisableButton(false);
    console.log(error);
  }
};

const handleSignIn = async (email, password, navigation, onChangeEmail, onChangePassword, setAuthenticated) => {

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

        onChangeEmail('');
        onChangePassword('');
        navigation.navigate('DrawerNav');
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

const handleLogout = async (setAuthenticated) => {
  try {
    await SecureStore.deleteItemAsync('auth_token');
    setAuthenticated(false);
    console.log("Déconnecté avec succès !");
  } catch (error) {
    console.log("Une erreur est survenue lors de la déconnexion :", error);
  }
};

const getAuthToken = async () => {
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
  
export { handleSignUp, handleSignIn, handleLogout, getAuthToken};
