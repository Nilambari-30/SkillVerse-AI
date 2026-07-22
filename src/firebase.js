import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBT_GMLAcEAKEjK2CwyHYnY5uEnkb21Du8",
  authDomain: "virelo-df600.firebaseapp.com",
  projectId: "virelo-df600",
  storageBucket: "virelo-df600.firebasestorage.app",
  messagingSenderId: "201173362777",
  appId: "1:201173362777:web:b4ac4f3da3e2011818e948",
  measurementId: "G-8R37H1H3N9"
};



const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const db = getFirestore(app);