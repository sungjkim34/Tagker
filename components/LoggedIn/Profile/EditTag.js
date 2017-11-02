import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Constants } from 'expo';

export default class EditTag extends React.Component {

    constructor(props){
        super();
        this.state = {
            tagNumber: props.screenProps.user.tagNumber,
            tagState: props.screenProps.user.tagState,
            error: ''
        };
    }

    saveTag = () => {
        this.props.screenProps.editUser({tagNumber: this.state.tagNumber, tagState: this.state.tagState});
        this.props.navigation.goBack();
    }

    inputTagNumber = (text) => {
        this.setState({error: '', tagNumber: text});
    }

    inputTagState = (text) => {
        this.setState({error: '', tagState: text.replace(/[^A-Za-z]+/g, '')});
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{flex:6, alignItems: 'center'}}>
                    <Text>License Tag #:</Text>
                    <TextInput underlineColorAndroid='transparent' autoCorrect={false} autoCapitalize='none' onChangeText={text=>this.inputTagNumber(text)} value={this.state.tagNumber} style={styles.textInput} maxLength={8} placeholder="License Plate #"/>
                    <Text>State:</Text>
                    <TextInput underlineColorAndroid='transparent' value={this.state.tagState} onChangeText={text=>this.inputTagState(text)} style={styles.tagInput} maxLength={2} placeholder="State"/>
                </View>
                <TouchableHighlight onPress={()=>this.saveTag()} style={styles.saveButton}>
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
