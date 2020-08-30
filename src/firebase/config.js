import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDR99Qo_VH4M9TmaiTJq1UEDWG60ZfjfOk",
  authDomain: "ninja-firegram-1d0fd.firebaseapp.com",
  databaseURL: "https://ninja-firegram-1d0fd.firebaseio.com",
  projectId: "ninja-firegram-1d0fd",
  storageBucket: "ninja-firegram-1d0fd.appspot.com",
  messagingSenderId: "508624232559",
  appId: "1:508624232559:web:4ffbda15bbd2342cd66d9a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
