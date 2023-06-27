import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCkjjnPDj-iPxv5jDeWHHbAd46BSeIP_6Q",
    authDomain: "conat-d2e3c.firebaseapp.com",
    databaseURL: "https://conat-d2e3c-default-rtdb.firebaseio.com",
    projectId: "conat-d2e3c",
    storageBucket: "conat-d2e3c.appspot.com",
    messagingSenderId: "877280494472",
    appId: "1:877280494472:web:4ef2e651856ab9391b703d",
    measurementId: "G-7GRC2L5HHP"
  };


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);