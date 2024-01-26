import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import ItemDetail from './ItemDetail'

const ItemCount = ({ producto }) => {

    const [contador, setContador] = useState(0)
    const { cart, setCart } = useContext(CartContext)
  
    const agregarCantidad = () => {
        setCart([{contador},{producto}])
        console.log(cart)
    }

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
    
    
    return (
    <div>
        <Button colorScheme='teal' variant='solid' size='xs' onClick={sumar}>
            +
        </Button>
        <Button onClick={agregarCantidad}>
            Agregar al carrito {contador}
        </Button>
        <Button colorScheme='teal' variant='outline'  size='xs' onClick={restar}>
            -
        </Button>

    </div>
  )
}

export default ItemCount