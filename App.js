
import React from 'react'
import {NavigationContainer}  from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/home';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import Parameters from './pages/parameters';
import Contact from './pages/contact';
import ContactForm from './pages/contactForm';
import ResetPassword from './pages/resetPassword';
import LandingPage from './pages/landingPage';
import PaymentMethod from './pages/paymentMethod';
// import NewCreditCardForm from './pages/newCreditCardForm';
import EditCreditCard from './pages/editCreditCard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import History from './pages/History';
import Profile from './pages/profile';
import Cgu from './pages/cgu';
import CheckoutScreen from './pages/checkoutScreen';
import PaymentScreen from './pages/paymentScreen';
//import Map from './pages/map';

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Contact'>
        <Stack.Screen name="Home" options={{ title: 'Park\'Lib', headerShown: false }} component={Home} />
        <Stack.Screen name="SignIn" options={{ title: 'Park\'Lib' }} component={SignIn}/>
        <Stack.Screen name="SignUp" options={{ title: 'Park\'Lib' }} component={SignUp}/>
        <Stack.Screen name="Parameters" options={{ title: 'Paramètres' }} component={Parameters}/>
        <Stack.Screen name="Contact" options={{ title: 'Contact' }} component={Contact}/>
        <Stack.Screen name="ContactForm" options={{ title: 'Nous contacter' }} component={ContactForm}/>
        <Stack.Screen name="ResetPassword" options={{ title: 'Park\'Lib' }} component={ResetPassword}/>
        <Stack.Screen name="LandingPage" options={{ title: 'Bienvenue' }} component={LandingPage}/>
        <Stack.Screen name="PaymentMethod" options={{ title: 'Moyen de paiement' }} component={PaymentMethod}/>
        <Stack.Screen name="EditCreditCard" options={{ title: 'Modifier une carte bancaire' }} component={EditCreditCard}/>
        <Stack.Screen name="History" options={{ title: 'Historique' }} component={History}/>
        <Stack.Screen name="PrivacyPolicy" options={{ title: 'Politique de confidentialité' }} component={PrivacyPolicy}/>
        <Stack.Screen name="Profile" options={{ title: 'Mon profil' }} component={Profile}/>
        <Stack.Screen name="CGU" options={{ title: 'CGU' }} component={Cgu}/>
        <Stack.Screen name="PaymentScreen" options={{title: 'Paiement'}} component={PaymentScreen}/>
        <Stack.Screen name="CheckoutScreen" options={{title: 'Verification'}} component={CheckoutScreen}/>
        {/* <Stack.Screen name="map" options={{title: 'Map'}} component={Map}/> */}
        {/* <Stack.Screen name="PaymentMethod" options={{ title: 'Moyen de paiement' }} component={PaymentMethod}/> */}
        {/* <Stack.Screen name="NewCreditCardForm" options={{ title: 'Ajouter une carte bancaire' }} component={NewCreditCardForm}/> */}
      </Stack.Navigator>
    </NavigationContainer>
    
    );
}

