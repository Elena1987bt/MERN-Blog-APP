import { initializeApp } from 'firebase/app';

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'netflix-mern-app.firebaseapp.com',
  projectId: 'netflix-mern-app',
  storageBucket: 'netflix-mern-app.appspot.com',
  messagingSenderId: '11498212029',
  appId: '1:11498212029:web:a4a7fc4740ffb7272e05d4',
  measurementId: 'G-Z0W5FLB9H2',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export { storage, ref, uploadBytesResumable, getDownloadURL };
