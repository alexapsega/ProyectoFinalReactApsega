import React from 'react'
import { useContext , useState } from 'react'
import { Button } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext.jsx'
import CartWidget from './CartWidget.jsx'
import ItemCount from './ItemCount.jsx'


const Cart = () => {
  
  const { cart, setCart } = useContext(CartContext)
  const [contador, setContador] = useState(0)

  return (
    <div>
      
      { contador > 0 ? <h1> Hay {cantidad} libros en el carrito</h1> : <h2> No hay elementos en el carrito </h2> }
    
    <Button > Finalizar compra </Button>

    </div>
  )
}

export default Cart