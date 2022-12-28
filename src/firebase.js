import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAkDrmcsk1XCuUcFY_e7JwKLO-WONkDukc",
    authDomain: "linkedin-clone-a56b5.firebaseapp.com",
    projectId: "linkedin-clone-a56b5",
    storageBucket: "linkedin-clone-a56b5.appspot.com",
    messagingSenderId: "923976296236",
    appId: "1:923976296236:web:591a543f8876aa7948ee89"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export{db,auth};