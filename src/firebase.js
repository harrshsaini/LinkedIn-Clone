
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDBYbDvdLhL7Y6CRSyFPwaOsPbGYD4fPIE",
    authDomain: "linkedin-clone-11d38.firebaseapp.com",
    projectId: "linkedin-clone-11d38",
    storageBucket: "linkedin-clone-11d38.appspot.com",
    messagingSenderId: "931833479689",
    appId: "1:931833479689:web:2a581b08b14991667eeed8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};