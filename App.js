import React, {useState} from 'react'
import {NavigationContainer}  from '@react-navigation/native';
import 'react-native-gesture-handler';
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Parameters from "./pages/parameters";
import Contact from "./pages/contact";
import ContactForm from "./pages/contactForm";
import ChangePassword from "./pages/ChangePassword";
import LandingPage from "./pages/landingPage";
import PaymentMethod from "./pages/paymentMethod";
import EditCreditCard from "./pages/editCreditCard";
import History from "./pages/history";
import PrivacyPolicy from "./pages/privacyPolicy";
import Profile from "./pages/profile";
import Cgu from "./pages/cgu";
import PaymentScreen from "./pages/paymentScreen";
import CheckoutScreen from "./pages/checkoutScreen";
import Map from "./pages/map";
import ParkingDetails from './pages/parkingDetails';
import MenuBurger from "./components/menuBurger";
import RouteGuard from './components/routeGuard';
import {createStackNavigator} from "@react-navigation/stack";
import CreateAdFirstStep from "./pages/createAdFirstStep";
import CreateAdSecondSteps from "./pages/createAdSecondSteps";
import CreateAdThirdSteps from "./pages/createAdThirdSteps";
import store from './store/store';
import { Provider } from 'react-redux'
import VerificationScreen from "./pages/verificationScreen";
import VerificationCodeScreen from "./pages/verficationCodeScreen";
import ParkingParticulierDetails from './pages/parkingParticulierDetails';
import DisplayPark from "./pages/displayPark";
import Reservation from "./pages/reservation";
import AuthContext from './store/authentification/authContext'; 


const Stack = createStackNavigator()

export default function App() {
    const [isAuthenticated, setAuthenticated] = useState(false);
    return (
        <Provider store={store}>
            <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName='Profile'>
                        <Stack.Screen name="DrawerNav" options={{ title: 'Park\'Lib', headerShown: false }} component={MenuBurger} />
                        <Stack.Screen name="SignIn" options={{ title: 'Park\'Lib', headerShown: false }} component={SignIn}/>
                        <Stack.Screen name="SignUp" options={{ title: 'Park\'Lib', headerShown: false }} component={SignUp}/>
                        <Stack.Screen name="Parameters" options={{ title: 'Paramètres' }} component={Parameters}/>
                        <Stack.Screen name="Contact" options={{ title: 'Contact' }} component={Contact}/>
                        <Stack.Screen name="ContactForm" options={{ title: 'Nous contacter' }} component={ContactForm}/>
                        <Stack.Screen name="ChangePassword" options={{ title: 'Changer le mot de passe' }} component={ChangePassword}/>
                        <Stack.Screen name="LandingPage" options={{ title: 'Bienvenue', headerShown: false }} component={LandingPage}/>
                        <Stack.Screen name="PaymentMethod" options={{ title: 'Moyen de paiement' }} component={PaymentMethod}/>
                        <Stack.Screen name="EditCreditCard" options={{ title: 'Modifier une carte bancaire' }} component={EditCreditCard}/>
                        <Stack.Screen name="History" options={{ title: 'Historique' }} component={History}/>
                        <Stack.Screen name="PrivacyPolicy" options={{ title: 'Politique de confidentialité' }} component={PrivacyPolicy}/>
                        <Stack.Screen name="Profile" options={{ title: 'Mon profil' }}>
                        {() => (
                            <RouteGuard>
                            <Profile />
                            </RouteGuard>
                        )}
                        </Stack.Screen>
                        <Stack.Screen name="CGU" options={{ title: 'CGU' }} component={Cgu}/>
                        <Stack.Screen name="PaymentScreen" options={{title: 'Paiement'}} component={PaymentScreen}/>
                        <Stack.Screen name="CheckoutScreen" options={{title: 'Verification'}} component={CheckoutScreen}/>
                        <Stack.Screen name="Verification" options={{title: 'Verification'}} component={VerificationScreen}/>
                        <Stack.Screen name="VerificationCode" options={{title: 'Validation du code'}} component={VerificationCodeScreen}/>
                        <Stack.Screen name="Map" options={{title: 'Map'}} component={Map}/>
                        <Stack.Screen name="ResetPassword" options={{title: 'Reinitialiser le mot de passe'}} component={Map}/>
                        <Stack.Screen name="CreateAdFirstStep" options={{title: 'Publier - Étape 1'}} component={CreateAdFirstStep}/>
                        <Stack.Screen name="CreateAdSecondSteps" options={{title: 'Publier - Étape 2'}} component={CreateAdSecondSteps}/>
                        <Stack.Screen name="CreateAdThirdSteps" options={{title: 'Publier - Étape 3'}} component={CreateAdThirdSteps}/>
                        <Stack.Screen name="ParkingDetails" options={{title: 'En savoir plus'}} component={ParkingDetails}/>
                        <Stack.Screen name="ParkingParticulierDetails" options={{title: 'Réservation'}} component={ParkingParticulierDetails}/>
                        <Stack.Screen name="Reservation" options={{title: 'Réservation'}} component={Reservation}/>
                        {/* <Stack.Screen name="PaymentMethod" options={{ title: 'Moyen de paiement' }} component={PaymentMethod}/> */}
                        {/* <Stack.Screen name="NewCreditCardForm" options={{ title: 'Ajouter une carte bancaire' }} component={NewCreditCardForm}/> */}
                    </Stack.Navigator>
                </NavigationContainer>
            </AuthContext.Provider>
        </Provider>
    );
}
