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

// Authenticate anonymously without throwing or blocking operations
export const ensureAuth = async () => {
  if (auth.currentUser) return auth.currentUser;
  try {
    const cred = await signInAnonymously(auth);
    return cred.user;
  } catch (err) {
    // If auth is optional or rules allow direct access, do not block database operations
    console.warn('Anonymous auth note (continuing to database):', err?.message);
    return null;
  }
};

// Initiate in background
ensureAuth();

export { db, auth, ref, set, onValue, get };
