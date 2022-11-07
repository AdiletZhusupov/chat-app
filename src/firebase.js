// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs8YteIqBHMxFMvGAnALECTgE6GvmjiqM",
  authDomain: "chat-app-7f65a.firebaseapp.com",
  projectId: "chat-app-7f65a",
  storageBucket: "chat-app-7f65a.appspot.com",
  messagingSenderId: "163787764080",
  appId: "1:163787764080:web:43f2620e85ee134cb2dfb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)