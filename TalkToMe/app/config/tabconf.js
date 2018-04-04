import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator,StackNavigator,SwitchNavigator,TabNavigator,TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoginScreen from '../screen/login'
import WelcomeScreen from '../screen/welcome'
import HomeScreen from '../screen/home'
import SearchScreen from '../screen/search'
import SettingScreen from '../screen/setting'

const WelcomeStack= StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
  }
});

const LoginStack= StackNavigator({
  Login: {
    screen: LoginScreen,
  }
});

const AppStack= TabNavigator({
  Home: {
      screen: HomeScreen,
    },
    Search: {
      screen: SearchScreen,
    },  
    Setting: {
      screen: SettingScreen,
    }  
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`
        } else if (routeName === 'Search') {
          iconName = `search`
        }else if (routeName === 'Setting') {
          iconName = `cog`
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    backBehavior:true
  });

 export  const EntryScreen= SwitchNavigator(
    {
      Welcome: WelcomeStack,
      Auth: LoginStack,
      App:  AppStack,
    },
    {
      initialRouteName: 'Welcome',
    }
);
