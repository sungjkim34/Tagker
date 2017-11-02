import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar, List, ListItem } from 'react-native-elements'

export default class Search extends React.Component {
  constructor(){
    super();
    this.state = {
      searchResults: [
        {
          id: 1,
          name: 'Jay Kim',
          tagNumber: 'PDE3021',
        },
        {
          id: 2,
          name: 'Amy Wang',
          tagNumber: 'MU3W030',
        },
      ],
      usersList: [
        {
          id: 1,
          name: 'Jay Kim',
          tagNumber: 'PDE3021',
        },
        {
          id: 2,
          name: 'Amy Wang',
          tagNumber: 'MU3W030',
        },
      ]
    }
  }

  search = (text) => {
    const searchResults = (text === '') ? this.state.usersList : this.state.usersList.filter(result => result.name.toLowerCase().includes(text.toLowerCase()) || result.tagNumber.toLowerCase().includes(text.toLowerCase()));
    this.setState({searchResults});
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={{alignSelf:'stretch'}}>
          <SearchBar
            round
            lightTheme
            onChangeText={(text)=>this.search(text)}
            placeholder='Search' />
        </View>
        <View style={styles.contentContainer}>
          <List marginTop={0}>
            {
              this.state.searchResults.map((user, i) => (
                <ListItem
                  key={i}
                  title={user.name}
                  subtitle={user.tagNumber}
                  onPress={()=>this.props.navigation.navigate('ViewProfile', user)}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E2E8ED'
  },
  contentContainer: {
    flex: 7,
    alignSelf:'stretch'
  }
});
