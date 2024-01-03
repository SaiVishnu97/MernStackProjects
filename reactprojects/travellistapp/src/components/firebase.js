// Import the functions you need from the SDKs you need
import myFirebase from "firebase/compat/app"
import "firebase/compat/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIVbV6EcqkDnvRDtFqMgiz5CQmx8i3OUs",
  authDomain: "tripapplication-269ce.firebaseapp.com",
  projectId: "tripapplication-269ce",
  storageBucket: "tripapplication-269ce.appspot.com",
  messagingSenderId: "638040960276",
  appId: "1:638040960276:web:ce90eb5c93a0040482e601",
  measurementId: "G-CDV7EHFCEQ"
};

// Initialize Firebase
const app = myFirebase.initializeApp(firebaseConfig);
export const database=myFirebase.firestore()
export const myAuth = getAuth(app)//Authentication in Firebase

export const myProvider = new GoogleAuthProvider()//Google Authentication in Firebase