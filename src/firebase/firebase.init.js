// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-ZFoQnL2YK_8hmUlAFEJQ3jDlsfbYvrg",
  authDomain: "coffee-store-app-60e3c.firebaseapp.com",
  projectId: "coffee-store-app-60e3c",
  storageBucket: "coffee-store-app-60e3c.firebasestorage.app",
  messagingSenderId: "797926038339",
  appId: "1:797926038339:web:6261cd56487955fd25edf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;