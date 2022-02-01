import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIbcy0zx_zU2wOVKpSmgVXCBBxI_kO73s",
  authDomain: "chatapp-54c3f.firebaseapp.com",
  projectId: "chatapp-54c3f",
  storageBucket: "chatapp-54c3f.appspot.com",
  messagingSenderId: "953252107559",
  appId: "1:953252107559:web:f538ca082a5914ae8a4502",
  measurementId: "G-JZZ5BFG6SD"
};

const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);
export const provider = new GoogleAuthProvider();
