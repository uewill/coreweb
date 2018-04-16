import React from 'react';
import { View,StyleSheet, Text,Button } from 'react-native';
import {CommCss} from '../../config/theme'

export default class BaseHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textColor}>Title</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    height:48,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:CommCss.primaryColor,
  },
  textColor:{
    color:'#fff'
  }
});
