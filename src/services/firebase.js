// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCtCVA8W1UieuQNnQ5JYDNUhH-wzfWqjg4",
  authDomain: "fb-clone-6c9fb.firebaseapp.com",
  projectId: "fb-clone-6c9fb",
  storageBucket: "fb-clone-6c9fb.appspot.com",
  messagingSenderId: "63064604806",
  appId: "1:63064604806:web:ce40db2ebe4ac0109b5107",
  measurementId: "G-WBFFTBR9WV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
