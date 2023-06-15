import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyClwMVuTeONKP3zh83EuzyFsYycpoXAjtY",
    authDomain: "library-app-4f4e8.firebaseapp.com",
    projectId: "library-app-4f4e8",
    storageBucket: "library-app-4f4e8.appspot.com",
    messagingSenderId: "332701521954",
    appId: "1:332701521954:web:14f4cbd58ec92bdddcd27b",
    measurementId: "G-ZDBBFK8ZCS"
};

const app = initializeApp(firebaseConfig);

let db = getFirestore(app);
let auth = getAuth(app);

export { db , auth}
