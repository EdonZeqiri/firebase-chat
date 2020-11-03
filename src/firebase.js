import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBYOo6eRWQKTGLyvoaDhryKXEeDQSEXubQ",
    authDomain: "imessage-clone-yt-1048f.firebaseapp.com",
    databaseURL: "https://imessage-clone-yt-1048f.firebaseio.com",
    projectId: "imessage-clone-yt-1048f",
    storageBucket: "imessage-clone-yt-1048f.appspot.com",
    messagingSenderId: "974549590726",
    appId: "1:974549590726:web:6ed517b93e436265e5adc7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

