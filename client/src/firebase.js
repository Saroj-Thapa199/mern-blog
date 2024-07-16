// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-61267.firebaseapp.com",
  projectId: "mern-blog-61267",
  storageBucket: "mern-blog-61267.appspot.com",
  messagingSenderId: "519528615413",
  appId: "1:519528615413:web:2917c3e4c326ebafe424bc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
