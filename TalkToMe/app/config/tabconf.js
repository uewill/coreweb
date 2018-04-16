import React from 'react';
import { View, Text,StyleSheet,ScrollView } from 'react-native';
import { createStackNavigator,StackNavigator,SwitchNavigator,TabNavigator,TabBarBottom,DrawerNavigator,DrawerItems } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import {CommCss} from './theme'
import LoginScreen from '../screen/login'
import WelcomeScreen from '../screen/welcome'
import HomeScreen from '../screen/home'
import SearchScreen from '../screen/search'
import SettingScreen from '../screen/setting'
import CategoryScreen from '../screen/category'

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
      navigationOptions: ({ navigation }) => ({
        title: `首页`,
      })
    }, 
  Category: {
      screen: CategoryScreen,
    },  
  Search: {
      screen: SearchScreen,
    },  
  Mine: {
      screen: SettingScreen,
    }  
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `circle-o`
        } else if (routeName === 'Search') {
          iconName = `search`
        }else if (routeName === 'Mine') {
          iconName = `cog`
        }else if(routeName=="Category"){
          iconName='bars'
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: CommCss.PrimaryColor,
      inactiveTintColor: 'gray',
      style: {backgroundColor:'white'},
      pressColor: 'gray',
      pressOpacity: 0.8,
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    backBehavior:true
  });

  
const AppDrawer = DrawerNavigator({
  BaseHome:{
    screen:AppStack
  },
},
{
  contentComponent: props => {
    console.log('contentComponent');
    console.log(props);
    return (
        <ScrollView>
            <View>
                <View style={{paddingVertical: 20, paddingHorizontal: 15, backgroundColor:'#000'}}>
                    <Text style={{color:'#FFF'}}>ser Name</Text>
                </View>
                <DrawerItems {...props} />
            </View>
        </ScrollView>
    )
  }
});

 export const EntryScreen= SwitchNavigator(
    {
      Welcome: WelcomeStack,
      Auth: LoginStack,
      App:  AppDrawer,
    },
    {
      initialRouteName: 'Welcome',
    }
);

const styles = StyleSheet.create({
  tabBarImage: {
      width: 24,
      height: 24,
  },
  tabBar: {
      backgroundColor: 'white',
  },
  tabBarLabel: {
      fontSize: 12,
  },
  tabBarItem: {
      height: 56,
  },
})