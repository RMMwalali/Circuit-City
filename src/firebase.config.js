// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzrxg1juODJmODl6dL0LUUVcdvW2fiDjs",
  authDomain: "circuitcity-9e9d2.firebaseapp.com",
  projectId: "circuitcity-9e9d2",
  storageBucket: "circuitcity-9e9d2.appspot.com",
  messagingSenderId: "536356223820",
  appId: "1:536356223820:web:e77974983fa24a5514ede9",
  measurementId: "G-B30VM0RSS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;