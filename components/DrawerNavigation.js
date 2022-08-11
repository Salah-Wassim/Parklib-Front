import { createDrawerNavigator } from '@react-navigation/drawer';
import SideBar from "./sideBar";
import BottomNavigationBar from "./bottomNavigationBar";

const Drawer = createDrawerNavigator();

const DrawerNavigation=()=>{
    return (
        <Drawer.Navigator
            initialRouteName='BottomNav'
            screenOptions={{
                              headerTitle:'',
                              headerShown: true,
                              headerTransparent:false,
                              drawerStyle: {
                                backgroundColor: '#FFFFFF',
                                width: 238,
                              }, }}
            drawerContent={(props) => <SideBar {...props} />}>

            <Drawer.Screen name="BottomNav" component={BottomNavigationBar} options={{title:"Park'Lib"}} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;