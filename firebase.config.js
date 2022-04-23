import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_R8WRslO2grL6CCY7FAqRI0YVyzE798w",
  authDomain: "test-b04e8.firebaseapp.com",
  projectId: "test-b04e8",
  storageBucket: "test-b04e8.appspot.com",
  messagingSenderId: "682642132165",
  appId: "1:682642132165:web:c7d3542c5bdd114357f4ac",
  measurementId: "G-ZSWF480YBB",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
