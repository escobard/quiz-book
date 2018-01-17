import React, { Component } from 'react'
import { 
  StyleSheet,
  Text, 
  View,
} from 'react-native'
import {createStore} from 'redux'
import { Provider } from 'react-redux'

import reducer from './src/reducers'

import { colors } from './src/styles'

import { MainNavigator } from './src/components/Navigation'
import UdaciStatusBar from './src/components/Navigation/statusBar'

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <UdaciStatusBar backgroundColor={colors.purple} barStyle='light-content' />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

// this creates our styles for specific views
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
