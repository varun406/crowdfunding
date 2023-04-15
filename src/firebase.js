// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATkbbUC3zmcwc_1dgt9pw9JafGSPh60ys",
  authDomain: "crowdfunding-87b2c.firebaseapp.com",
  projectId: "crowdfunding-87b2c",
  storageBucket: "crowdfunding-87b2c.appspot.com",
  messagingSenderId: "78057406618",
  appId: "1:78057406618:web:e39e13635d32a3f6245f23",
  measurementId: "G-8C5VJB5KMP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
