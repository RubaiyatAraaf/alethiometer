import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCBnnoWPa_tQUcGQPowfm0RiCfKAUnaNNw",
  authDomain: "alethiometer-optiverse.firebaseapp.com",
  projectId: "alethiometer-optiverse",
  storageBucket: "alethiometer-optiverse.firebasestorage.app",
  messagingSenderId: "463547814990",
  appId: "1:463547814990:web:0fac15891cbf3578711f1f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
