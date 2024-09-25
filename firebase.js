import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCI5XQLiV_Wta1DgxfetFrAEDGby9g-u8U",
    authDomain: "lab1-ea325.firebaseapp.com",
    projectId: "lab1-ea325",
    storageBucket: "lab1-ea325.appspot.com",
    messagingSenderId: "920717597104",
    appId: "1:920717597104:web:d82585a094f2ba3d5e5e75",
    measurementId: "G-684JY3MP7K"
  };
  

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app); // Khởi tạo Firestore

// Export Firestore and other services
export { db, analytics };