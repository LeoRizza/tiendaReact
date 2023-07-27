
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC08aFNId41b3WPrS8Pb0E2Z5efngDzoFM",
    authDomain: "ecomercereact-c6e71.firebaseapp.com",
    projectId: "ecomercereact-c6e71",
    storageBucket: "ecomercereact-c6e71.appspot.com",
    messagingSenderId: "851922682181",
    appId: "1:851922682181:web:9fdcad3a4d75099914fe2c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);