import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
//import SignUpScreen from './SignUpScreen';

const RootStack = createStackNavigator();

const AuthStackNavigator = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
    </RootStack.Navigator>
);

export default AuthStackNavigator;
