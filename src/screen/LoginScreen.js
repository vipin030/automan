import React, { Component } from 'react';
import { Card, CardSection, Input, Button} from '../components';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Text, View, Keyboard } from 'react-native';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';
import Logo from '../components/Logo';
import Background from '../components/Background';


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
    return (
      <Background>
      <Card>
        <Logo/>
        <CardSection>
          <Input label="Email" placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email} source='../images/username.png'
            placeholder="Username"/>
        </CardSection>
        <CardSection>
          <Input secureTextEntry label="Password" placeholder="password"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password} source='../images/password.png'/>
        </CardSection>
        <CardSection style={styles.buttonStyle}>
          <Button onPress={this.handleSubmit.bind(this)}> Login </Button>
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </Card>
        </Background>
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
