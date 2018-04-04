import React from 'react';
import { View, Text,Button,AsyncStorage } from 'react-native';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header:null
    }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen111</Text>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}


