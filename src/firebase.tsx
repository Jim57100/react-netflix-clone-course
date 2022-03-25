import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig =  {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
 export const db = getFirestore(app);
export { auth }