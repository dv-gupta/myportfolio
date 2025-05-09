import React from 'react';
/**Reactm native */
import {FlatList, Image, Text, View, TouchableOpacity} from 'react-native';
/** navigation dependency */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createDrawerNavigator, DrawerItems} from '@react-navigation/drawer';
/** Screen */
import LiveRateScreen from './Screens/LiveRateScreen';
import ForexScreen from './Screens/ForexScreen';
import MessageScreen from './Screens/MessageScreen';
import NewsScreen from './Screens/NewsScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import SlpashScreen from './Screens/SlpashScreen';
import ContactScreen from './Screens/ContactScreen';
import EcalenderScreen from './Screens/EcalenderScreen';
import RegistedScreen from './Screens/RegistedScreen';
import OtpScreen from './Screens/OtpScreen';
import ChangePassword from './Screens/ChangePassword';
import DraggableScreen from './Screens/DraggableScreen';
import YourComponents from './Screens/YourComponents';


/** images */
import {colors, Images} from './Common/constant';

/**Navigation ref */
import {navigationRef} from './utils/RootNavigation';
import { CustomDrawerContent } from './Components/CustomDrawerContent';


const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();


const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={{
        drawerActiveBackgroundColor: colors.activeTabColor,
        drawerInactiveBackgroundColor: colors.inactiveTabColor,
        headerShown: false,
        drawerActiveTintColor: colors.WHITE,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="home" component={HomeScreen} />
      <Drawer.Screen name="liveRate" component={LiveRateScreen} />
      <Drawer.Screen name="forex" component={ForexScreen} />
      <Drawer.Screen name="message" component={MessageScreen} />
      <Drawer.Screen name="News" component={NewsScreen} />
      {/* <Drawer.Screen name="eclender" component={EcalenderScreen} /> */}
      <Drawer.Screen name="contact" component={ContactScreen} />
    </Drawer.Navigator>
  );
};

const NavigationUtil = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="SlpashScreen">
        <Stack.Screen
          name="drawerStack"
          component={DrawerStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DraggableScreen"
          component={DraggableScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="YourComponents"
          component={YourComponents}
          options={{headerShown: false}}
        />
        
         {/* <Stack.Screen
          name="RegistedScreen"
          component={RegistedScreen}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
        name='OtpScreen'
        component={OtpScreen}
        options={{headerShown: false}}
        /> */}
         {/* <Stack.Screen
        name='ChangePassword'
        component={ChangePassword}
        options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="SlpashScreen"
          component={SlpashScreen}
          options={{headerShown: false}}
        />
          {/* <Stack.Screen name="message" component={MessageScreen} />
      <Stack.Screen name="news" component={NewsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationUtil;
