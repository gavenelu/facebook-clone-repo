// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6iTxxJut5ZsppeQBkxUgRoOLM9qSRDN8",
    authDomain: "facebook-clone-4202c.firebaseapp.com",
    projectId: "facebook-clone-4202c",
    storageBucket: "facebook-clone-4202c.appspot.com",
    messagingSenderId: "206258478091",
    appId: "1:206258478091:web:ca014b387a936bb6e4fb0e",
    measurementId: "G-ZYVF6SWP8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

export { auth, provider };
export default db;