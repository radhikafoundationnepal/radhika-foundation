import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC8U2mrdyAPiW69JXt-jHzcT2TpR9sXGNc",
  authDomain: "radhika-foundation-nepal.firebaseapp.com",
  projectId: "radhika-foundation-nepal",
  storageBucket: "radhika-foundation-nepal.firebasestorage.app",
  messagingSenderId: "829755702698",
  appId: "1:829755702698:web:599f307482c71bcde4bfd3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;