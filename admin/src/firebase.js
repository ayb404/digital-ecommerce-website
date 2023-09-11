import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admin-panel-ea794.firebaseapp.com",
  projectId: "admin-panel-ea794",
  storageBucket: "admin-panel-ea794.appspot.com",
  messagingSenderId: "462707000110",
  appId: "1:462707000110:web:acb9bc7e69214e07e030bf",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
