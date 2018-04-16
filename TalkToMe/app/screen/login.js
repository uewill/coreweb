import React from 'react';
import { View, Text,Button } from 'react-native';
import {LocalStorage} from '../common/utils'

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
    await LocalStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}


