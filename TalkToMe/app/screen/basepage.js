import React from 'react';
import { View,StyleSheet, Text,Button } from 'react-native';

import {CommCss} from '../config/theme'
import {LocalStorage} from '../common/utils'


export default class MainScreen extends React.Component {
  static navigationOptions = {
      headerStyle: {
        backgroundColor: '#2F95D6'
      },
      headerTitleStyle: {
        fontSize: 18,
        color:'#FFF'
      }
  }
  render() {
    return (
      <View></View>
    );
  }
}