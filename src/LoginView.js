import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FBSDK, { LoginButton, AccessToken } from 'react-native-fbsdk';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

// Initialize Firebase
const config = {
	apiKey: 'AIzaSyB9D3O6dWlTFI_ihh5pibtsL9Xc9papYn4',
	authDomain: 'platzimusic-60711.firebaseapp.com',
	databaseURL: 'https://platzimusic-60711.firebaseio.com',
	projectId: 'platzimusic-60711',
	storageBucket: 'platzimusic-60711.appspot.com',
	messagingSenderId: '621308924854'
};
firebase.initializeApp(config);

const { FacebookAuthProvider } = firebase.auth;
const firebaseAuth = firebase.auth();

export default class LoginView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			credential: null
		};
		this.logIn = this.logIn.bind(this);
	}

	authenticateUser(accessToken) {
		var prevUser = firebaseAuth.currentUser;
		const credential = FacebookAuthProvider.credential(accessToken);
		firebaseAuth
			.signInWithCredential(credential)
			.then(function(user) {
				console.log('Sign In Success', user);
				var currentUser = user;
				// Merge prevUser and currentUser data stored in Firebase.
				// Note: How you handle this is specific to your application

				// After data is migrated delete the duplicate user
				//return user
				/*	.delete()
					.then(function() {
						// Link the OAuth Credential to original account
						return prevUser.link(credential);
					})
					.then(function() {
						// Sign in with the newly linked credential
						return firebaseAuth.signInWithCredential(credential);
					});
				*/
			})
			.catch(function(error) {
				console.log('Sign In Error', error);
			});
	}

	async logIn() {
		const {
			type,
			token
		} = await Expo.Facebook.logInWithReadPermissionsAsync(
			'135141450529369',
			{
				permissions: ['public_profile', 'email']
			}
		);
		if (type === 'success') {
			// Get the user's name using Facebook's Graph API
			const response = await fetch(
				`https://graph.facebook.com/me?access_token=${token}`
			);
			this.authenticateUser(token);
			//Actions.home();
			//Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Bienvenido a PlatziMusic</Text>
				<Button onPress={this.logIn} title="Connect with Facebook" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightgray',
		justifyContent: 'center',
		alignItems: 'center'
	},
	welcome: {
		fontSize: 24,
		fontWeight: '600',
		marginBottom: 20
	}
});
