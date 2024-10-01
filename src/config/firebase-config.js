// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import the authentication from the firebase
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdbuWUiHqHHf6Et-wdDa925EL1Twf_Q0A",
  authDomain: "expense-tracker-4656f.firebaseapp.com",
  projectId: "expense-tracker-4656f",
  storageBucket: "expense-tracker-4656f.appspot.com",
  messagingSenderId: "590195069631",
  appId: "1:590195069631:web:ebafa79e5312d5d86dec0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
