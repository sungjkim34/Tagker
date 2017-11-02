import React from 'react';
import { Platform } from 'react-native';
import { Constants } from 'expo';
import { LoggedInNavigator } from './LoggedInNavigator';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import EditProfile from './Profile/EditProfile';
import EditSettings from './Profile/EditSettings';
import EditName from './Profile/EditName';
import EditTag from './Profile/EditTag';
import EditCar from './Profile/EditCar';
import EditProfilePicture from './Profile/EditProfilePicture';
import ViewProfile from './Search/ViewProfile';

export const RootNavigator = StackNavigator({
    Home: {
      screen:LoggedInNavigator,
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: {
        title: 'Edit Profile',
        headerStyle: { marginTop: (Platform.OS === 'ios') ? 0 : Constants.statusBarHeight }
      }
    },
    EditSettings: {
      screen: EditSettings,
      navigationOptions: {
        title: 'Edit Settings',
        headerStyle: { marginTop: (Platform.OS === 'ios') ? 0 : Constants.statusBarHeight }
      }
    },
    EditName: {
      screen: EditName,
      navigationOptions: {
        title: 'Edit Name',
        headerStyle: { marginTop: (Platform.OS === 'ios') ? 0 : Constants.statusBarHeight }
      }
    },
    EditTag: {
      screen: EditTag,
      navigationOptions: {
        title: 'Edit Tag',
        headerStyle: { marginTop: (Platform.OS === 'ios') ? 0 : Constants.statusBarHeight }
      }
    },
    EditCar: {
      screen: EditCar,
      navigationOptions: {
        title: 'Edit Car Info',
        headerStyle: { marginTop: (Platform.OS === 'ios') ? 0 : Constants.statusBarHeight }
      }
    },
    EditProfilePicture: {
      screen: EditProfilePicture,
      navigationOptions: {
        title: 'Edit Profile Picture',
        headerStyle: { marginTop: (Platform.OS === 'ios') ? 0 : Constants.statusBarHeight }
      }
    },
    ViewProfile: {
      screen: ViewProfile,
      navigationOptions: {
        // title: 'View Profile',
        headerStyle: { marginTop: (Platform.OS === 'ios') ? 0 : Constants.statusBarHeight }
      }
    }
  },
  {
    // headerMode: 'none',
    // labelStyle: {
    //   fontSize: 12,
    // }
});