import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNbYBhNnDRVxwNgFmiRuwhst-WA64r5Mc",
    authDomain: "nicai-7cd4f.firebaseapp.com",
    projectId: "nicai-7cd4f",
    storageBucket: "nicai-7cd4f.appspot.com",
    messagingSenderId: "558172528240",
    appId: "1:558172528240:web:fda5585327cfb3aab9deb5"
  };
  
  // Initialize Firebase
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db }