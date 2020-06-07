import React, { memo } from 'react';
import Background from '../components/Background';
import { Header } from '../components';
import { Text, View } from 'react-native';

const HomeScreen = () => (
  <Background>
  <Header style={styles.headerText} headerText="Automan management system"></Header>
  <View style={styles.container}>
      <Text style={styles.textStyle}>Total Vehicle Purchased: 45000</Text>
      <Text style={styles.textStyle}>Total Vehicle Sold: 35000</Text>
      <Text style={styles.textStyle}>Total Investment: 135000</Text>
      <Text style={styles.textStyle}>Total Credit Received: 95000</Text>

  </View>
  </Background>
);

const styles = {
  headerText: {
    color: '#00ff00'
  },
  container: {
    marginTop: 30,
  },
  textStyle: {
    color: '#0000ff',
    fontSize: 20,
    lineHeight: 65,
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  buttonStyle: {
    paddingTop: 50
  }
}

export default memo(HomeScreen);
