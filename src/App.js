import React, { Component } from 'react';
import { View, Text } from 'reactive-native';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers';

class App extends Component {
  render() {
    render (
      <Provider store={createStore(reducers)}>
        <View>
         <Text>
          Hello!
         </Text>
        </View>
      </Provider>
    )
  }
}

export default App
