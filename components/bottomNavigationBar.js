import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Home from "../pages/home";
import History from "../pages/history";
import Contact from "../pages/contact";
import CreateAdFirstStep from "../pages/createAdFirstStep";
import WhoWeAre from "../pages/whoWeAre.js";
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";
import Parameters from "../pages/parameters";

const Tab = createMaterialBottomTabNavigator();

const BottomNavigationBar = () => {
    return (
        <Tab.Navigator
            labeled={false}
            initialRouteName='Recherche'
            activeColor="#000000"
            inactiveColor="#C4C4CE"
            barStyle={{backgroundColor: '#fafafa'}}>
            <Tab.Screen name="Recherche" component={Home}
                        options={{
                            tabBarLabel: 'Recherche',
                            tabBarIcon: ({color}) => (
                                <MaterialIcons name="search" size={25} color={color}/>
                            )
                        }}
            />
            <Tab.Screen name="Historique" component={History}
                        options={{
                            tabBarLabel: 'Historique',
                            tabBarIcon: ({color}) => (
                                <MaterialCommunityIcon name="calendar-check" size={25} color={color}/>
                            )
                        }}
            />
            <Tab.Screen name="CreateAdFirstStep" component={CreateAdFirstStep}
                        options={{
                            tabBarLabel: 'CreateAdFirstStep',
                            tabBarIcon: ({color}) => (
                                <Icon name="add-circle-outline" size={25} color={color} />
                            )
                        }}
            />
            <Tab.Screen name="whoWeAre" component={WhoWeAre}
                        options={{
                            tabBarLabel: 'whoWeAre',
                            tabBarIcon: ({color}) => (
                                <MaterialCommunityIcon name="bell" size={25} color={color}/>
                            )
                        }}
            />
            <Tab.Screen name="Parametres" component={Parameters}
                        options={{
                            tabBarLabel: 'Parametre',
                            tabBarIcon: ({color}) => (
                                <MaterialIcons name="settings" size={25} color={color}/>
                            )
                        }}
            />
        </Tab.Navigator>
    );
}
export default BottomNavigationBar;