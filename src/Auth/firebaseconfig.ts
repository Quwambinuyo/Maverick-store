// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDT-kvMipecEBTwOT1dGzVNZO0NCyLdPBQ",
  authDomain: "maverick-store.firebaseapp.com",
  projectId: "maverick-store",
  storageBucket: "maverick-store.firebasestorage.app",
  messagingSenderId: "441768973326",
  appId: "1:441768973326:web:b9a05fac367eff3749185f",
  measurementId: "G-PPWTTK9W0K",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
