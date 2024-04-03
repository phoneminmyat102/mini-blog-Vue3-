import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGz7nMvE5_AKr_H51NolQCLddFKGaaWmo",
  authDomain: "vue-project-system.firebaseapp.com",
  projectId: "vue-project-system",
  storageBucket: "vue-project-system.appspot.com",
  messagingSenderId: "780609585355",
  appId: "1:780609585355:web:1c608c3ca846743472db4e",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// database set up 
let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {db, timestamp};