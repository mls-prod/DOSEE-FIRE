//* Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

//* Add the Web App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQEI01TPPgTyFhiOgEGDLBnnXAilJzuQY",
  authDomain: "lares-ae313.firebaseapp.com",
  projectId: "lares-ae313",
  storageBucket: "lares-ae313.firebasestorage.app",
  messagingSenderId: "723949289685",
  appId: "1:723949289685:web:896a92461e18d12bb6e25c",
  measurementId: "G-V6DNY484YR"
};

//* Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

//* Initialize Firebase Auth and set persistence
const auth = getAuth(firebase_app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Session persistence set to LOCAL");
  })
  .catch((error) => {
    console.error("Failed to set session persistence:", error);
  });

export { auth };
export default firebase_app;
