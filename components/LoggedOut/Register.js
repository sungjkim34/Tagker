import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements'

export default class Register extends React.Component {
  constructor(){
    super();
    this.state = {
        name: '',
        username: '',
        email: '',
        password: '',
        tagNumber: '',
        tagState: '',
        showPassword: false,
        error: ''
    };
  }

  inputEmail = (text) => {
      this.setState({error: '', email: text});
  }

  inputTagNumber = (text) => {
      this.setState({error: '', tagNumber: text.toUpperCase()});
  }

  inputState = (text) => {
      this.setState({error: '', tagState: text.replace(/[^A-Za-z]+/g, '').toUpperCase()});
  }

  inputName = (text) =>
  {
      this.setState({error: ''});
      this.setState({name: text.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()).replace(/[^A-Za-z\s]+/g, '')})
  }

  register = () => {
      const { email, password, name, username, tagNumber, tagState } = this.state;
      const userInfo = { email, password, name, username, tagNumber, tagState };
    //   const newName = name.charAt(name.length-1) === ' ' ? name.substring(0, name.length-1) : name;
    //   if(newName.split(' ').length <= 1){
    //       this.setState({error: 'Please enter full name.'})
    //   }
      this.props.screenProps.register(userInfo);
  }

  cancel = () => {
      this.props.screenProps.clearError();
      this.props.navigation.goBack();
  }

  render() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.contentContainer}>
                <Text style={styles.logoText}>Tagker</Text>
                <Text style={{color:'#FF5E5B', fontWeight:'bold'}}>{this.props.screenProps.error}</Text>
                <TextInput value={this.state.name} autoCorrect={false} onChangeText={text=>this.inputName(text)} style={styles.textInput} placeholder="Full Name"/>
                <TextInput style={styles.textInput} onChangeText={text=>this.setState({email: text})} autoCapitalize='none' autoCorrect={false} placeholder="Email"/>
                <TextInput style={styles.textInput} onChangeText={text=>this.setState({username: text})} autoCorrect={false} autoCapitalize='none' autoCorrect={false} placeholder="Username"/>
                <TextInput style={styles.textInput} onChangeText={text=>this.setState({password: text})} secureTextEntry={!this.state.showPassword} placeholder="Password"/>
                <CheckBox checkedColor='#B2B2B2' checked={this.state.showPassword} onPress={()=>this.setState({showPassword: !this.state.showPassword})} title="Show Password" textStyle={{color:'#B2B2B2'}} style={{backgroundColor: '#FFFFFF'}}/>
                <View style={styles.row}>
                    <TextInput width={180} autoCorrect={false} autoCapitalize='none' onChangeText={text=>this.inputTagNumber(text)} value={this.state.tagNumber} style={styles.tagInput} maxLength={8} placeholder="License Plate #"/>
                    <TextInput value={this.state.tagState} onChangeText={text=>this.inputState(text)} style={styles.tagInput} maxLength={2} placeholder="State"/>
                </View>
            </View>
            <TouchableHighlight onPress={()=>this.register()} style={styles.loginButton}>
                <Text style={styles.buttonText}>REGISTER</Text>
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
    row: {
        flexDirection: 'row'
    },
    contentContainer: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    loginButton: {
        flex: 1,
        backgroundColor: '#00A6FB',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoText: {
        fontSize: 65,
        color: '#4c4c4c',
        marginBottom: 5,
        fontWeight: 'bold',
        fontStyle: 'italic'
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
    tagInput: {
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#D8D8D8',
        padding: 10,
        margin: 5,
        height: 50
    },
});
