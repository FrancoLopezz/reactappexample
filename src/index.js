import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW4I6xvIa7Z3kLea0sATClOcQ8L_9u2p8",
  authDomain: "primer-ecommerce-2f1fb.firebaseapp.com",
  projectId: "primer-ecommerce-2f1fb",
  storageBucket: "primer-ecommerce-2f1fb.appspot.com",
  messagingSenderId: "789628756968",
  appId: "1:789628756968:web:0f0cb351ef32242e0efa5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
