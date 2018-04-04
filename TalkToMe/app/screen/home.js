import React from 'react';
import { View,StyleSheet, Text,Button,AsyncStorage } from 'react-native';
import {commcss} from '../config/theme'

import Icon from 'react-native-vector-icons/FontAwesome';

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Main Screen11</Text>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
        <Icon name="home" size={30} color="#900" />
      </View>
    );
  }
  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: commcss.wordColor,
    marginBottom: 5,
  },
});
