import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCPMmqRj7B542cLPX1Zi-D7P-TyyrIxGMM",
  authDomain: "sid-firegram-8db85.firebaseapp.com",
  databaseURL: "https://sid-firegram-8db85.firebaseio.com",
  projectId: "sid-firegram-8db85",
  storageBucket: "sid-firegram-8db85.appspot.com",
  messagingSenderId: "549461671921",
  appId: "1:549461671921:web:801bbb6fd2aa2e3a16ce50",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
