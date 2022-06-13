import React from 'react'
import {StyleSheet, View} from 'react-native';
import {NavigationContainer}  from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StripeProvider} from '@stripe/stripe-react-native';

import SignUp from './pages/signUp'
import SignIn from './pages/signIn';
import Parameters from './pages/parameters';
import Contact from './pages/contact';
import ContactForm from './pages/contactForm';
import ResetPassword from './pages/resetPassword';
import LandingPage from './pages/landingPage';
import CheckoutScreen from './pages/checkoutScreen';
import PaymentScreen from './pages/paymentScreen';

export default function App() {
  const Stack = createStackNavigator()
  return (
    // <View>
    //   {/* <StripeProvider
    //     publishableKey = "pk_test_51L9oguIlXTacjWaPeWIxNBY6n5iYRVJJ4tEws8rIgsgvCJwD0CbfV22OKxoxzIOe8EChORrDWTVTAEZMogSQOKBj00Ui7SgTpF"
    //   >
    //   </StripeProvider>
    // </View> */}
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LandingPage'>
        <Stack.Screen name="SignIn" options={{ title: 'Park\'Lib' }} component={SignIn}/>
        <Stack.Screen name="SignUp" options={{ title: 'Park\'Lib' }} component={SignUp}/>
        <Stack.Screen name="Parameters" options={{ title: 'Paramètres' }} component={Parameters}/>
        <Stack.Screen name="Contact" options={{ title: 'Contact' }} component={Contact}/>
        <Stack.Screen name="ContactForm" options={{ title: 'Nous contacter' }} component={ContactForm}/>
        <Stack.Screen name="ResetPassword" options={{ title: 'Park\'Lib' }} component={ResetPassword}/>
        <Stack.Screen name="LandingPage" options={{ title: 'Bienvenue' }} component={LandingPage}/>
        <Stack.Screen name="PaymentScreen" options={{title: 'Paiement'}} component={PaymentScreen}/>
        <Stack.Screen name="CheckoutScreen" options={{title: 'Verification'}} component={CheckoutScreen}/>
        {/* <Stack.Screen name="PaymentMethod" options={{ title: 'Moyen de paiement' }} component={PaymentMethod}/> */}
        {/* <Stack.Screen name="NewCreditCardForm" options={{ title: 'Ajouter une carte bancaire' }} component={NewCreditCardForm}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
