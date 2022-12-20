import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auht";

const firebaseConfig = {
  apiKey: "AIzaSyAPzq9v6delUQpRwMjuN5eXDzZma2AkWQU",
  authDomain: "chat-29ca9.firebaseapp.com",
  projectId: "chat-29ca9",
  storageBucket: "chat-29ca9.appspot.com",
  messagingSenderId: "690296200012",
  appId: "1:690296200012:web:2b2ed98da05c2a7f78cde9",
  measurementId: "G-3KT92KTWYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
