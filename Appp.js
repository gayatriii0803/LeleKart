import { Text, View } from 'react-native'
import React, { Component } from 'react'
import StackNavigator from './src/navigators/StackNavigation'

export class Appp extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StackNavigator/>
      </View>
    )
  }
}

export default Appp