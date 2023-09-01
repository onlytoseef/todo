// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";
import {
    getFirestore
} from "firebase/firestore/lite";
import {
    getAuth
} from "firebase/auth";
import {
    getStorage
} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAT4yAtE0ZXkBHtFWbgkR0QR6t3SuwZM-M",
    authDomain: "stickywalltodo.firebaseapp.com",
    projectId: "stickywalltodo",
    storageBucket: "stickywalltodo.appspot.com",
    messagingSenderId: "380013726045",
    appId: "1:380013726045:web:d3418b9d435c222b29c0b4",
    measurementId: "G-CB109N8TKG"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);