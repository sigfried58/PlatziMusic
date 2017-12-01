import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ArtistBox from './ArtistBox';

export default class ArtistList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: this.props.artists
		};
	}

	componentDidMount() {
		this.updateDataSource(this.props.artists);
	}

	componentWillReceiveProps(newProps) {
		if (newProps.artists !== this.props.artists) {
			this.updateDataSource(newProps.artists);
		}
	}

	updateDataSource = data => {
		this.setState({
			dataSource: data
		});
	};

	handlePress(artist) {
		console.warn('artist', artist);
		Actions.artistDetail({ artist });
	}

	render() {
		return (
			<FlatList
				data={this.state.dataSource}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => this.handlePress(item)}
						>
							<ArtistBox artist={item} />
						</TouchableOpacity>
					);
				}}
				keyExtractor={(item, index) => index}
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
