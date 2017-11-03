import React from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import { SearchBar, List, ListItem } from 'react-native-elements'
import UserService from '../../../services/UserService';

export default class Search extends React.Component {
  constructor(){
    super();
    this.state = {
      searchResults: [],
      usersList: []
    }
  }
  
  componentDidMount(){
    UserService.getListOfUsers()
      .then(res => this.setState({usersList: res, searchResults: res}))
      .catch(err => console.log(err))
  }

  search = (text) => {
    const searchResults = (text === '') ? this.state.usersList : this.state.usersList.filter(result => result.name.toLowerCase().includes(text.toLowerCase()) || result.tagNumber.toLowerCase().includes(text.toLowerCase()));
    this.setState({searchResults});
  }

  handlePressUser = (user) => {
    Keyboard.dismiss();
    this.props.navigation.navigate('ViewProfile', user);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={{alignSelf:'stretch'}}>
          <SearchBar
            round
            lightTheme
            autoCorrect={false}
            onChangeText={(text)=>this.search(text)}
            placeholder='Search' />
        </View>
        <View style={styles.contentContainer}>
          <List marginTop={0}>
            {
              this.state.searchResults.map((user, i) => (
                <ListItem
                  key={user.userId}
                  title={user.name}
                  subtitle={user.tagNumber}
                  onPress={()=>this.handlePressUser(user)}
                />
              ))
            }
          </List>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E2E8ED'
  },
  contentContainer: {
    flex: 7,
    alignSelf:'stretch'
  }
});
