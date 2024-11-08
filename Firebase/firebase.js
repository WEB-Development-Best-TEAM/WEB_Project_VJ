// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-2TXkRQctmjszyQFCn4lYMT0Hu16uIKQ",
    authDomain: "webgamedevelopment.firebaseapp.com",
    projectId: "webgamedevelopment",
    storageBucket: "webgamedevelopment.firebasestorage.app",
    messagingSenderId: "584475071114",
    appId: "1:584475071114:web:7bdc8d1ace4d86bb289373",
    measurementId: "G-GMZ72EVWQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);