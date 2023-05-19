// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUZxFpxbn_d2JDHxe7vWxwwHTAaPuxtKo",
  authDomain: "toy-sports-car.firebaseapp.com",
  projectId: "toy-sports-car",
  storageBucket: "toy-sports-car.appspot.com",
  messagingSenderId: "523637698163",
  appId: "1:523637698163:web:08fecaef9cffd180b84406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;