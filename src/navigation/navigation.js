import React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useColorScheme} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // New Icon for Facilities

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SplashScreen from '../screens/SplashScreen';
import ProjectScreen from '../screens/ProjectScreen';
import Facilities from '../screens/Facilities'; // Make sure this is the default export

import {navigationRef} from '../utils/RootNavigation';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigators for each tab
const HomeStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

const AboutStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="About" component={AboutScreen} />
  </Stack.Navigator>
);

const DetailsStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const ProjectStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Project" component={ProjectScreen} />
  </Stack.Navigator>
);

const FacilitiesStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Facilities" component={Facilities} />
  </Stack.Navigator>
);

// Bottom Tab Screens
const TabStack = () => (
  <Tab.Navigator
    initialRouteName="HomeStack"
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarActiveTintColor: '#2b8482',
      tabBarInactiveTintColor: 'gray',
      tabBarIcon: ({color, size}) => {
        if (route.name === 'HomeStack') {
          return (
            <MaterialCommunityIcons
              name="home-circle"
              size={size}
              color={color}
            />
          );
        } else if (route.name === 'AboutStack') {
          return <AntDesign name="infocirlceo" size={size} color={color} />;
        } else if (route.name === 'ProjectStack') {
          return <AntDesign name="folder1" size={size} color={color} />;
        } else if (route.name === 'DetailsStack') {
          return <MaterialCommunityIcons name="file-document-outline" size={size} color={color} />;
        } else if (route.name === 'FacilitiesStack') {
          return <MaterialCommunityIcons name="office-building" size={size} color={color} />;
        }
      },
    })}>
    <Tab.Screen
      name="HomeStack"
      component={HomeStack}
      options={{tabBarLabel: 'Home'}}
    />
    <Tab.Screen
      name="AboutStack"
      component={AboutStack}
      options={{tabBarLabel: 'About Me'}}
    />
    <Tab.Screen
      name="ProjectStack"
      component={ProjectStack}
      options={{tabBarLabel: 'Project'}}
    />
    <Tab.Screen
      name="FacilitiesStack"
      component={FacilitiesStack}
      options={{tabBarLabel: 'Facilities'}}
    />
    <Tab.Screen
      name="DetailsStack"
      component={DetailsStack}
      options={{tabBarLabel: 'Details'}}
    />
  </Tab.Navigator>
);

// Main Navigation
function Navigation() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={TabStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
