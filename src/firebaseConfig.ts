// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6LxN1GiUeK5wWknCICzgbVPiLCQhOp_8",
  authDomain: "galaxy-life-coords.firebaseapp.com",
  projectId: "galaxy-life-coords",
  storageBucket: "galaxy-life-coords.firebasestorage.app",
  messagingSenderId: "412525737493",
  appId: "1:412525737493:web:935b7b1d0b4e67789dc01c",
  measurementId: "G-ZX4Z0N1MLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
