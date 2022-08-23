// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7XxRoQp_tL_nIj1aFOeWzB3_CHBk1Kns",
  authDomain: "netflix-clone-alexandra.firebaseapp.com",
  projectId: "netflix-clone-alexandra",
  storageBucket: "netflix-clone-alexandra.appspot.com",
  messagingSenderId: "1017398689474",
  appId: "1:1017398689474:web:b812ae37d9c2ec9b9bc55b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);