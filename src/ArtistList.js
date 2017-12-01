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

	render() {
		return (
			<FlatList
				data={this.state.dataSource}
				renderItem={({ item }) => <ArtistBox artist={item} />}
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
