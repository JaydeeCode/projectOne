// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ4h9it8qRRm0lU9FzZBIIQfyvUXnUuE8",
  authDomain: "e-commerce-60c27.firebaseapp.com",
  projectId: "e-commerce-60c27",
  storageBucket: "e-commerce-60c27.appspot.com",
  messagingSenderId: "211144425766",
  appId: "1:211144425766:web:45715e79e8561db8e201e7",
  measurementId: "G-Q4F8S7MVC7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
