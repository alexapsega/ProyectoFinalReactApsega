import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7s1KhMYEVRnhJJfbwYU0qlFoaBeXPIPg",
  authDomain: "book-e-commerce-aps.firebaseapp.com",
  projectId: "book-e-commerce-aps",
  storageBucket: "book-e-commerce-aps.appspot.com",
  messagingSenderId: "505542442869",
  appId: "1:505542442869:web:8e253cedcf3d59a4a11d3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(

    <ChakraProvider>
        <App />
    </ChakraProvider>
)