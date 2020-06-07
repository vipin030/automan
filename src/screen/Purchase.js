import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import {
    TouchableOpacity,
    TextInput,
    Platform,
    StatusBar,
    Alert,
    Dimensions
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import moment from 'moment';

class Purchase extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false,
      puchase_at: ''
    }
  }

  handleChange = (evt, val) => {
    console.log("event....", evt, this.data,val)
    //this.props.textChanged(evt);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createUser(this.props.data)

  }
  showDatePicker = () => {
    this.setState({ show: true });
    //alert();

  };
  handleConfirm = (date) => {

    this.setState({ puchase_at: date });
    this.hideDatePicker();
  }

  hideDatePicker = () => {
    this.setState({ show: false });
  }

  render() {
    const data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
    return (
      <View style={styles.container}>
        <Text>Purchase Screen</Text>
        <Dropdown containerStyle={styles.input}
        label='Vehicle Name'
        data={data}
        />
        <Dropdown containerStyle={styles.input}
        label='Vehicle Type'
        data={data}
        />
        <Dropdown containerStyle={styles.input}
        label='Vehicle Model'
        data={data}
        />
        <TextInput
            placeholder="Color"
            placeholderTextColor="#666666"
            onChangeText={(text) => this.handleChange({prop:'name', value:text})}
            style={styles.input}
        />
        <TextInput
            placeholder="Price"
            placeholderTextColor="#666666"
            onChangeText={(text) => this.handleChange({prop:'name', value:text})}
            style={styles.input}
        />
        <TextInput style={styles.input} placeholder="Purchase At" value={this.state.puchase_at ? moment(this.state.puchase_at).format('YYYY-MM-DD') : ''} onFocus={this.showDatePicker} />
        <DateTimePickerModal
        date={this.state.puchase_at ? new Date(this.state.puchase_at) : new Date()}
        isVisible={this.state.show}
        mode="date"
        onConfirm={this.handleConfirm}
        onCancel={this.hideDatePicker}
        />
        <TextInput
            placeholder="Seller Name"
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

export default Purchase;

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
    color: '#05375a'
  }
});
