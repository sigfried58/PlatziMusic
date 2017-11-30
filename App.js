import React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './ArtistBox';

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

    return (
      <ScrollView style={styles.container}>
        {Array(500)
          .fill(artist)
          .map(artist => {
            return <ArtistBox artist={artist} />;
          })}
      </ScrollView>
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
