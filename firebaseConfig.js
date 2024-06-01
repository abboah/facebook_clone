// firebaseConfig.js
import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCh0qOky8CAh83MPymWn0-M2VYUw95W6q4",
  authDomain: "facebook-clone-c2979.firebaseapp.com",
  databaseURL: "https://facebook-clone-c2979-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-c2979",
  storageBucket: "facebook-clone-c2979.appspot.com",
  messagingSenderId: "122991990276",
  appId: "1:122991990276:web:2af3d2fdc015f674528751",
  measurementId: "G-ZE99E74CG7"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase