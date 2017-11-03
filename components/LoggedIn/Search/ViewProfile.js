import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar, List, ListItem } from 'react-native-elements';

export default class ViewProfile extends React.Component {
    
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: navigation.state.params.name
        }
    }

    render() {
        const { userId, name, tagNumber, tagState, username, email } = this.props.navigation.state.params;
        return (
            <View style={styles.mainContainer}>
                <Text>{name}</Text>
                <Text>{tagNumber}</Text>
                <Text>{tagState}</Text>
                <Text>{username}</Text>
                <Text>{email}</Text>
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
