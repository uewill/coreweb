import React from 'react';
import { View, Text,Button,AsyncStorage } from 'react-native';


export default class MainScreen extends React.Component { 
static navigationOptions = {
  tabBarLabel:'设置',
  title:'设置'
}
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Setting Screen</Text>
  
      </View>
    );
  }
}
