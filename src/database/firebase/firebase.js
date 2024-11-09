// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnGPgajREcNkoELfV1e0uvcmHneX8HwwQ",
  authDomain: "hhticketreserve.firebaseapp.com",
  projectId: "hhticketreserve",
  storageBucket: "hhticketreserve.firebasestorage.app",
  messagingSenderId: "380928795424",
  appId: "1:380928795424:web:c7211c0fda9f061170ed45",
  measurementId: "G-QXRQDGYSGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);