/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5W_B6nXxaTD-U5Tu1O9IL4nveOBvQ1kA",
  authDomain: "test4vcoin.firebaseapp.com",
  projectId: "test4vcoin",
  storageBucket: "test4vcoin.appspot.com",
  messagingSenderId: "780016578337",
  appId: "1:780016578337:web:3f3853dcef0bf191fd9860",
  measurementId: "G-CS3WBWMZ3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);