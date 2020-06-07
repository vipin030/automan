import React, { Component } from 'react';
import { Card, CardSection, Input, Button} from '../components';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Text, View, Keyboard } from 'react-native';

import {
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
//import LinearGradient from 'react-native-linear-gradient';
//import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';


import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';
import Logo from '../components/Logo';
import Background from '../components/Background';

console.log("LinearGradient",LinearGradient)

class LoginForm extends Component  {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text)
    console.log(this.props)
  }
  handleSubmit(e) {

      e.preventDefault();
      console.log("testing",this.props.navigation)
      //this.props.navigation.navigate('Home')
      console.log("testing..")
      const {email, password} = this.props;
      console.log("pass",this.props)
      this.props.loginUser({email, password});
  }
  render() {
    const data = {
      username: '',
      password: '',
      confirm_password: '',
      check_textInputChange: false,
      secureTextEntry: true,
      confirm_secureTextEntry: true,
    }
    return (
      // <Background>
      // <Card>
      //   <Logo/>
      //   <CardSection>
      //     <Input label="Email" placeholder="email@gmail.com"
      //       onChangeText={this.onEmailChange.bind(this)}
      //       value={this.props.email} source='../images/username.png'
      //       placeholder="Username"/>
      //   </CardSection>
      //   <CardSection>
      //     <Input secureTextEntry label="Password" placeholder="password"
      //     onChangeText={this.onPasswordChange.bind(this)}
      //     value={this.props.password} source='../images/password.png'/>
      //   </CardSection>
      //   <CardSection style={styles.buttonStyle}>
      //     <Button onPress={this.handleSubmit.bind(this)}> Login </Button>
      //   </CardSection>
      //   <Text style={styles.errorTextStyle}>{this.props.error}</Text>
      //   </Card>
      //   </Background>
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
          <View style={styles.header}>
              <Text style={styles.text_header}>Welcome!</Text>
          </View>
          <Animatable.View
              animation="fadeInUpBig"
              style={[styles.footer, {
                //  backgroundColor: colors.background
              }]}
          >
              <Text style={[styles.text_footer, {
                  //color: colors.text
              }]}>Username</Text>
              <View style={styles.action}>
                  <FontAwesome
                      name="user-o"
                      //color={colors.text}
                      size={20}
                  />
                  <TextInput
                      placeholder="Email"
                      placeholderTextColor="#666666"
                      style={[styles.textInput, {
                          //color: colors.text
                      }]}
                      autoCapitalize="none"
                      value={this.props.email}
                      onChangeText={this.onEmailChange.bind(this)}
                  />
                  {data.check_textInputChange ?
                  <Animatable.View
                      animation="bounceIn"
                  >
                      <Feather
                          name="check-circle"
                          color="green"
                          size={20}
                      />
                  </Animatable.View>
                  : null}
              </View>
              { data.isValidUser ? null :
              <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
              </Animatable.View>
              }


              <Text style={[styles.text_footer, {
                  //color: colors.text,
                  marginTop: 35
              }]}>Password</Text>
              <View style={styles.action}>
                  <Feather
                      name="lock"
                      //color={colors.text}
                      size={20}
                  />
                  <TextInput
                      placeholder="Your Password"
                      placeholderTextColor="#666666"
                      secureTextEntry={data.secureTextEntry ? true : false}
                      style={[styles.textInput, {
                          //color: colors.text
                      }]}
                      value={this.props.password}
                      autoCapitalize="none"
                      onChangeText={this.onPasswordChange.bind(this)}
                  />
                  <TouchableOpacity
                      //onPress={updateSecureTextEntry}
                  >
                      {data.secureTextEntry ?
                      <Feather
                          name="eye-off"
                          color="grey"
                          size={20}
                      />
                      :
                      <Feather
                          name="eye"
                          color="grey"
                          size={20}
                      />
                      }
                  </TouchableOpacity>
              </View>
              { data.isValidPassword ? null :
              <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
              </Animatable.View>
              }


              <TouchableOpacity>
                  <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
              </TouchableOpacity>
              <View style={styles.button}>
                  <TouchableOpacity
                      style={styles.signIn}
                      //onPress={() => {loginHandle( data.username, data.password )}}
                      onPress={this.handleSubmit.bind(this)}
                  >
                  <LinearGradient
                      colors={['#08d4c4', '#01ab9d']}
                      style={styles.signIn}
                  >
                      <Text style={[styles.textSign, {
                          color:'#fff'
                      }]}>Sign In</Text>
                  </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('SignUpScreen')}
                      style={[styles.signIn, {
                          borderColor: '#009387',
                          borderWidth: 1,
                          marginTop: 15
                      }]}
                  >
                      <Text style={[styles.textSign, {
                          color: '#009387'
                      }]}>Sign Up</Text>
                  </TouchableOpacity>
              </View>
          </Animatable.View>
        </View>
      );
    }
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  buttonStyle: {
    paddingTop: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error
  }
}
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
