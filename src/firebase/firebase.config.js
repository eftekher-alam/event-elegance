// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKEhbaxNlElEvBzRYCsgfF9uvxZ5EpF4M",
    authDomain: "event-elegance.firebaseapp.com",
    projectId: "event-elegance",
    storageBucket: "event-elegance.appspot.com",
    messagingSenderId: "395382817977",
    appId: "1:395382817977:web:7786bf7ef6aaabbe518768"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;