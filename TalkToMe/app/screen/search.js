import React from 'react';
import { View, Text,Button,AsyncStorage } from 'react-native';
import { createStackNavigator,StackNavigator} from 'react-navigation';
import BaseHeader from '../components/header/baseheader'

class MainScreen extends React.Component {
  static navigationOptions = {
       tabBarLabel:'发现',
       title:'发现',
     header:<BaseHeader/>
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Search Screen</Text>
      </View>
    );
  }
}
const main = <MainScreen/>;
const SearchStack= StackNavigator({
  Login: {
  screen:MainScreen,
  }
});

export default SearchStack;
