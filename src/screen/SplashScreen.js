import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class SplashScreen extends React.Component {
  componentDidMount() {
    this.checkIfLogin();
  }

  // Fetch the token from storage then navigate to our appropriate place
  checkIfLogin = async () => {
    const userToken = await AsyncStorage.getItem('token');
    console.warn("user token", userToken);

    // This will switch to the App screen or Auth screen and this splash
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'Home' : 'SignInScreen');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
export default SplashScreen
