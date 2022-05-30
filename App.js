
import React from 'react'
import {StyleSheet} from 'react-native';
import {NavigationContainer}  from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignUp from './pages/signUp'
import SignIn from './pages/signIn';
import Parameters from './pages/parameters';
import Contact from './pages/contact';
import ContactForm from './pages/contactForm';
import ResetPassword from './pages/resetPassword';
import LandingPage from './pages/landingPage';
import PaymentMethod from './pages/paymentMethod';
import NewCreditCardForm from './pages/newCreditCardForm';

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='NewCreditCardForm'>
        <Stack.Screen name="SignIn" options={{ title: 'Park\'Lib' }} component={SignIn}/>
        <Stack.Screen name="SignUp" options={{ title: 'Park\'Lib' }} component={SignUp}/>
        <Stack.Screen name="Parameters" options={{ title: 'Paramètres' }} component={Parameters}/>
        <Stack.Screen name="Contact" options={{ title: 'Contact' }} component={Contact}/>
        <Stack.Screen name="ContactForm" options={{ title: 'Nous contacter' }} component={ContactForm}/>
        <Stack.Screen name="ResetPassword" options={{ title: 'Park\'Lib' }} component={ResetPassword}/>
        <Stack.Screen name="LandingPage" options={{ title: 'Bienvenue' }} component={LandingPage}/>
        <Stack.Screen name="PaymentMethod" options={{ title: 'Moyen de paiement' }} component={PaymentMethod}/>
        <Stack.Screen name="NewCreditCardForm" options={{ title: 'Ajouter une carte bancaire' }} component={NewCreditCardForm}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
