import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LogIn from './source/screens/auth/LogIn'
import SignUp from './source/screens/auth/SignUp'

export default class App extends Component {
  render() {
    return (
      <View>
        <LogIn />
      </View>
    )
  }
}
