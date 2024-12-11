// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBmDf6NoXKgnNzADqq6ACDWoB2l0m0DD7Y',
  authDomain: 'fir-project-54358.firebaseapp.com',
  projectId: 'fir-project-54358',
  storageBucket: 'fir-project-54358.firebasestorage.app',
  messagingSenderId: '1068037935534',
  appId: '1:1068037935534:web:679027116ef46c0eca383f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
