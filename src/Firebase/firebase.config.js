// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOjGidWPoyfAesCiMvtpX-bLSMwW3IJ4A",
  authDomain: "doctors-portal-88bd5.firebaseapp.com",
  projectId: "doctors-portal-88bd5",
  storageBucket: "doctors-portal-88bd5.appspot.com",
  messagingSenderId: "711277616540",
  appId: "1:711277616540:web:1d5028b67353ca68283c59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;