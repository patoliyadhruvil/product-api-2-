// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhZUN27EagIhG0Xlo05E2lXTx4JI3iAuM",
  authDomain: "products-9ebb8.firebaseapp.com",
  projectId: "products-9ebb8",
  storageBucket: "products-9ebb8.appspot.com",
  messagingSenderId: "502948161589",
  appId: "1:502948161589:web:e12ff39a5241c7ef6b697c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authUser = getAuth(app);
export const provider = new GoogleAuthProvider();