import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Constants } from 'expo';

export default class EditSettings extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Edit Settings</Text>
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
  row: {
    flexDirection: 'row'
  }
});
