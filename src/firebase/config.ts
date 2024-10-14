// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDJtlMXsvC-vYU368DihCwRVEa66-szgP8",
//   authDomain: "showquest-f5feb.firebaseapp.com",
//   projectId: "showquest-f5feb",
//   storageBucket: "showquest-f5feb.appspot.com",
//   messagingSenderId: "1019925424118",
//   appId: "1:1019925424118:web:f7a8395337bb5cb64349d7",
//   measurementId: "G-DHL9E469N8",
// };
// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);
export const auth = getAuth(app);

export { db };
export default app;
