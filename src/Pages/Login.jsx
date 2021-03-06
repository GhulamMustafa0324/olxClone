import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyD8SlSK0y9E70rJExfZgtfSwoNRSINYINc",
  authDomain: "olx-clone-a4154.firebaseapp.com",
  databaseURL: "https://olx-clone-a4154.firebaseio.com",
  projectId: "olx-clone-a4154",
  storageBucket: "olx-clone-a4154.appspot.com",
  messagingSenderId: "415000918559",
  appId: "1:415000918559:web:39847c548c7e941b77732a",
  measurementId: "G-NVM0CLQM2Q"
};

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth;
export const provider = new firebase.auth.FacebookAuthProvider();
export const google_provider = new firebase.auth.GoogleAuthProvider()
export const database = firebase.database();
export const storage = firebase.storage();