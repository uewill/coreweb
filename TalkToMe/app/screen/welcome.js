import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

import {LocalStorage} from '../common/utils'


export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header:null
  }
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    var promiseWelcome = new Promise(function(resolve, reject) {
      setTimeout(resolve, 1000);//延迟3秒
    });
    var promiseToken = LocalStorage.getItem('userToken');
    const userToken=  await Promise.all([promiseToken,promiseWelcome]);
   // const userToken = await LocalStorage.getItem('userToken');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken[0] ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
