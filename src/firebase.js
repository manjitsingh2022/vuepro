import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration

//firebase firetore function
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore/lite";

//firebase storage function
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

//firebase auth
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword,GoogleAuthProvider,onAuthStateChanged,signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB51wxFsWmD0-w2awlPnTmL_5JYrstIrn8",
  authDomain: "vuepro-98519.firebaseapp.com",
  projectId: "vuepro-98519",
  storageBucket: "vuepro-98519.appspot.com",
  messagingSenderId: "942287001255",
  appId: "1:942287001255:web:c9a8c31c101881cfd82d82",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {
  app,
  db,auth,GoogleAuthProvider,signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged,signInWithPopup,
  collection,
  getDoc,
  getDocs,
  doc,
  addDoc,
  updateDoc,
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
 
};
