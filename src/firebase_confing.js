import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDimeO6J_rMS3qlECMluA1ktrIHOdRBJFM",
  authDomain: "todoapp-d2c14.firebaseapp.com",
  projectId: "todoapp-d2c14",
  storageBucket: "todoapp-d2c14.appspot.com",
  messagingSenderId: "923537681692",
  appId: "1:923537681692:web:3a6614499d404c5c48ded9",
});

const db = getFirestore(firebaseApp);

export { db };
