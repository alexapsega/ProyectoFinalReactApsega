import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import ShoppingCartContext from './context/ShoppingCartContext'


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