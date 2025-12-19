// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInAnonymously,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
  } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    serverTimestamp,
    collection,
    query,
    orderBy,
    limit,
    getDocs,
  } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js ";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import configuration from config.local.js (gitignored)
// If config.local.js doesn't exist, copy config.example.js to config.local.js and fill in your values
import { firebaseConfig } from './config.local.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {
  app,
  auth,
  db,
  GoogleAuthProvider,
  signInAnonymously,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
};