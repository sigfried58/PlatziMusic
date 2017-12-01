import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import HomeView from './src/HomeView';
import ArtistDetailView from './src/ArtistDetailView';

export default class App extends React.Component {
  render() {
    //const isAndroid = Platform.OS === 'android'
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={HomeView} hideNavBar />
          <Scene
            key="artistDetail"
            component={ArtistDetailView}
            hideNavBar={false}
          />
        </Stack>
      </Router>
    );
  }
}

