// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlTYtr1UUn2NCTqFvgRlpFrr5JskQSOMw",
  authDomain: "monkey-blogging-b42c6.firebaseapp.com",
  projectId: "monkey-blogging-b42c6",
  storageBucket: "monkey-blogging-b42c6.appspot.com",
  messagingSenderId: "204233065531",
  appId: "1:204233065531:web:6a063a65cca2566fd0081e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);