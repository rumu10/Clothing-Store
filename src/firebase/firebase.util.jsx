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


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  //console.log(firestore.doc('users/34bfgbv'));

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

  export const auth= firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
