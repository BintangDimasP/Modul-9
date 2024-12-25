import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyBnMxzXZVv-W7V7FfaZiin4h678T2xB-KQ",
  authDomain: "modul-9-1838f.firebaseapp.com",
  databaseURL: "https://modul-9-1838f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "modul-9-1838f",
  storageBucket: "modul-9-1838f.firebasestorage.app",
  messagingSenderId: "207687039353",
  appId: "1:207687039353:web:ee9c862fb54446fb24d7a8",
});

const FIREBASE = firebase;

export default FIREBASE;
