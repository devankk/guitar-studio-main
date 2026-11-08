import { initializeApp, getApps } from 'firebase/app';
import { getDatabase, ref, set, onValue, get } from 'firebase/database';
import { getAuth, signInAnonymously } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDMfXvTkKPUrH58FIYePnO7FFB2QLPB-j0",
  authDomain: "guitar-studio-main.firebaseapp.com",
  databaseURL: "https://guitar-studio-main-default-rtdb.firebaseio.com",
  projectId: "guitar-studio-main",
  storageBucket: "guitar-studio-main.firebasestorage.app",
  messagingSenderId: "401178960641",
  appId: "1:401178960641:web:f8f5a0906bcae4c653b100",
  measurementId: "G-Z46Y01DH4N"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getDatabase(app);
const auth = getAuth(app);

// Authenticate anonymously so the security rule '.read: auth != null' permits access
let authPromise = null;
export const ensureAuth = async () => {
  if (auth.currentUser) return auth.currentUser;
  if (!authPromise) {
    authPromise = signInAnonymously(auth).catch(err => {
      console.warn('Firebase anonymous auth notice:', err);
      authPromise = null;
      return null;
    });
  }
  return authPromise;
};

// Immediately initiate auth
ensureAuth();

export { db, auth, ref, set, onValue, get };
