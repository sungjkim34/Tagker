import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Constants } from 'expo';

export default class Profile extends React.Component {
  constructor(){
    super();
    this.state = {
      name: 'Jay Kim',
      username: 'umja345',
      tagNumber: '',
      profilePicture: ''
    }
  }

  logout = () => {
    this.props.screenProps.logout();
  }

  editProfile = () => {
    this.props.navigation.navigate('EditProfile');
  }

  editSettings = () => {
    this.props.navigation.navigate('EditSettings');
  }

  render() {
    const { name, username, profilePicture } = this.props.screenProps.user;

    return (
      <View style={styles.mainContainer}>
        <TouchableHighlight underlayColor='#C7C7C7' style={styles.profileContainer} onPress={()=>{this.editProfile()}}>
          <View style={styles.row}>
            <Image style={{width: 50, height: 50, margin: 20}} source={{uri: profilePicture}}/>
            <View style={{justifyContent:'center'}}>
              <Text>{name}</Text>
              <Text style={{color: '#B2B2B2'}}>{username}</Text>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor='#C7C7C7' style={styles.buttonContainer} onPress={()=>this.editSettings()}>
          <View style={styles.row}>
            <Icon name="cog" style={{marginLeft: 20, marginRight: 20}} size={20}/>
            <Text>Settings</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor='#C7C7C7' style={styles.buttonContainer} onPress={()=>this.logout()}>
          <View style={styles.row}>
            <Icon name="sign-out" style={{marginLeft: 20, marginRight: 20}} size={20}/>
            <Text>Log Out</Text>
          </View>
        </TouchableHighlight>

        <View style={{flex: 6}}></View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#E5E5E5'
    backgroundColor: '#E2E8ED'
  },
  profileContainer: {
    flex: 1.5,
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    // marginTop: 10,
    marginBottom: 15
  },
  row: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent:'center',
    backgroundColor: '#FFFFFF'
  }
});
