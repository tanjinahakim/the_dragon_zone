// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHWfxcszk8LM7fTnpczlIUOO3dyELCZS0",
  authDomain: "the-dragon-news-c9b22.firebaseapp.com",
  projectId: "the-dragon-news-c9b22",
  storageBucket: "the-dragon-news-c9b22.appspot.com",
  messagingSenderId: "749022316730",
  appId: "1:749022316730:web:ebaea26cda96d871521a83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;