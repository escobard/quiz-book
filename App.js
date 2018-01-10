import React, { Component } from 'react'
import { 
  StyleSheet,
  Text, 
  View,
} from 'react-native'
import {createStore} from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'

export default class App extends Component {
  componentDidMount(){
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}