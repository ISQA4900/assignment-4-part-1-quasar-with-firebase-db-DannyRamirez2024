import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5TkgbeagVJR6RWjjDRPOyszEMjvnRbtg",
    authDomain: "quasartodolist-7bd95.firebaseapp.com",
    projectId: "quasartodolist-7bd95",
    storageBucket: "quasartodolist-7bd95.appspot.com",
    messagingSenderId: "496962677987",
    appId: "1:496962677987:web:40c55b9f7fe1c61fa9a9d6",
    measurementId: "G-HG9DSD3W8Q"
  };

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
