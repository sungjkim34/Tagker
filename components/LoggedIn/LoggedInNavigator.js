import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import Profile from './Profile/Profile';
import Messages from './Messages';
import Search from './Search/Search';

export const LoggedInNavigator = TabNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
        headerTitle: 'Home',
        tabBarIcon: ({tintColor}) => <Icon name="home" color={tintColor} size={24}/>
      }
    },
    Messages: {
      screen: Messages,
      navigationOptions: {
        headerStyle: { marginTop: (Platform.OS === 'ios') ? 0 : Constants.statusBarHeight },
        headerTitle: 'Messages',
        tabBarIcon: ({tintColor}) => <Icon name="commenting" color={tintColor} size={24}/>
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        headerStyle: { marginTop: (Platform.OS === 'ios') ? 0 : Constants.statusBarHeight },
        headerTitle: 'Search',
        tabBarIcon: ({tintColor}) => <Icon name="search" color={tintColor} size={24}/>
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        header: null,
        headerTitle: 'Profile',
        tabBarIcon: ({tintColor}) => <Icon name="user" color={tintColor} size={24}/>
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#00A6FB',
      inactiveTintColor: '#b5b5b5',
      showIcon: 'true',
      labelStyle: {
        fontSize: 10,
      },
      style: {
        backgroundColor: '#fff',
        height: (Platform.OS === 'ios') ? 50 : 45,
      },
      indicatorStyle: {
        backgroundColor: '#00A6FB'
      }
    }
});