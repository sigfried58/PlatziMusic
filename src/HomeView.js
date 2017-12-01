import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ArtistList from './ArtistList';
import { getArtists } from './api-client';

export default class HomeView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artists: []
		};
	}

	componentDidMount() {
		getArtists().then(data => this.setState({ artists: data }));
	}

	render() {
		const artists = this.state.artists;

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
