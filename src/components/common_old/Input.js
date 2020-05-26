import React from 'react';
import { TextInput, Text, View, Dimensions, Image } from 'react-native';


const Input = ({ label, value, source, onChangeText, secureTextEntry, placeholder, returnKeyType }) => {
  const { inputStyle, labelStyle, containerStyle, inlineImg } = styles
  console.log("source",source)
  return (
    <View style={containerStyle}>
      <Image source={require('../../images/username.png')} style={inlineImg} />
      <TextInput
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        placeholder= {placeholder}
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
       />
    </View>
  );
};

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = {
  inputStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 50,
    paddingLeft: 45,
    borderRadius: 20,
    marginTop: 20,
    borderBottomWidth:1,
    borderColor: '#ddd'
  },
  labelStyle: {
    paddingLeft: 20,
    fontSize: 18,
    flex: 1
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
}
export { Input };
