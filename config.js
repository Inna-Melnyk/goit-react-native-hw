// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAobrC93vUwytOpKIOe2_w6Fvi9m1umZxM",
  authDomain: "react-native-app-90dc7.firebaseapp.com",
  projectId: "react-native-app-90dc7",
  storageBucket: "react-native-app-90dc7.appspot.com",
  messagingSenderId: "276164188453",
  appId: "1:276164188453:web:3aca95f106b69ac3e222cc",
  measurementId: "G-11SFB89J5C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// console.log(auth);