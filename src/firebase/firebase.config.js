// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqos8sggDzjMXEyUIf5l_8k_G5yD-opK0",
  authDomain: "stunning-flight-360920.firebaseapp.com",
  projectId: "stunning-flight-360920",
  storageBucket: "stunning-flight-360920.appspot.com",
  messagingSenderId: "194714038280",
  appId: "1:194714038280:web:9502a059a96751c95861bd",
  measurementId: "G-SNV1SQKH56",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
