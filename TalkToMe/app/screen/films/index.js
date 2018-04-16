import React from 'react';
import { View,StyleSheet, Text,Button } from 'react-native';

import {CommCss} from '../../config/theme'
import {LocalStorage} from '../../common/utils'


export default class MainScreen extends React.Component {
  static navigationOptions = {
      tabBarLabel:'首页',
      title:'首页',
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
      <View style={styles.container}>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }
  _showMoreApp = () => {
    this.props.navigation.navigate('Detail');
  };

  _signOutAsync = async () => {
    await LocalStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
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
    color: CommCss.wordColor,
    marginBottom: 5,
  },
});
