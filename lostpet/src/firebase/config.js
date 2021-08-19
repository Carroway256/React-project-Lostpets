import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage"; //zdjęć
import "firebase/firestore"; //database
import { GoogleAuthProvider } from "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from "@react-firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCA8s6wB3FnDIvKQEypfDvMMlrp79yhvK4",
  authDomain: "lost-pet-bfaa0.firebaseapp.com",
  databaseURL:
    "https://lost-pet-bfaa0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lost-pet-bfaa0",
  storageBucket: "lost-pet-bfaa0.appspot.com",
  messagingSenderId: "837632602882",
  appId: "1:837632602882:web:f48bc4c7676a8ab190081b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.FacebookAuthProvider();
export { projectStorage, projectFirestore, firebaseConfig, provider };
