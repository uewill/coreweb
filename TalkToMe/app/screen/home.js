import React from 'react';
import { View,StyleSheet, Text,Button } from 'react-native';
import { createStackNavigator,StackNavigator} from 'react-navigation';


import IndexScreen from './films/index'
import FilmDetailScreen from './films/details'

export default StackNavigator({
  Home: {
    screen: IndexScreen
  },
  Detail:{
    screen:FilmDetailScreen
  }
});
