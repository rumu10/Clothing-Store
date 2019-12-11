import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyANXYRx5Gzd6hUL7SI0sFksl9mRzYhtIPA",
    authDomain: "clothing-db-62c35.firebaseapp.com",
    databaseURL: "https://clothing-db-62c35.firebaseio.com",
    projectId: "clothing-db-62c35",
    storageBucket: "clothing-db-62c35.appspot.com",
    messagingSenderId: "866020751135",
    appId: "1:866020751135:web:4e7c138225d2d40bafa22a",
    measurementId: "G-1XL805D83X"
  };

  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
