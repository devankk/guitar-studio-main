import { initializeApp, getApps } from 'firebase/app';
import { getDatabase, ref, set, onValue, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDRFznqDm0HOOb0GHv3SWUOv7QN0tXbXOM",
  authDomain: "guitar-studio-main-eba32.firebaseapp.com",
  databaseURL: "https://guitar-studio-main-eba32-default-rtdb.firebaseio.com",
  projectId: "guitar-studio-main-eba32",
  storageBucket: "guitar-studio-main-eba32.firebasestorage.app",
  messagingSenderId: "261966506387",
  appId: "1:261966506387:web:17f942884b57f9d2712066"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getDatabase(app);

// Simple, non-blocking helper
export const ensureAuth = async () => true;

export { db, ref, set, onValue, get };
