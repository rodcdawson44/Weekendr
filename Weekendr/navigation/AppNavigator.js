import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import SignInScreen from '../screens/SignInScreen';
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createSwitchNavigator(
  {
     AuthLoading: AuthLoadingScreen,
    Main: MainTabNavigator,
    Auth: AuthStack,
  },
  {
     initialRouteName: 'AuthLoading',
  }
);