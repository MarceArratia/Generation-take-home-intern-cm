 // Initialize Firebase
import * as firebase from 'firebase';

const DB_CONFIG = {
    apiKey: "AIzaSyDYyQy8YEUepOHUbr_HBEF3aUDd-uziugo",
    authDomain: "storesfavorytes.firebaseapp.com",
    databaseURL: "https://storesfavorytes.firebaseio.com",
    projectId: "storesfavorytes",
    storageBucket: "storesfavorytes.appspot.com",
    messagingSenderId: "393673143639"
  };

  firebase.initializeApp(DB_CONFIG);

  export default firebase;

