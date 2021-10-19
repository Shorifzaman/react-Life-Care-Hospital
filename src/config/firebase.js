import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAdMLs3GTT1Dy0-ZGtx8JQ4K8tUEF_AFfo",
    authDomain: "ema-jon-auth-3f432.firebaseapp.com",
    projectId: "ema-jon-auth-3f432",
    storageBucket: "ema-jon-auth-3f432.appspot.com",
    messagingSenderId: "452248473815",
    appId: "1:452248473815:web:eb8a3e8e3d6c24fcd96092"
  };
  


// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;