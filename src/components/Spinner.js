import React from 'react';
import { ActivityIndicator, View } from 'react-native';


const Spinner = ({ size }) => {
  const { viewStyle, textStyle } = styles
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  textStyle: {
    fontSize: 20
  }
};

export default { Spinner };
