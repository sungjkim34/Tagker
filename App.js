import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { LoggedOutNavigator } from './components/LoggedOut/LoggedOutNavigator';
import { MainLoggedInNavigator } from './components/LoggedIn/MainLoggedInNavigator';
import Home from './components/LoggedIn/Home';
import AuthService from './services/AuthService';
import UserService from './services/UserService';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: false,
      user: {
        profilePicture: 'http://www.freeiconspng.com/uploads/profile-icon-9.png',
        name: 'Name Placeholder',
        email: 'Email Placeholder',
        username: 'Username Placeholder',
        tagNumber: 'TagNumber Placeholder',
        tagState: 'UN',
        carInfo: 'CarInfo Placeholder',
        userId: 'UserId Placeholder'
      },
      // usersList: [],
      error: ''
    }
  }
  
  editUser = (editedField) => {
    console.log(editedField);
    this.setState({user: {...this.state.user, ...editedField}});
  }

  login = (username, password) => {
    // TODO: Remove hardcoded username and password
    // username = 'jay';
    // password = 'password';
    UserService.getUserInfoFromUsername(username)
      .then(userInfo => this.setState({user: {...this.state.user, ...userInfo}}))
      .catch(err => console.log(err));
    AuthService.getEmail(username)
      .then(email => AuthService.authLogin(email, password)
                      .then(res => this.setState({isLoggedIn: true})))
                      .catch(err => this.setState({error: err.toString().replace('Error: ', '')}))
      .catch(err => this.setState({error: err}));
  }

  register = (userInfo) => {
    AuthService.register(userInfo.email, userInfo.password)
      .then(res => {
        AuthService.updateUser(res.uid, userInfo);
        this.login(userInfo.username, userInfo.password);
      })
      .catch(err => this.setState({error: err.toString().replace('Error: ', '')}));
  }

  logout = () => {
    // TODO: Logout of firebase
    this.setState({
      ...this.state,
      isLoggedIn: false,
      user: {
        profilePicture: 'http://www.freeiconspng.com/uploads/profile-icon-9.png',
        name: 'Name Placeholder',
        email: 'Email Placeholder',
        username: 'Username Placeholder',
        tagNumber: 'TagNumber Placeholder',
        tagState: 'UN',
        carInfo: 'CarInfo Placeholder',
        userId: 'UserId Placeholder'
      },
    });
  }

  clearError = () => {
    this.setState({error: ''});
  }

  render() {
    return (
      this.state.isLoggedIn ?
        <MainLoggedInNavigator screenProps={
          {
            editUser: (editedField) => this.editUser(editedField),
            logout: () => this.logout(),
            user: this.state.user,
          }}/>
                :
        <LoggedOutNavigator screenProps={
          { 
            login: (username, password) => this.login(username, password),
            register: (userInfo) => this.register(userInfo),
            clearError: () => this.clearError(),
            error: this.state.error
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
