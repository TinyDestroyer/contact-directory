// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtR3HQn_eZE03RXiCR0R18C9xirIh-ApU",
  authDomain: "vite-contact-cdcb5.firebaseapp.com",
  projectId: "vite-contact-cdcb5",
  storageBucket: "vite-contact-cdcb5.appspot.com",
  messagingSenderId: "414594024139",
  appId: "1:414594024139:web:452b662859f61e9cdc514e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);