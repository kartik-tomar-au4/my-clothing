import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAlirCBz4CC1UckiOTFM7hMiVF-ni5b9CE",
    authDomain: "my-clothing-f5f57.firebaseapp.com",
    databaseURL: "https://my-clothing-f5f57.firebaseio.com",
    projectId: "my-clothing-f5f57",
    storageBucket: "my-clothing-f5f57.appspot.com",
    messagingSenderId: "259091854377",
    appId: "1:259091854377:web:a20a8983150c8631c0d838",
    measurementId: "G-KY41WB9KYK"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;