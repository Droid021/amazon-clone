import firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "plant-288316.firebaseapp.com",
  databaseURL: "https://plant-288316.firebaseio.com",
  projectId: "plant-288316",
  storageBucket: "plant-288316.appspot.com",
  messagingSenderId: "1073747207020",
  appId: "1:1073747207020:web:358ee4dea4f5ecaf388949"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export {db, auth}