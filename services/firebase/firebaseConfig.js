import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyALJ99wQG9ObhAOVMxW-C8PRT_018NDb4Y",
  authDomain: "usonic-db.firebaseapp.com",
  databaseURL: "https://usonic-db-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "usonic-db",
  storageBucket: "usonic-db.appspot.com",
  messagingSenderId: "578529676560",
  appId: "1:578529676560:web:486b06edaf8de4ca2ae995"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);