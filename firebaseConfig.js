// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApKYjQ8NcYKF3V3ZifFdUNX1KNqshkwBA",
  authDomain: "instegream.firebaseapp.com",
  projectId: "instegream",
  storageBucket: "instegream.appspot.com",
  messagingSenderId: "652226314514",
  appId: "1:652226314514:web:3aa4d89a2766e95bef73cb",
  measurementId: "G-6CDDY6QPWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
module.exports =  db
