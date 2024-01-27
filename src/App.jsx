import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import ShoppingCartContext from './context/ShoppingCartContext'

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

const App = () => {
  return (
  <BrowserRouter>
    <ShoppingCartContext>
    
      <NavBar />
    
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenido al Book E-Commerce'}/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route exact path='/categoria/:categoriaId' element={<ItemListContainer greeting={'Bienvenido al Book E-Commerce'}/>} />
        <Route exact path='/producto/:id' element={<ItemDetailContainer/>} />
    
      </Routes>
    


    
      </ShoppingCartContext>
    </BrowserRouter>
  )
}

export default App