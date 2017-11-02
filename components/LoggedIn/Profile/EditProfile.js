import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Constants } from 'expo';

export default class EditProfile extends React.Component {

  render() {
    const { name, username, tagNumber, carInfo, profilePicture } = this.props.screenProps.user;
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <TouchableHighlight underlayColor='#C7C7C7' style={styles.buttonContainer} onPress={()=>navigate('EditProfilePicture')}>
            <View style={styles.row}>
              <View style={{justifyContent: 'center', flex: 4}}>
                <Text>Profile Photo</Text>
              </View>
              <Image style={{width: 50, height: 50}} source={{uri: profilePicture}}/>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#C7C7C7' style={styles.buttonContainer} onPress={()=>navigate('EditName')}>
            <View style={styles.row}>
              <Text style={{flex:4}}>Name</Text>
              <Text style={{color:'#B2B2B2'}}>{name}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#C7C7C7' style={styles.buttonContainer} onPress={()=>navigate('EditTag')}>
            <View style={styles.row}>
              <Text style={{flex:4}}>License Tag #</Text>
              <Text style={{color:'#B2B2B2'}}>{tagNumber}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#C7C7C7' style={styles.buttonContainer} onPress={()=>navigate('EditCar')}>
            <View style={styles.row}>
              <Text style={{flex:4}}>Car Info</Text>
              <Text style={{color:'#B2B2B2'}}>{carInfo}</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{flex:6}}>
        </View>
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
    backgroundColor: '#E5E5E5'
  },
  subContainer: {
    flex: 4,
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    marginTop: 10
  },
  row: {
    flexDirection: 'row'
  },
  logoutContainer: {
    flex: 1,
    marginTop: 15,
    alignSelf: 'stretch',
    justifyContent:'center',
    backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    padding: 20
  }
});
