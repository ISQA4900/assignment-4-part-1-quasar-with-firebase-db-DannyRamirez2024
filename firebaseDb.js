import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdW2B21s-nhiF2YuSaZhbGl3GQstyrkDA",
    authDomain: "quasartodolist-7e5ac.firebaseapp.com",
    projectId: "quasartodolist-7e5ac",
    storageBucket: "quasartodolist-7e5ac.appspot.com",
    messagingSenderId: "657273647671",
    appId: "1:657273647671:web:07200af0b24ef4e117c5b2",
    measurementId: "G-JLBVSFGE44"
  };

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
