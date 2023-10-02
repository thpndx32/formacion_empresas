import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrLlJWcSFSSwus3eZnM_DeqTsopfjJxwg",
  authDomain: "llamkay.firebaseapp.com",
  projectId: "llamkay",
  storageBucket: "llamkay.appspot.com",
  messagingSenderId: "340999838359",
  appId: "1:340999838359:web:63a5e7cb8434f0fd7427d2",
  measurementId: "G-9G5217M5P4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);