import React from 'react';
import { View, Text,Button,AsyncStorage } from 'react-native';


export default class CategoryScreen extends React.Component { 
static navigationOptions = {
  title:'分类',
}
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Setting Screen</Text>
  
      </View>
    );
  }
}
