import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Constants } from 'expo';

export default class EditName extends React.Component {

    constructor(props){
        super();
        this.state = {
            name: props.screenProps.user.name
        };
    }

    saveName = () => {
        this.props.screenProps.editUser({name: this.state.name});
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{flex:6, alignItems: 'center'}}>
                    <Text>Name:</Text>
                    <TextInput underlineColorAndroid='transparent' value={this.state.name} autoCorrect={false} onChangeText={(text)=>this.setState({name: text})} style={styles.textInput} placeholder="Full Name"/>
                </View>
                <TouchableHighlight onPress={()=>this.saveName()} style={styles.saveButton}>
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
