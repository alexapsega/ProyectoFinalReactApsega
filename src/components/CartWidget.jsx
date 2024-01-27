import React from 'react'
import { useState} from 'react'
import { Button, Spacer } from '@chakra-ui/react'
import { BsCart4 } from "react-icons/bs";
import ItemCount from './ItemCount'
import Cart from './Cart';


const CartWidget = () => {
  const sumar = () => {
    if (contador <10){
        setContador(contador + 1)
    }
}

  const restar = () => {
    if (contador >0){
        setContador(contador - 1)
    }
}
  const [contador,setContador] = useState(0)
  return (
    <div>
      <Spacer />
          <BsCart4 />
      <Spacer />
          {contador}
      <Spacer/>
          <Button colorScheme='purple'onClick={<Cart/>}> Ver carrito </Button>
    </div>
    
  )
}

export default CartWidget