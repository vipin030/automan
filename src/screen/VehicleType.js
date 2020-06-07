import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import moment from 'moment';

import {
    TouchableOpacity,
    TextInput,
    Platform,
    StatusBar,
    Alert,
    Dimensions,
    Keyboard
} from 'react-native';

const data = [{
  value: 'Banana',
}, {
  value: 'Mango',
}, {
  value: 'Pear',
}];
console.log( DateTimePickerModal)
class VehicleType extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false,
      puchase_at: ''
    }
  }

  showDatePicker = () => {
    this.setState({ show: true });
    //alert();

  };

  handleChange = (evt, val) => {
    console.log("event....", evt, this.data,val)
    //this.props.textChanged(evt);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createUser(this.props.data)

  }

  handleConfirm = (date) => {

    this.setState({ puchase_at: date });
    this.hideDatePicker();
  }

  hideDatePicker = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
            placeholder="Vehicle Type"
            placeholderTextColor="#666666"
            onChangeText={(text) => this.handleChange({prop:'name', value:text})}
            style={styles.input}
        />
        <TouchableOpacity
            onPress={this.handleSubmit.bind(this)}
            style={[ {
                borderColor: '#009387',
                borderWidth: 1,
                marginTop: 15
            }]}
        >
            <Text style={[ {
                color: '#009387'
            }]}>Save</Text>
        </TouchableOpacity>

      </View>

    );
  }
};

//export default DetailsScreen;
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: DEVICE_WIDTH-40,
    height: 50,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  }
});

const mapStateToProps = state => {
    return {
      state: state.vehicle,
    }
}
export default connect(mapStateToProps, {})(VehicleType);
