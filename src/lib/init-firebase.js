// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzmqmkIpv55iwpTXbCmo1WMs60U-UjE9s",
  authDomain: "hassen-test-inventory.firebaseapp.com",
  projectId: "hassen-test-inventory",
  storageBucket: "hassen-test-inventory.appspot.com",
  messagingSenderId: "310719560001",
  appId: "1:310719560001:web:75106f0cde3d40243ac9c0",
  measurementId: "G-YRXSCNL4P3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const db = getFirestore(app)
 const analytics = getAnalytics(app);