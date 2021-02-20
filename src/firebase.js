import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyDkCTvLLyIigUcThFt5_vJQ6NeASxr57SQ",
	authDomain: "tinder-clone-87a90.firebaseapp.com",
	databaseURL: "https://tinder-clone-87a90-default-rtdb.firebaseio.com",
	projectId: "tinder-clone-87a90",
	storageBucket: "tinder-clone-87a90.appspot.com",
	messagingSenderId: "443718598287",
	appId: "1:443718598287:web:515b1dd932fb4a76b3fafa",
	measurementId: "G-8MF6PYPTDX",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
export default database;
