// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7tuEmrFgMOprrbCUYXrZoKkC8yflkBEM",
  authDomain: "netflixgpt-4d56e.firebaseapp.com",
  projectId: "netflixgpt-4d56e",
  storageBucket: "netflixgpt-4d56e.appspot.com",
  messagingSenderId: "278823462461",
  appId: "1:278823462461:web:f123eb96fbb9dae2efec54",
  measurementId: "G-CE32JYJLEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth()