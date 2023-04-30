import { boot } from 'quasar/wrappers'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeZ26sDlcZPfZHo5XypX390nW7VkXzL60",
    authDomain: "chat-9fea4.firebaseapp.com",
    projectId: "chat-9fea4",
    storageBucket: "chat-9fea4.appspot.com",
    messagingSenderId: "683886747653",
    appId: "1:683886747653:web:bce2f7354a16542da47c6c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const chatTimeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export { db, auth, chatTimeStamp }