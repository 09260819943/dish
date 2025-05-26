// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyAJKh6toED8wpscgB-aYDL6IqvjxrBtsq0",
  authDomain: "dishcovery-c2f1a.firebaseapp.com",
  projectId: "dishcovery-c2f1a",
  storageBucket: "dishcovery-c2f1a.firebasestorage.app",
  messagingSenderId: "420338273178",
  appId: "1:420338273178:web:f776593f09dd1ded9d0823"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);