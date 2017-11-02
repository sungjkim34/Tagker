import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Messages extends React.Component {
  constructor(){
    super();
  }

  logout = () => {
    this.props.screenProps.logout();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Messages</Text>
        <Text onPress={()=>this.logout()}>Log out</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
