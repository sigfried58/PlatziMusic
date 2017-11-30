import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ArtistBox from './ArtistBox';

export default class ArtistList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: this.props.artists
		};
	}

	render() {
		return (
			<FlatList
				data={this.state.dataSource}
				renderItem={({ item }) => <ArtistBox artist={item} />}
			/>
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
