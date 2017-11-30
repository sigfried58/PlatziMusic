import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ArtistList from './src/ArtistList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const artist = {
      image: 'http://mp3teca.com/-/2014/02/daddy-yankee.jpg',
      name: 'Daddy Yankee',
      likes: 200,
      comments: 140
    };

    const artists = Array(500).fill(artist);
    return (
      <View style={styles.container}>
        <ArtistList artists={artists} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50
  }
});
