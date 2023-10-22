import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCx9LJNCwlwcs7WNXrT44W3jW0CQ-lJNfY",
  authDomain: "posts-app-821a8.firebaseapp.com",
  projectId: "posts-app-821a8",
  storageBucket: "posts-app-821a8.appspot.com",
  messagingSenderId: "720793373761",
  appId: "1:720793373761:web:b3bab79e83ce368c950ac0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
