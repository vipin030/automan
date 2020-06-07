import React, { Component } from 'react';
//import { View, Text } from 'reactive-native';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers';

import LoginForm from "./screen/LoginScreen";
import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from "./screen/HomeScreen";
import About from "./screen/About";
import SplashScreen from "./screen/SplashScreen";

import { connect } from 'react-redux';

import { navigationService } from './services';
import { DrawerMenu } from './screen/DrawerMenu';

import AuthStackNavigator from './screen/AuthStackNavigator';
import MainTabScreen from './screen/MainTabScreen';


const Drawer = createDrawerNavigator();

import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';

const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }
const isDarkTheme = ""

const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;


const a="";

class RootConatiner extends Component {
  render() {
    const { user } =this.props.state
    return (
      <PaperProvider theme={theme}>
      <NavigationContainer ref={navigationService.navigationRef}>
        { user.token !== '' ? (
          <Drawer.Navigator drawerContent={props => <DrawerMenu {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="Home" component={HomeScreen} />
          </Drawer.Navigator>
        )
      :
        <AuthStackNavigator/>
      }
      </NavigationContainer>
      </PaperProvider>
    )
  }
}

export default connect( (state) => ({
    state: state.auth
}), { })(RootConatiner);
//export default App
