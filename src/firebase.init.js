// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPdjssVOAe4pxLMbSOCcBA-mRBNF5vAls",
    authDomain: "book-closet.firebaseapp.com",
    projectId: "book-closet",
    storageBucket: "book-closet.appspot.com",
    messagingSenderId: "808462911631",
    appId: "1:808462911631:web:bcff18e7e0ef1c238488fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;