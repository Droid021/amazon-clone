import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA72gMpMrNY9WzpffwVnTkW813HVulgeVA",
  authDomain: "clone-6dc1b.firebaseapp.com",
  databaseURL: "https://clone-6dc1b.firebaseio.com",
  projectId: "clone-6dc1b",
  storageBucket: "clone-6dc1b.appspot.com",
  messagingSenderId: "727618183904",
  appId: "1:727618183904:web:822765506887cd1211e685"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export {db, auth}