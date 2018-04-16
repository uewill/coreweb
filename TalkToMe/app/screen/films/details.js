import React from 'react';
import { View,StyleSheet, Text,Button } from 'react-native';

import BasePage from '../basepage';
import {LocalStorage} from '../../common/utils'
import {CommCss} from '../../config/theme'


export default class FilmDetailScreen extends BasePage {
    static navigationOptions = {
        headerTitle:'详情',
        ...props
    }  
  render() {
    return (
      <View style={styles.container}>
        <Button title="film details" onPress={this._signOutAsync} />
      </View>
    );
  }
  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
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
