import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Constants } from 'expo';
import { Avatar } from 'react-native-elements';

export default class EditProfilePicture extends React.Component {

    constructor(props){
        super();
        this.state = {
            profilePicture: props.screenProps.user.profilePicture
        };
    }

    saveProfilePicture = () => {
        this.props.screenProps.editUser({profilePicture: this.state.profilePicture});
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{flex:6, alignItems: 'center'}}>
                    <Text>Profile Picture</Text>
                    <Avatar
                        xlarge
                        rounded
                        source={{uri: this.state.profilePicture}}
                        onPress={() => console.log("Clicked Profile")}
                        activeOpacity={0.7}
                    />
                    {/* <TextInput value={this.state.carInfo} autoCorrect={false} onChangeText={(text)=>this.setState({carInfo: text})} style={styles.textInput} placeholder="Car Info"/> */}
                </View>
                <TouchableHighlight onPress={()=>this.saveProfilePicture()} style={styles.saveButton}>
                    <Text style={styles.buttonText}>SAVE</Text>
                </TouchableHighlight>
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
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    saveButton: {
        flex: 1,
        backgroundColor: '#00A6FB',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
