// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoCR4aZeCqTAudtmTSI0MJ650KRgykG50",
  authDomain: "flat-project-b61be.firebaseapp.com",
  projectId: "flat-project-b61be",
  storageBucket: "flat-project-b61be.appspot.com",
  messagingSenderId: "313614409486",
  appId: "1:313614409486:web:25ac1ed0185469b010c15f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);