
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC7KDbBE85tpXoqjIqukIF1NRggACW5VlE",
  authDomain: "instagram-clone-56f14.firebaseapp.com",
  projectId: "instagram-clone-56f14",
  storageBucket: "instagram-clone-56f14.appspot.com",
  messagingSenderId: "367563443056",
  appId: "1:367563443056:web:56012ecbd250db90899db5",
  measurementId: "G-X5W9SJ8WTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const dB = getFirestore(app);
const storage= getStorage()

export {auth,analytics,storage}
export default dB