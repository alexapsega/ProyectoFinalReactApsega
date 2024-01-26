import React from 'react'
import { useContext , useState } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import CartWidget from './CartWidget'
import ItemCount from './ItemCount'

const Cart = () => {
  
  const { cart, setCart } = useContext(CartContext)
  const [contador, setContador] = useState(0)

  return (
    <div>
      
      { contador > 0 ? <h1> Hay {cantidad} libros en el carrito</h1> : <h2> No hay elementos en el carrito </h2> }
    
    //** ACA PONGO UN BOTON CON onClick={() => setCart("Nuevo valor")} **/

    </div>
  )
}

export default Cart