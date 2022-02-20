import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA225wQOjaCvZ36dFgJg0gEEqJ7I1-1Sjk",
  authDomain: "mchat-6df1b.firebaseapp.com",
  projectId: "mchat-6df1b",
  storageBucket: "mchat-6df1b.appspot.com",
  messagingSenderId: "116583105386",
  appId: "1:116583105386:web:e6e44947bd2ec8119cdb13",
  measurementId: "G-KRX26MF0ZR"
};

const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);
export const provider = new GoogleAuthProvider();
 const db  = getFirestore(app);
 export default db;
