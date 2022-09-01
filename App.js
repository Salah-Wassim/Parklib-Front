import React from 'react'
import {NavigationContainer}  from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Parameters from "./pages/parameters";
import Contact from "./pages/contact";
import ContactForm from "./pages/contactForm";
import ResetPassword from "./pages/resetPassword";
import LandingPage from "./pages/landingPage";
import PaymentMethod from "./pages/paymentMethod";
import EditCreditCard from "./pages/editCreditCard";
import PrivacyPolicy from "./pages/privacyPolicy";
import Profile from "./pages/profile";
import Cgu from "./pages/cgu";
import History from "./pages/history";
import Map from "./pages/map";
import PaymentScreen from "./pages/paymentScreen";
import CheckoutScreen from "./pages/checkoutScreen";
import BottomNavigationBar from "./components/bottomNavigationBar";
import {StatusBar} from "react-native";

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" options={{ title: 'Park\'Lib', headerShown: false }} component={BottomNavigationBar} />
        <Stack.Screen name="SignIn" options={{ title: 'Park\'Lib', headerShown: false }} component={SignIn}/>
        <Stack.Screen name="SignUp" options={{ title: 'Park\'Lib', headerShown: false }} component={SignUp}/>
        <Stack.Screen name="Parameters" options={{ title: 'Paramètres' }} component={Parameters}/>
        <Stack.Screen name="Contact" options={{ title: 'Contact' }} component={Contact}/>
        <Stack.Screen name="ContactForm" options={{ title: 'Nous contacter' }} component={ContactForm}/>
        <Stack.Screen name="ResetPassword" options={{ title: 'Park\'Lib' }} component={ResetPassword}/>
        <Stack.Screen name="LandingPage" options={{ title: 'Bienvenue', headerShown: false }} component={LandingPage}/>
        <Stack.Screen name="PaymentMethod" options={{ title: 'Moyen de paiement' }} component={PaymentMethod}/>
        <Stack.Screen name="EditCreditCard" options={{ title: 'Modifier une carte bancaire' }} component={EditCreditCard}/>
        <Stack.Screen name="History" options={{ title: 'Historique' }} component={History}/>
        <Stack.Screen name="PrivacyPolicy" options={{ title: 'Politique de confidentialité' }} component={PrivacyPolicy}/>
        <Stack.Screen name="Profile" options={{ title: 'Mon profil' }} component={Profile}/>
        <Stack.Screen name="CGU" options={{ title: 'CGU' }} component={Cgu}/>
        <Stack.Screen name="PaymentScreen" options={{title: 'Paiement'}} component={PaymentScreen}/>
        <Stack.Screen name="CheckoutScreen" options={{title: 'Verification'}} component={CheckoutScreen}/>
        <Stack.Screen name="Map" options={{title: 'Map'}} component={Map}/>
        {/* <Stack.Screen name="PaymentMethod" options={{ title: 'Moyen de paiement' }} component={PaymentMethod}/> */}
        {/* <Stack.Screen name="NewCreditCardForm" options={{ title: 'Ajouter une carte bancaire' }} component={NewCreditCardForm}/> */}
      </Stack.Navigator>
    </NavigationContainer>
    );
}