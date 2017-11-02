import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { LoggedOutNavigator } from './components/LoggedOut/LoggedOutNavigator';
import { RootNavigator } from './components/LoggedIn/MainLoggedInNavigator';
import Home from './components/LoggedIn/Home';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: false,
      user: {
        profilePicture: 'http://www.freeiconspng.com/uploads/profile-icon-9.png',
        name: 'Jay Kim',
        username: 'umja345',
        tagNumber: 'JAY3494',
        tagState: 'GA',
        carInfo: 'Hyundai Elantra'
      }
    }
  }
  
  editUser = (editedField) => {
    this.setState({user: {...this.state.user, ...editedField}});
  }

  login = () => {
    // Handle login. If successful, login.
    this.setState({isLoggedIn: true});
  }

  register = () => {
    // Handle register. If successful, login.
    this.setState({isLoggedIn: true});
  }

  logout = () => {
    this.setState({isLoggedIn: false});
  }

  render() {
    return (
      this.state.isLoggedIn ?
        <RootNavigator screenProps={
          {
            editUser: (editedField) => this.editUser(editedField),
            logout: () => this.logout(),
            user: this.state.user
          }}/>
                :
        <LoggedOutNavigator screenProps={
          { 
            login: () => this.login(),
            register: () => this.register()
          }}/>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 50,
    color: '#4c4c4c'
  },
  contentContainer: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topContainer: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  loginButton: {
    flex: 1,
    backgroundColor: '#00A6FB',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  registerButton: {
    flex: 1,
    backgroundColor: '#FF5E5B',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
