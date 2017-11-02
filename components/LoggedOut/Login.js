import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TextInput } from 'react-native';
import AuthService from '../../services/AuthService'

export default class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      error: ''
    };
  }

  login = () => {
    const { username, password } = this.state;
    // if(AuthService.authLogin(username, password))
      this.props.screenProps.login();
    // this.setState({error: 'Invalid credentials'});
  }

  cancel = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
            <Text style={styles.logoText}>Tagker</Text>
            <Text style={{color:'#FF5E5B', fontWeight:'bold'}}>{this.state.error}</Text>
            <TextInput underlineColorAndroid='transparent' onChangeText={(text)=>this.setState({username: text, error: ''})} style={styles.textInput} autoCorrect={false} autoCapitalize='none' placeholder="Username"/>
            <TextInput underlineColorAndroid='transparent' onChangeText={(text)=>this.setState({password: text, error: ''})} style={styles.textInput} secureTextEntry={true} placeholder="Password"/>
            <Text style={{color: '#B2B2B2'}}><Text onPress={()=>console.log('forgot username')}>Forgot Username</Text> | <Text onPress={()=>console.log('forgot password')}>Forgot Password</Text> </Text>
        </View>
        <TouchableHighlight onPress={()=>this.login()} style={styles.loginButton}>
            <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>this.cancel()} style={styles.cancelButton}>
            <Text style={styles.buttonText}>CANCEL</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#D8D8D8',
    padding: 10,
    margin: 5,
    height: 50,
    width: 250
  },
  contentContainer: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  logoText: {
    fontSize: 65,
    color: '#4c4c4c',
    marginBottom: 5,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  loginButton: {
    flex: 1,
    backgroundColor: '#00A6FB',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#FF5E5B',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
});
