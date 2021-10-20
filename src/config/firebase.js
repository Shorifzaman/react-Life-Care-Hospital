import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdR40ZaRnr38PkPGnFqb-H2MtQ6ILJQt8",
  authDomain: "life-careltd.firebaseapp.com",
  projectId: "life-careltd",
  storageBucket: "life-careltd.appspot.com",
  messagingSenderId: "354683187775",
  appId: "1:354683187775:web:6dc2647e172992b078fe8a"
};
  


// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;