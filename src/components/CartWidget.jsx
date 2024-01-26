import React from 'react'
import { useState} from 'react'
import { Button } from '@chakra-ui/react'
import { BsCart4 } from "react-icons/bs";
import ItemCount from './ItemCount'


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
      <BsCart4 />
      {contador}
      <Button colorScheme='green'onClick={sumar}> Agregar al carrito </Button>
      <Button colorScheme='red'onClick={restar}> Quitar del carrito </Button>
      
    </div>
    
  )
}

export default CartWidget