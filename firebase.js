// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClv5PipgT55VSIn3MYVHhuuFQtDNSWYWI",
  authDomain: "ecommerce-6d502.firebaseapp.com",
  projectId: "ecommerce-6d502",
  storageBucket: "ecommerce-6d502.appspot.com",
  messagingSenderId: "37693060753",
  appId: "1:37693060753:web:43aa53246184f02efe7130",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
