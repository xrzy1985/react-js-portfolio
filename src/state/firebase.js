import firebase from 'firebase/compat/app';
import { collection, getDocs } from "firebase/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBj7S22Wpvo1O_GHlxbCBbbQBefVvGAf-4",
    authDomain: "react-js-portfolio-6c58c.firebaseapp.com",
    projectId: "react-js-portfolio-6c58c",
    storageBucket: "react-js-portfolio-6c58c.appspot.com",
    messagingSenderId: "987225508948",
    appId: "1:987225508948:web:0fd42f179fe5a4ed36b1c1",
    measurementId: "G-2ZP4NKSD0L"
  };
  
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;