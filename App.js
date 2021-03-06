import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  Platform,
  View,
  StatusBar,
  DrawerLayoutAndroid,
  Menu
} from 'react-native';
import ReduxThunk from 'redux-thunk';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './src/reducers';
import { setNavigator, setActiveRoute } from "./src/actions";
import LoginForm from "./src/screen/LoginScreen";
import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from "./src/screen/HomeScreen";
import About from "./src/screen/About";
import SplashScreen from "./src/screen/SplashScreen";


import { navigationService } from './src/services';
import { DrawerMenu } from './src/screen/DrawerMenu';

import AuthStackNavigator from './src/screen/AuthStackNavigator';
import MainTabScreen from './src/screen/MainTabScreen';


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




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers, /* preloadedState, */
  composeEnhancers(
      applyMiddleware(ReduxThunk)
  )
);

const HomeScreens = () => {
  return (
    <View>
      <Text>Testing.....spotify</Text>
    </View>
  )
}

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

class App extends Component {

  render() {
    //console.log("Nav", DrawerNavigator)
    console.log("store", store);
    const a = "test"
    return (
      <Provider store={ store }>
      <PaperProvider theme={theme}>
      <NavigationContainer>
        { a !== null ? (
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
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default App
